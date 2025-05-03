// gemini.js
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function getGeminiReply(userMessage) {
  try {
    const prompt = `
You are a chatbot for Dr. D. Y. Patil Institute of Engineering, Management and Research (DYPIEMR), Akurdi, Pune.

If the user types a number between 1 to 8, reply with the corresponding information:
1. Courses offered by DYPIEMR (e.g., Computer, AI & DS, Mechanical, E&TC, Civil)
2. Departments and faculty overview
3. Details about events, fests, and college culture
4. Information on campus facilities (library, labs, cafeteria, hostel)
5. How to get directions within the campus
6. Room and hall booking process and availability
7. Placement cell info and companies visiting the college
8. Admission process and eligibility criteria

If the user types something else, answer normally but keep it related to DYPIEMR.

User: ${userMessage}
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini error:", error);
    return "Sorry, something went wrong. Please try again later.";
  }
}

module.exports = getGeminiReply;
console.log("Gemini Key:", process.env.GEMINI_API_KEY);
