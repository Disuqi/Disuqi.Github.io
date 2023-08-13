import {
    mobile,
    backend,
    creator,
    web,
    cpp,
    csharp,
    java,
    jetsql,
    mysql,
    php,
    python,
    swift,
    javascript,
    typescript,
    html,
    css,
    git,
    unity,
    kumon,
    theHenleyCollege,
    aldi,
    kfc,
    carrent,
    jobit,
    tripguide,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Software Developer",
      icon: web,
    },
    {
      title: "API Developer",
      icon: creator,
    },
    {
      title: "Full-Stack Developer",
      icon: mobile,
    },
    {
      title: "AI Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "C#",
      icon: csharp,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "PHP",
      icon: php,
    },
    {
      name: "Swift",
      icon: swift,
    },
    {
      name: "Jet SQL",
      icon: jetsql,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "git",
      icon: git,
    }
  ];
  
  const experiences = [
    {
      title: "Intern Software Engineer",
      company_name: "Unity Technologies",
      icon: unity,
      iconBg: "#000000",
      date: "July 2022 - Present",
      points: [
        "Implement Unity Editor and engine features that support the performance needs of large projects and teams.",
        "Deliver stable end-to-end functionality with high quality in mind.",
        "Take great care that work is comprehensively documented.",
        "Analyse, and review the work of others.",
        "Produce specifications, and determine operational feasibility.",
        "Troubleshoot, debug and upgrade existing features."
      ],
    },
    {
      title: "Teaching Assistant",
      company_name: "Kumon Maths & English",
      icon: kumon,
      iconBg: "#87cdf3",
      date: "September 2021 - July 2022",
      points: [
        "Communicate effectively with students and colleagues.",
        "Analyse the students’ work and assess their existing ability in a subject area.",
        "Provide students with mock examinations or tests to prepare students for real exams.",
        "Communicate with parents/guardians about trouble areas or any issues that require attention.",
        "Maintaining excellent knowledge of the subject being taught."
      ],
    },
    {
      title: "Student Brand Ambassador",
      company_name: "The Henley College",
      icon: theHenleyCollege,
      iconBg: "#ffffff",
      date: "March 2020 - July 2020",
      points: [],
    },
    {
      title: "Store Assistant",
      company_name: "Aldi",
      icon: aldi,
      iconBg: "#172357",
      date: "September 2019 - December 2020",
      points: [],
    },
    {
      title: "Team Member and Cook",
      company_name: "KFC",
      icon: kfc,
      iconBg: "#ffffff",
      date: " November 2018 - September 2019",
      points: [],
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };