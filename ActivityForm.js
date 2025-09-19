import React, { useState } from "react";
import "./App.css";
// import SearchActivities from "./Search";

function ActivityForm() {
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [nature, setNature] = useState("");
  const [level, setLevel] = useState("");
  const [winner, setWinner] = useState("");
  const [position, setPosition] = useState("");

  const [formData, setFormData] = useState({
    eventName: "",
    organizer: "",
    venue: "",
    startDate: "",
    endDate: "",
    file: null,
  });

  // ---- Sub-category options ----
  const researchSubCategoryOptions = [
    "SSIP/Start-up/Innovation ventures",
    "Patents/Copyrights",
    "Product/Services development",
    "Research Publications in WoS/Scopus listed Journals",
    "Participation in Technical/ Scientific Events",
    "Poster Presentation",
  ];

  const academicSubCategoryOptions = [
    "MOOCs (other than curriculum) (Swayam/NPTEL)",
    "MOOCs (other than curriculum) on Online Learning Platform like (Coursera)"
  ];

  const leadershipSubCategoryOptions = [
    "Institute/ University Organized Event Management",
    "Department Organized Event Management",
    "Representation in Sports/Cultural Activities",
  ];

  // ---- Category checks ----
  const isResearch =
    category === "Contribution in Research/ Innovation/ Entrepreneurship/ IPR";
  const isAcademic =
    category === "Acedemic Skill and Ability ENhancementInitiatives Graduate Attributes";
  const isLeadership =
    category === "Leadership, Institutional Management and Value-additions";

  // ---- Decide sub-categories ----
  let currentSubCategoryOptions = [];
  if (isResearch) currentSubCategoryOptions = researchSubCategoryOptions;
  else if (isAcademic) currentSubCategoryOptions = academicSubCategoryOptions;
  else if (isLeadership) currentSubCategoryOptions = leadershipSubCategoryOptions;

  // ---- Nature options ----
  const defaultNatureOptions = [
    "Course Completion",
    "Participation",
    "Certification",
    "Winner",
    "Other",
  ];

  const natureOptionsMap = {
    "SSIP/Start-up/Innovation ventures": [
      "Incubation at Proof-of-Concept Stage",
      "Company Registered",
      "Extramural fund received/ Revenue Generated",
    ],
    "Patents/Copyrights": ["Filed", "Published", "Granted"],
    "Product/Services development": ["Prototype developed"],
    "Research Publications in WoS/Scopus listed Journals": [
      "Main author",
      "Co-Author",
    ],
    "Institute/ University Organized Event Management": [
      "Co-coordinators",
      "Coordinator",
      "Volunteer/Members",
    ],
    "Department Organized Event Management": [
      "Co-coordinators",
      "Coordinator",
      "Volunteer/Members",
    ],
    "Representation in Sports/Cultural Activities": ["Player/Performer"],
    "Poster Presentation": ["Online", "Offline"],
    "MOOCs (other than curriculum) (Swayam/NPTEL)": ["04-08 weeks", "More than 08 weeks"],
    "MOOCs (other than curriculum) on Online Learning Platform like (Coursera)": ["04-08 weeks", "More than 08 weeks"],
    "MOOCs on online learning": ["04-08 weeks", "More than 08 weeks"],
  };

  const currentNatureOptions =
    (isResearch && natureOptionsMap[subCategory]) ||
    (isAcademic && natureOptionsMap[subCategory]) ||
    (isLeadership && natureOptionsMap[subCategory]) ||
    defaultNatureOptions;

  // ---- Level options ----
  const ssipLevelOptionsMap = {
    "Incubation at Proof-of-Concept Stage": ["University Level(30 points)"],
    "Company Registered": ["University Level(40 points)"],
    "Extramural fund received/ Revenue Generated": ["University Level(50 points)"],
  };

  const patentsLevelOptionsMap = {
    Filed: ["University Level (20 points)"],
    Published: ["University Level (50 points)"],
    Granted: ["University Level (75 points)"],
  };

  const productLevelOptionsMap = {
    "Prototype developed": ["University Level (50 points)"],
  };

  const publicationsLevelOptionsMap = {
    "Main author": ["National Level (30 points)", "International Level (40 points)"],
    "Co-Author": ["National Level (20 points)", "International Level (15 points)"],
  };

  const posterLevelOptionsMap = {
    FIRST: [
      "University Level (10 points)",
      "State Level (12 points)",
      "National Level (16 points)",
      "International Level (18 points)",
    ],
    SECOND: [
      "University Level (10 points)",
      "State Level (12 points)",
      "National Level (16 points)",
      "International Level (18 points)",
    ],
    THIRD: [
      "University Level (10 points)",
      "State Level (12 points)",
      "National Level (16 points)",
      "International Level (18 points)",
    ],
  };

  const moocsLevelOptionsMap = {
    TOP1: ["University Level (30 points)"],
    TOP2: ["University Level (30 points)"],
    TOP3: ["University Level (30 points)"],
  };

  const moocsOnlineLearningLevelOptionsMap = {
    "04-08 weeks": ["University Level(10 points)"],
    "More than 08 weeks": ["University Level(20 points)"],
  };

  const courseraLevelOptionsMap = {
    "04-08 weeks": ["University Level(10 points)"],
    "More than 08 weeks": ["University Level(20 points)"],
  };
  
  const instituteManagementLevelOptionsMap = {
    "Co-coordinators": ["University Level (30 points)"],
    "Coordinator": ["University Level (20 points)"],
    "Volunteer/Members": ["University Level (10 points)"],
  };

  const departmentManagementLevelOptionsMap = {
    "Co-coordinators": ["University Level (25 points)"],
    "Coordinator": ["University Level (15 points)"],
    "Volunteer/Members": ["University Level (5 points)"],
  };

  let currentLevelOptions = [];
  if (subCategory === "SSIP/Start-up/Innovation ventures" && nature) {
    currentLevelOptions = ssipLevelOptionsMap[nature] || [];
  } else if (subCategory === "Patents/Copyrights" && nature) {
    currentLevelOptions = patentsLevelOptionsMap[nature] || [];
  } else if (subCategory === "Product/Services development" && nature) {
    currentLevelOptions = productLevelOptionsMap[nature] || [];
  } else if (
    subCategory === "Research Publications in WoS/Scopus listed Journals" &&
    nature
  ) {
    currentLevelOptions = publicationsLevelOptionsMap[nature] || [];
  } else if (subCategory === "Poster Presentation" && winner === "YES" && position) {
    currentLevelOptions = posterLevelOptionsMap[position] || [];
  } else if (
    subCategory === "MOOCs (other than curriculum) (Swayam/NPTEL)" &&
    winner === "YES" &&
    position
  ) {
    currentLevelOptions = moocsLevelOptionsMap[position] || [];
  } else if (subCategory === "MOOCs on online learning" && nature) {
    currentLevelOptions = moocsOnlineLearningLevelOptionsMap[nature] || [];
  } else if (subCategory === "MOOCs (other than curriculum) on Online Learning Platform like (Coursera)" && nature) {
    currentLevelOptions = courseraLevelOptionsMap[nature] || [];
  } else if (subCategory === "Institute/ University Organized Event Management" && nature) {
    currentLevelOptions = instituteManagementLevelOptionsMap[nature] || [];
  } else if (subCategory === "Department Organized Event Management" && nature) {
    currentLevelOptions = departmentManagementLevelOptionsMap[nature] || [];
  } else if (subCategory === "Representation in Sports/Cultural Activities" && winner === "YES" && position) {
    currentLevelOptions = posterLevelOptionsMap[position] || [];
  } else if (subCategory === "Representation in Sports/Cultural Activities" && winner === "NO") {
    currentLevelOptions = [
      "University Level (5 points)",
      "State Level (10 points)",
      "National Level (20 points)",
      "International Level (30 points)"
    ];
  } else {
    currentLevelOptions = ["University Level (20 Points)"];
  }

  const showFormFields = !!level;
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const finalData = {
      category,
      ...(isResearch || isAcademic || isLeadership ? { subCategory } : {}),
      nature,
      winner,
      position,
      level,
      ...formData,
    };
    console.log("Submitted data:", finalData);
    alert("Form submitted successfully!");
    setCategory("");
    setSubCategory("");
    setNature("");
    setWinner("");
    setPosition("");
    setLevel("");
    setFormData({
      eventName: "",
      organizer: "",
      venue: "",
      startDate: "",
      endDate: "",
      file: null,
    });
      try {
    const response = await fetch("http://localhost:5000/api/activity", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(finalData),
    });

    const result = await response.json();
    console.log("Server response:", result);
    alert("Form submitted successfully!");
  } catch (err) {
    console.error("Submission error:", err);
    alert("Failed to submit form.");
  }
  };


  return (
    <div className="container">
      <h3>Activity Submission</h3>

      {/* Category */}
      <label>Category:</label>
      <select
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
          setSubCategory("");
          setNature("");
          setWinner("");
          setPosition("");
          setLevel("");
        }}
      >
        <option value="">-- Select Category --</option>
        <option value="Contribution in Research/ Innovation/ Entrepreneurship/ IPR">
          Contribution in Research/ Innovation/ Entrepreneurship/ IPR
        </option>
        <option value="Acedemic Skill and Ability ENhancementInitiatives Graduate Attributes">
          Acedemic Skill and Ability ENhancementInitiatives Graduate Attributes
        </option>
        <option value="Leadership, Institutional Management and Value-additions">
          Leadership, Institutional Management and Value-additions
        </option>
      </select>

      {/* Sub-category */}
      {(isResearch || isAcademic || isLeadership) && (
        <>
          <br />
          <label>Sub-category:</label>
          <select
            value={subCategory}
            onChange={(e) => {
              setSubCategory(e.target.value);
              setNature("");
              setWinner("");
              setPosition("");
              setLevel("");
            }}
          >
            <option value="">-- Select Sub-category --</option>
            {currentSubCategoryOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </>
      )}

      {/* Nature */}
      {(isResearch || isAcademic || isLeadership) && subCategory && (
        <>
          <br />
          <label>Nature:</label>
          <select
            value={nature}
            onChange={(e) => {
              setNature(e.target.value);
              setWinner("");
              setPosition("");
              setLevel("");
            }}
          >
            <option value="">-- Select Nature --</option>
            {currentNatureOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </>
      )}

      {/* Winner for Poster */}
      {subCategory === "Poster Presentation" && nature && (
        <>
          <br />
          <label>Winner:</label>
          <select
            value={winner}
            onChange={(e) => {
              setWinner(e.target.value);
              setPosition("");
              setLevel("");
            }}
          >
            <option value="">-- Select Winner --</option>
            <option value="YES">YES</option>
            <option value="NO">NO</option>
          </select>
        </>
      )}

      {/* Position for Poster */}
      {subCategory === "Poster Presentation" && winner === "YES" && (
        <>
          <br />
          <label>Position:</label>
          <select
            value={position}
            onChange={(e) => {
              setPosition(e.target.value);
              setLevel("");
            }}
          >
            <option value="">-- Select Position --</option>
            <option value="FIRST">FIRST</option>
            <option value="SECOND">SECOND</option>
            <option value="THIRD">THIRD</option>
          </select>
        </>
      )}

      {/* Winner for MOOCs */}
      {subCategory === "MOOCs (other than curriculum) (Swayam/NPTEL)" && nature && (
        <>
          <br />
          <label>Winner:</label>
          <select
            value={winner}
            onChange={(e) => {
              setWinner(e.target.value);
              setPosition("");
              setLevel("");
            }}
          >
            <option value="">-- Select Winner --</option>
            <option value="YES">YES</option>
            <option value="NO">NO</option>
          </select>
        </>
      )}

      {/* Position for MOOCs */}
      {subCategory === "MOOCs (other than curriculum) (Swayam/NPTEL)" && winner === "YES" && (
        <>
          <br />
          <label>Position:</label>
          <select
            value={position}
            onChange={(e) => {
              setPosition(e.target.value);
              setLevel("");
            }}
          >
            <option value="">-- Select Position --</option>
            <option value="TOP1">TOP 1</option>
            <option value="TOP2">TOP 2</option>
            <option value="TOP3">TOP 3</option>
          </select>
        </>
      )}

      {/* Winner for Sports/Cultural */}
      {subCategory === "Representation in Sports/Cultural Activities" && nature === "Player/Performer" && (
        <>
          <br />
          <label>Winner:</label>
          <select
            value={winner}
            onChange={(e) => {
              setWinner(e.target.value);
              setPosition("");
              setLevel("");
            }}
          >
            <option value="">-- Select Winner --</option>
            <option value="YES">YES</option>
            <option value="NO">NO</option>
          </select>
        </>
      )}

      {/* Position for Sports/Cultural */}
      {subCategory === "Representation in Sports/Cultural Activities" && winner === "YES" && (
        <>
          <br />
          <label>Position:</label>
          <select
            value={position}
            onChange={(e) => {
              setPosition(e.target.value);
              setLevel("");
            }}
          >
            <option value="">-- Select Position --</option>
            <option value="FIRST">FIRST</option>
            <option value="SECOND">SECOND</option>
            <option value="THIRD">THIRD</option>
          </select>
        </>
      )}

      {/* Level */}
      {nature &&
        !(
          subCategory === "Representation in Sports/Cultural Activities" &&
          winner === "YES" &&
          !position
        ) && (
        <>
          <br />
          <label>Level:</label>
          <select value={level} onChange={(e) => setLevel(e.target.value)}>
            <option value="">-- Select Level --</option>
            {currentLevelOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </>
      )}

      {/* Form Fields */}
      {showFormFields && (
        <form onSubmit={handleSubmit}>
          <br />
          <label>Event Name:</label>
          <input
            type="text"
            name="eventName"
            value={formData.eventName}
            onChange={handleInputChange}
          />

          <br />
          <label>Event Organizer:</label>
          <input
            type="text"
            name="organizer"
            value={formData.organizer}
            onChange={handleInputChange}
          />

          <br />
          <label>Venue:</label>
          <input
            type="text"
            name="venue"
            value={formData.venue}
            onChange={handleInputChange}
          />

          <br />
          <label>Start Date:</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleInputChange}
          />

          <br />
          <label>End Date:</label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleInputChange}
          />

          <br />
          <label>Upload File:</label>
          <input type="file" name="file" onChange={handleFileChange} />

          <br />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default ActivityForm;