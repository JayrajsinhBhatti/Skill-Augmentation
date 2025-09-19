const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());


mongoose
  .connect("mongodb+srv://24ce031:SkillAugmentation@clusteskill0.ystrk7o.mongodb.net/Skill")
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

const activitySchema = new mongoose.Schema({
  category: String,
  subCategory: String,
  nature: String,
  level: String,
  winner: String,
  position: String,
  eventName: String,
  organizer: String,
  venue: String,
  startDate: String,
  endDate: String,
});

const Activity = mongoose.model("Activity", activitySchema);


app.post("/api/activity", async (req, res) => {
  console.log("Incoming POST /api/activity request");
  console.log("Received data:", req.body);

  try {
    const activity = new Activity(req.body);
    const saved = await activity.save();
    console.log("✅ Successfully saved:", saved);
    res.status(201).json({ message: "Activity saved!" });
  } catch (err) {
    console.error("❌ Error saving to DB:", err.message);
    res.status(500).json({ message: "Error saving activity" });
  }
});

app.get("/api/search", async (req, res) => {
  const { q } = req.query;
  console.log("Incoming GET /api/search request with query:", q);
  if (!q) return res.json([]);
  try {
    const results = await Activity.find({
      $or: [
       { eventName: { $regex: q, $options: "i" } },
        { category: { $regex: q, $options: "i" } },
        { subCategory: { $regex: q, $options: "i" } },
        { organizer: { $regex: q, $options: "i" } },
        { venue: { $regex: q, $options: "i" } },
        { nature: { $regex: q, $options: "i" } },
        { level: { $regex: q, $options: "i" } },
        { winner: { $regex: q, $options: "i" } },
        { position: { $regex: q, $options: "i" } },
      ],
    });

    console.log(`✅ Found ${results.length} result(s)`);
    res.json(results);
  } catch (err) {
    console.error("❌ Error searching DB:", err.message);
    res.status(500).json({ message: "Error searching activities" });
  }
});

app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
