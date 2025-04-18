// pages/api/ai-guide.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { skills, interests, goals } = req.body;
      console.log(skills, interests, goals);
      
      // Placeholder response (replace with OpenAI API if needed)
      const careerAdvice = `
        Based on your skills in ${skills}, your interest in ${interests}, and your goal to ${goals},
        we suggest you explore a career in Data Science or UX Design. Consider taking courses in Python or Human-Centered Design.
      `;
  
      return res.status(200).json({ advice: careerAdvice.trim() });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  