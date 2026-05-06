const express = require("express");
const router = express.Router();
const Teacher = require("../models/Teacher");

router.post("/add", async (req, res) => {
  try {
    const teacher = new Teacher(req.body);
    await teacher.save();

    res.json({ message: "Teacher added successfully" });
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
    await Teacher.findByIdAndDelete(req.params.id);
    res.json({ message: "Teacher deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;