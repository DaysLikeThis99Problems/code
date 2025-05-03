// Function to add a message to the chat
function addMessage(sender, text) {
  const chatBox = document.getElementById("chat-box");

  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", sender);
  messageDiv.innerText = text;

  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Handle form submission
document.getElementById("chat-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const input = document.getElementById("user-input");
  const userMessage = input.value.trim();
  if (!userMessage) return;

  addMessage("user", userMessage);
  input.value = "";

  // Check for predefined options
  const lower = userMessage.toLowerCase();

  if (lower === "1") {
    addMessage("bot", `📚 DYPIEMR offers courses like:
1a Computer Engineering
1b Artificial Intelligence & Data Science
1c Mechanical Engineering
1d Civil Engineering
1e Electronics and Telecommunication (E&TC)
1f Chemical Engineering`);
  } else if (lower === "2") {
    addMessage("bot", `🏢 DYPIEMR has departments for each branch, with dedicated faculty:
2a Computer: Mrs. Pratiksha Shevatekar (HOD)
2b AI & DS: Dr. Suvarna Patil (HOD)
2c Mechanical: Dr. Ganesh K Jadhav (HOD)
2d Civil: Dr. Pravin Gorde (HOD)
2e E&TC: Dr. Mrs. Arokia Priya Charles (HOD)
2f Chemical : Dr. Pravin Gorde (HOD)
Check the official website for detailed faculty lists.`);
  } else if (lower === "3") {
    addMessage("bot", `🎉 The college hosts events like:
- Tech Fest: TechSRIJAN
- Cultural Fest: DYPIEMR UTSAV
- Sports Fest
- Hackathons, Webinars, and Industrial Visits
Stay tuned to the notice board or college site for updates.`);
  } else if (lower === "4") {
    addMessage("bot", `🏫 Campus Facilities:
- 📖 Central Library with digital access
- 💻 Computer Labs with high-speed internet
- 🍽️ Canteen serving snacks & meals
- 🛏️ Hostel for boys & girls
- 🏀 Sports Ground & Gym`);
  } else if (lower === "5") {
    addMessage("bot", `🗺️ Directions:
- Main gate leads to Admin Block
- Right: Mechanical & Civil Block
- Left: Computer & AI-DS Labs
- Library: First floor of main building
Check college maps or ask at help desk.`);
  } else if (lower === "6") {
    addMessage("bot", `📅 Room Booking:
Contact Admin Office or use the ERP portal to book seminar halls or classrooms.
Availability depends on department schedules and prior bookings.`);
  } else if (lower === "7") {
    addMessage("bot", `💼 Placement Cell:
- Top recruiters: TCS, Infosys, Capgemini, Cognizant, Tech Mahindra
- Year-round training & mock interviews
- 90%+ placement for Computer & AI-DS streams`);
  } else if (lower === "8") {
    addMessage("bot", `📥 Admissions:
- Based on MHT-CET or JEE scores (CAP rounds)
- 12th PCM mandatory with 45%+
- Application via DTE Maharashtra portal`);
  } else {
    // If not a number 1–8, send to backend Gemini API
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();
      addMessage("bot", data.reply || "🤖 I didn’t catch that. Please try again.");
    } catch (err) {
      console.error("Error talking to server:", err);
      addMessage("bot", "❌ Server error. Please try again later.");
    }
  }
});

// Default welcome message
document.addEventListener("DOMContentLoaded", () => {
  const defaultMessage = `
👋 Welcome to Dr. D. Y. Patil Institute of Engineering, Management and Research (DYPIEMR)!

Ask me anything or choose from these:
1. Courses  
2. Departments and faculty  
3. Events and cultural fests  
4. Campus facilities  
5. Directions within campus  
6. Room booking and availability  
7. Placement cell and companies visiting  
8. Admission process and eligibility
  `;
  addMessage("bot", defaultMessage.trim());
});

