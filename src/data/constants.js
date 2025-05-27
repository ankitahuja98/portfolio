import Weather_App_pic from "../Images/Project Demo Pics/Weather2.png";
import Blog_Management from "../Images/Project Demo Pics/BlogManagement.png";
import SwiggyThumbnail from "../Images/Project Demo Pics/SwiggyThumbnail.png";
import DgdeLogo from "../Images/DGDE-Logo2.png";
import AppoloLogo from "../Images/costacloud_logo.jpeg";
import html from "../../src/Images/SkillsIcons/html.png";
import css from "../../src/Images/SkillsIcons/css.png";
import javascript from "../../src/Images/SkillsIcons/javascript.png";
// import bootstrap from "../../src/Images/SkillsIcons/bootstrap.png";
import react from "../../src/Images/SkillsIcons/react.png";
import redux from "../../src/Images/SkillsIcons/redux.png";
import nodejs from "../../src/Images/SkillsIcons/nodejs.png";
import postgresql from "../../src/Images/SkillsIcons/postgresql.png";
import git from "../../src/Images/SkillsIcons/git.png";
import jquery from "../../src/Images/SkillsIcons/jquery.png";
import MongoDB from "../../src/Images/SkillsIcons/MongoDB.png";
import Tailwind from "../../src/Images/SkillsIcons/Tailwind.png";
import NextJs from "../../src/Images/SkillsIcons/Nextjs.png";

export const Bio = {
  name: "Ankit Ahuja",
  roles: ["Senior Software Engineer", "Frontend Developer"],
  description:
    "I am a driven and adaptable professional with over 4 years of experience in the Frontend domain, capable of delivering end-to-end projects with efficiency and precision. Passionate about continuous learning and growth, I bring a positive attitude and a strong commitment to producing high-quality outcomes.",
  github: "https://github.com/ankitahuja98/",
  resume:
    "https://drive.google.com/file/d/1mxndcx6nI9IpOJ0pFAy6IWQTsSRf3QFe/view?usp=drive_link",
  linkedin: "https://www.linkedin.com/in/ankitahuja98/",
};

export const projects = [
  {
    id: 1,
    delay: 0.5,
    title: "Swiggy Clone",
    date: "",
    description:
      "I developed a responsive Swiggy Clone using ReactJS, integrating Swiggy's API to fetch real-time data. The app features advanced search functionality, filters, detailed menus, ratings, and personalized restaurant recommendations based on location. It utilizes Redux Toolkit for efficient state management and Tailwind CSS for a fully responsive design, enhancing the user experience with visually engaging shimmer effects.",
    image: SwiggyThumbnail,
    alt: "Weather_App_pic",
    tags: [
      "React Js",
      "Redux",
      "Node JS",
      "Tailwind",
      "Swiggy Live API",
      "GeoCode Map API",
      // "Javascript",
      // "API Integration",
      // "Real Time Restaurant",
    ],
    category: "web app",
    github: "https://github.com/ankitahuja98/swiggyclone",
    webapp: "https://swiggyclonee.netlify.app/",
  },
  {
    id: 2,
    delay: 0.7,
    title: "Blog Management",
    date: "",
    description:
      "Blog Management App, a fully responsive and user-friendly solution for managing blog posts across devices. Built with React and styled using Tailwind CSS, this app offers seamless post creation, viewing, and deletion. Key features include real-time form validation for titles, descriptions, and categories, along with toast notifications for instant feedback. The app leverages Redux Toolkit for state management, ensuring persistent data even after page reloads. Reusable components like BlogCard and FormInput make the codebase clean and efficient. With responsive design, a detailed blog view, and confirmation dialogs, the app delivers a smooth and intuitive blogging experience.",
    image: Blog_Management,
    alt: "Blog_pic",
    tags: [
      "React Js",
      "Redux",
      "Javascript",
      "Redux-Persist",
      "Tailwind",
      "Material UI",
    ],
    category: "web app",
    github: "https://github.com/ankitahuja98/BlogManagement.git",
    webapp: "https://best-blogs.netlify.app",
  },
  {
    id: 3,
    delay: 0.9,
    title: "Weather App",
    date: "",
    description:
      "Created dynamic Weather application leverages the OpenWeatherMap API to provide real-time information includes city-specific weather, temperature, humidity, and wind speed.",
    image: Weather_App_pic,
    alt: "Weather_App_pic",
    tags: ["React Js", "Javascript", "Weather API", "Bootstrap", "Material UI"],
    category: "web app",
    github: "https://github.com/ankitahuja98/weatherapp",
    webapp: "https://ankitahuja98.github.io/weatherapp/",
  },
];

export const skillSet1 = [
  { id: 1, name: "ReactJS", image: react },
  { id: 2, name: "Redux", image: redux },
  { id: 3, name: "NextJS", image: NextJs },
  { id: 4, name: "NodeJS", image: nodejs },
  { id: 5, name: "Javascript", image: javascript },
  { id: 6, name: "MongoDB", image: MongoDB },
];
export const skillSet2 = [
  { id: 7, name: "PostgreSQL", image: postgresql },
  { id: 8, name: "Tailwind", image: Tailwind },
  // {
  //   name: "Bootstrap",
  //   image: bootstrap,
  // },
  { id: 9, name: "JQuery", image: jquery },
  { id: 10, name: "GIT", image: git },
  { id: 11, name: "HTML", image: html },
  { id: 12, name: "CSS", image: css },
];

export const experiences = [
  {
    id: 0,
    image: AppoloLogo,
    role: "Senior Software Engineer",
    company: "Appolo Computers Pvt. Ltd.",
    date: "March/2025 - Present",
    desc: "Spearheaded the development of TeamSync, a file management system built with React, Material-UI, and Redux, enhancing team collaboration and eliminating manual paperwork. Integrated advanced document editing features using Syncfusion and Apryse. Upgraded legacy dependencies, enhancing performance by 25%. Managed a team of six developers, enforced code quality through reviews, and ensured timely delivery by resolving Jira-tracked issues and adapting to evolving requirements. ",
    skills: [
      "ReactJS",
      "Redux",
      "NextJS",
      "Javascript",
      "Webpack",
      "NodeJS",
      "MongoDB",
      "Jest",
      "Tailwind",
      "API Integration",
      "HTML",
      "CSS",
      "Project Ownership",
      "Code Quality & Standards",
    ],
  },
  {
    id: 1,
    image: DgdeLogo,
    role: "Frontend Developer",
    company: "Directorate General Defence Estates",
    date: "March/2021 - Feb/2025",
    desc: "Led the design and development of a web-based RTRM (Real-Time Record Management) system for managing defense land records across India using ReactJS, Redux, SpringBoot, and more, supporting 100+ users. Optimized app performance through code-splitting, lazy loading, and debouncing techniques. Developed advanced modules like Encroachment Tracking and dynamic reporting features with Material UI, Tailwind CSS, and Redux Toolkit for smooth data input, management, and reporting.",
    skills: [
      "ReactJS",
      "Redux",
      "NextJS",
      "NodeJS",
      "Javascript",
      "Webpack",
      "PostgreSQL",
      "MongoDB",
      "Jest",
      "GIT",
      // "Bootstrap",
      "Tailwind",
      "API Integration",
      "Netlify",
      "HTML",
      "CSS",
    ],
  },
];
