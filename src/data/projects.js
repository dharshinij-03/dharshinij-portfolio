import helphive from '../assets/project1.png';
import sneakify from '../assets/project2.png'
const projects = [
  {
    
  title: "HelpHive",
  summary:
    "A community-driven platform where users can exchange skills and services. It allows people to create skill profiles, find matches, schedule sessions, chat, and leave feedback. Designed to make skill-sharing simple, trustworthy, and accessible.",
  tech: ["React", "Bootstrap", "Node.js", "Express", "MongoDB"],
  img: helphive, // add your project screenshot to src/assets/
  github: "https://github.com/your-username/helphive", // replace with your repo link
  demo: "https://helphive-demo.vercel.app" // replace with your deployed link if available

  },
  {
  title: "Sneakify",
  summary: "A sleek e-commerce platform focused on sneakers. Features include product browsing, shopping cart, user authentication, and smooth checkout flow, all wrapped in a responsive design.",
  tech: ["HTML", "CSS", "Bootstrap"],
  img: sneakify,
  github: "https://github.com/dharshinij-03/Sneakify-Ecommerce-App.git",
  demo: "https://sneakifystore.netlify.app/",
}

];

export default projects;
