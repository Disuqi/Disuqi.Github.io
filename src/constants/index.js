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
  mapbook,
  selfdrivingcar,
  phasergame,
  spacerunner, imaanmasjid, cancerai, fruitmovies,
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
    title: "Software Development",
    icon: web,
  },
  {
    title: "API Development",
    icon: creator,
  },
  {
    title: "Web Development",
    icon: mobile,
  },
  {
    title: "AI Development",
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
    title: "Software Engineer",
    company_name: "Unity Technologies",
    icon: unity,
    iconBg: "#000000",
    date: "July 2022 - Present",
    points: [
      "Develop Unity Editor and engine features that support the performance needs of large projects and teams.",
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
    name: "Cancer AI",
    description: "A website for the AI model I developed and more. The AI model is trained to predict the likelihood of a patient having cancer based on an MRI scan of their brain. The website also includes other AI models by other developers.",
    tags: [
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow",
        color: "orange-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      }
    ],
    image: cancerai,
    website_link: "https://cancer-ai.vercel.app/",
    source_code_link: "https://github.com/Disuqi/Imaan-Masjid-Website"
  },
  {
    name: "Fruit Movies",
    description: "A website that lets you search for movies and view their details. The website uses a private MySQL database to store movie data. If you sign up you are also able to review movies. Only Admins can add, edit, and delete movies. The website also includes a (documented) REST API with JWT security to fetch the movie data.",
    tags: [
      {
        name: "rest-api",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      }
    ],
    image: fruitmovies,
    source_code_link: "https://github.com/Disuqi/FruitMovies"
  },
  {
    name: "Imaan Masjid Website",
    description: "The local mosque's website is a modern digital hub, featuring a dynamic prayer timetable, streamlined donation page, and user-friendly admin interface. Powered by Next.js and Tailwind CSS, it offers accurate prayer times and a sleek, minimalist design.",
    tags: [
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "orange-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      }
    ],
    image: imaanmasjid,
    website_link: "https://www.imaanmasjid.co.uk/",
    source_code_link: "https://github.com/Disuqi/Imaan-Masjid-Website"
  },
  {
    name: "MapBook",
    description:
      "Sign up and connect with others. The site lets you find and add friends. Once connected, you and your friends can see each other's locations. Initially, I used the Google API to show user locations on a map, but the free trial ended, so that part is currently inactive.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "js",
        color: "orange-text-gradient",
      },
      {
        name: "googlemapsapi",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: mapbook,
    source_code_link: "https://github.com/Disuqi/PHP-project",
    website_link: "http://age520.poseidon.salford.ac.uk/controllers/index.php"
  },
  {
    name: "Self Driving Car",
    description:
      "Train your own AI to master a mini game, particularly in the driving aspect. With a range of customizable features geared towards enhancing the training process, you can effortlessly hone your AI's skills. What's more, you have the flexibility to train multiple AIs simultaneously, amplifying the potential for rapid progress.",
    tags: [
      {
        name: "js",
        color: "orange-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
      {
        name: "machinelearning",
        color: "pink-text-gradient",
      },
    ],
    image: selfdrivingcar,
    source_code_link: "https://github.com/Disuqi/Self-Driving-Car-AI",
    website_link: "https://disuqi.github.io/Self-Driving-Car-AI/"
  },
  {
    name: "Web Game",
    description:
      "I decided to dive into JavaScript by creating a quick video game. Using Phaser 3 framework, I whipped up a simple game, even though the code's a bit messy. Despite the game's brevity and less-than-perfect fun factor, I achieved my goal of learning a bunch from this project.",
    tags: [
      {
        name: "js",
        color: "orange-text-gradient",
      },
      {
        name: "phaser3",
        color: "green-text-gradient",
      }
    ],
    image: phasergame,
    source_code_link: "https://github.com/Disuqi/Phaser-Game",
    website_link: "https://disuqi.github.io/Phaser-Game/"
  },
  {
    name: "Space Runner",
    description:
      "Simply a game made with Java using JavaFX",
    tags: [
      {
        name: "java",
        color: "orange-text-gradient",
      },
      {
        name: "Maven",
        color: "blue-text-gradient",
      },
      {
        name: "JavaFX",
        color: "pink-text-gradient",
      }
    ],
    image: spacerunner,
    source_code_link: "https://github.com/Disuqi/GameShop",
  },
  {
    name: "Riot Bot",
    description:
      "A multifunctional Discord bot meticulously designed to enhance your League of Legends gaming experience, offering an array of features tailored to assist your gameplay.",
    tags: [
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "discord.py",
        color: "blue-text-gradient",
      }
    ],
    source_code_link: "https://github.com/Disuqi/Riot-Bot",
  },
  {
    name: "Quran Discord Bot",
    description:
      "A Discord bot to recite the Holy Quran in your voice channel",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "discordjs",
        color: "green-text-gradient",
      },
      {
          name: "sapphire-framework",
          color: "orange-text-gradient",
      }
    ],
    source_code_link: "https://github.com/Disuqi/QuranAndSunnah"
  },
  {
    name: "Flower Classifier AI",
    description:
        "A simple AI model that can classify images of flowers. The model is trained using the TensorFlow library.",
    tags: [
      {
        name: "tensorflow",
        color: "orange-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      }
    ],
    source_code_link: "https://github.com/Disuqi/Flower-Classifier-AI",
  },
  {
    name: "GameShop",
    description:
      "GameShop is my bootcamp crowning achievement, a web-based API simplifying the storage and retrieval of diverse video game data.",
    tags: [
      {
        name: "java",
        color: "orange-text-gradient",
      },
      {
        name: "maven",
        color: "blue-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      }
    ],
    source_code_link: "https://github.com/Disuqi/GameShop",
  },
  {
    name: "Disuqi.github.io",
    description:
      "This portfolio website.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "orange-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      }
    ],
    source_code_link: "https://github.com/Disuqi/GameShop",
  },
  
];

export { services, technologies, experiences, projects };