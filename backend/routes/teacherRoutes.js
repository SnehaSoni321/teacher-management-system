const express = require("express");
const router = express.Router();
const Teacher = require("../models/Teacher");
const nodemailer = require("nodemailer");
const User = require("../models/User");

router.post("/add", async (req, res) => {
  try {
   const teacher = new Teacher({
  ...req.body,
  password: "teacher123",
});

await teacher.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: req.body.email,
      subject: "Teacher Schedule",
      text: `Hello ${req.body.name},

Your account has been created successfully.

Login Details:
Email: ${req.body.email}
Password: teacher123

Subject: ${req.body.subject}
Timing: ${req.body.timing}

Thank you.`,
    });

    res.json({ message: "Teacher added and email sent successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/all", async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);

    console.log("Deleting teacher:", teacher.email);

    if (!teacher) {
      return res.status(404).json({
        message: "Teacher not found",
      });
    }

   const deletedUser = await User.findOneAndDelete({
  email: teacher.email,
});

console.log("Deleted user:", deletedUser);

    await Teacher.findByIdAndDelete(req.params.id);

    res.json({
      message: "Teacher deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    await Teacher.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Teacher updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;