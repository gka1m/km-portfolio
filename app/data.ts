import task from "../public/task.jpg";
import FortytwoLogo from "../public/FortytwoLogo.png";
import portfolio from "../public/portfolio.jpg";

export const summary: string = `Building across the stack, from responsive UIs to systems-level programming`;

export const about: string = `I'm an aspiring software engineer with experience across both frontend and backend development. I build responsive UIs with React and Typescript, and work with scripting languages like Python and C/C++ for backend and systems-level programming.

I'm comfortable working in Linux environments and utilizing tools such as Docker to containerize and manage applications. I enjoy the process of understanding how software works from end to end, from user interfaces to the underlying systems, and writing clean, efficient code that is scalable.

Currently, I'm focusing on developing and strengthening my skills across the stack and building projects that solve real-world problems.`;


export const experiences = [
  {
    duration: "Jan 2022 - May 2022",
    role: "Research Intern (Indoor Bluetooth Tracking System)",
    company: "Venture Corporation Ltd",
    description:
      "Tested the implementation of a real-time indoor tracking system using Bluetooth Low Energy sensors, resulting in a successful test phase in object location detection. Conducted thorough analysis of the data collected from the Bluetooth sensors, leveraging it to debug and improve the source code, leading to an improvement in the accuracy of the tracking system in location detection",
    skills: ["Python", "Git", "Internet of Things"],
  },
];

export const projects = [
  {
    title: "Frontend Project (Task Tracking Website)",
    image: task,
    description:
      "A frontend web application designed to help users manage their time and tasks using a Pomodoro timer and a to-do list. With the potential to scale it into a full-stack solution, future plans include adding user authentication, data persistence, and task synchronization.",
    repo: "https://github.com/gka1m/Effizen-2",
    technologies: ["React", "Typescript", "Vite", "Tailwind", "HTML"],
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "A personal website to showcase the portfolio of projects done, skills acquired, as well as contact information",
    repo: "https://github.com/gka1m/km-portfolio",
    technologies: ["React", "Typescript", "Nextjs", "HTML", "Tailwind"],
  },
  {
    title: "42 Core Curriculum",
    image: FortytwoLogo,
    description:
      "A repository of projects completed as a student of 42 Singapore. Project list includes creating a library of functions, graphics projects, and a program that aims to mimic the core functionalities of Bash.",
    repo: "https://github.com/gka1m/42-core",
    technologies: ["C", "Linux", "Bash"],
  },
];
