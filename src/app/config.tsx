import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin, FaSquareXTwitter, FaDiscord } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import {
  RiNextjsFill,
  RiVuejsFill,
  RiAngularjsFill,
  RiTailwindCssFill, RiWordpressFill, RiOpenaiFill,
} from 'react-icons/ri';
import {
  SiStrapi,
  SiTypeorm,
  SiNestjs,
  SiJest,
  SiCypress,
  SiStorybook,
  SiTypescript,
  SiShadcnui,
  SiWoocommerce,
  SiReact,
  SiSupabase,
  SiExpress,
  SiPuppeteer,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiGraphql,
  SiFramer,
  SiThreedotjs,
  SiElectron,
  SiDocker,
  SiDrizzle,
  SiMui,
  SiGit, SiPrisma,
} from 'react-icons/si';
import { GrGraphQl } from "react-icons/gr";
import { TbApi, TbBrandReactNative } from "react-icons/tb";
import { DiRedis } from "react-icons/di";


export const siteConfig = {
    name: "Javor Draskovic",
    title: "Javor Draskovic | Full-Stack Developer",
    email: "javordraskovic@gmail.com",
    alias: "Javor",
    description:
        "Javor Draskovic is a dedicated and experienced Full Stack Developer, adept at crafting innovative web applications. Skilled in utilizing a range of technologies such as React, Vue, AWS Lambda, Angular and Node.js. Thrives in collaborative environments, demonstrated by successful team projects and significant contributions to app migrations and new feature implementations. A proactive problem-solver with a keen eye for detail, eager to leverage expertise to drive impactful solutions aligned with the company's mission.",
    keywords:
        "Javor Draskovic, full-stack developer, web development, Next.js,React, Angular, Vue, Node.js, Express.js, Nest.js, scalable applications, clean code",
    url: "https://javordraskovic.dev",
    taglines: [
        "🚀 Coding Simplicity, Crafting Solutions: Bringing Ideas to Life, One Line at a Time. ✨ Let's transform challenges into digital possibilities with precision and creativity!",
        "🎨 Where Code Meets Creativity: Building Digital Experiences that Matter. 🌐 From intuitive interfaces to powerful backend systems, I create solutions that engage and inspire.",
        "💡 Innovating Beyond the Screen: Crafting Seamless Digital Journeys. 🌟 From concept to completion, let’s build the future, one pixel and one line of code at a time.",
    ],
    titles: ["Full-Stack Developer - Frontend & Backend", "Mobile Developer"],
    socialLinks: [
        {
            icon: <FaGithub />,
            url: "https://github.com/codbuild-er",
        },
        {
            icon: <FaLinkedin />,
            url: "https://www.linkedin.com/in/javor-draskovic/",
        },
        // {
        //     icon: <FaSquareXTwitter />,
        //     url: "https://x.com/aurora_dream04",
        // },
        // {
        //     icon: <FaDiscord />,
        //     url: "https://discord.gg/pwYGjDebkF",
        // },
        {
            icon: <IoIosMail />,
            url: "mailto:javordraskovic@gmail.com",
        },
    ],
    sections: {
        tableOfContents: [
            {
                id: "about-me",
                label: "ABOUT ME",
            },
            {
                id: "experiences",
                label: "EXPERIENCES",
            },
            /*{
                id: "projects",
                label: "PROJECTS",
            },*/
            {
                id: "technologies",
                label: "TECHNOLOGIES",
            },
            // {
            //     id: "blogs",
            //     label: "BLOGS",
            // },
            {
                id: "contact",
                label: "CONTACT",
            },
        ],
        aboutMe: `
            <p>
                Hi! I'm Javor, a <strong>full-stack developer</strong> who started development in <strong>2016</strong>. Since then, I've built <strong>bunkering</strong>, <strong>e-learning</strong>, <strong>healthcare</strong>, <strong>fintech</strong>, and <strong>e-commerce sites</strong>. Whether it’s front-end finesse or back-end logic, I love bringing ideas to life on the web.
            </p>
            <p>
                Let's connect—I'd love to help with your next <strong>website</strong> or <strong>API</strong> project!
            </p>
        `,
        experiences: [
            {
                company: "Self Employed",
                position: "Full Stack Developer",
                duration: "01/2025 - Present",
                description: `
<ul style="list-style: disc;">
  <li>Orchestrated a strategic upgrade of the web platform from React to Next.js, achieving a 20% improvement in SEO metrics and a remarkable 30% increase in page loading speed</li>
  <li>Utilized Python and Django to build robust web applications, creating dynamic features and managing database interactions efficiently. This involved developing RESTful APIs and implementing user authentication</li>
  <li>Experienced in developing, customizing, and maintaining WordPress websites, including theme and plugin development, SEO optimization, and content management</li>
  <li>Collaborated with a team of four to develop a new UI framework based on a stylized design system and React, streamlining the development process</li>
  <li>Developed backend services using Symfony, enhancing API functionality and improving data handling efficiency. This included creating RESTful endpoints and implementing authentication and authorization mechanisms</li>                
</ul>`,
            },
            {
                company: "PopArt Studio",
                position: "Full Stack Developer",
                duration: "02/2021 - 12/2024",
                description:`
<ul style="list-style: disc;">
  <li>Engineered a responsive, single-page web app for mobile devices, integrating a five-year financial plan tool: increased user retention by 50% by enabling personalized financial goal tracking and decision-making based on user data</li>
  <li>Built a digital twin of a building using 3D Mapbox, with real-time sensor data streaming in from AWS Athena</li>
  <li>Developed a real estate platform with React, TypeScript, Google Maps API, and Tailwind CSS,featuring the Nearby Search API to help users easily find nearby public places for an enhanced experience</li>
  <li>Integrated Firebase to host the application, eliminating the need for a traditional back-end</li>
  <li>Enhanced the app with charts that shows all expenses, debt, and goals of the user through the next five years</li>
</ul>`,
            },
            {
                company: "Bit studios",
                position: "Full Stack developer",
                duration: "02/2019 - 01/2021",
                description: `
<ul style="list-style: disc;">
  <li>Contributed to migrating the LBS app with maps using OpenStreetMap from Backbone to React</li>
  <li>Developed and deployed a new searching mechanism that utilizes ElasticSearch and Kafka Streams and improves querying performance by up to 100x</li>
  <li>Worked in a team of 4 and developed a new UI framework based on a styled system, TypeScript and React</li>
  <li>Acquired an in-depth understanding of the app's architecture and codebase, facilitating efficient troubleshooting, debugging, and maintenance of the application</li>
</ul>`,
            },
            {
                company: "Auvik networks",
                position: "Full Stack developer",
                duration: "01/2017 - 01/2019",
                description: `
<ul style="list-style: disc;">
  <li>Developed the front-end mechanics to allow owners ease of use and maintenance</li>
  <li>Built back-end REST and SOAP web services to allow integration from 3rd party websites</li>
  <li>Created platform from scratch using React, Javascript, Typescript, Node.js, nest.js, Angular and Azure services</li>
  <li>Implemented Back-end services to create RESTful APIs using Express.js and Nest.js and optimized the speed of the site</li>
</ul>`,
            },
            {
                company: "Essence",
                position: "Frontend developer",
                duration: "01/2016 - 12/2016",
                description: `
<ul style="list-style: disc;">
  <li>Implemented a presentation layer (graphics, HTML5/CSS3/JavaScript).</li>
  <li>Finalized responsive design while solving specific customer needs regarding display elements</li>
  <li>Set up Linux server, Apache virtual host configurations, and DNS records</li>
  <li>Created a highly customized content management framework in PHP 5</li>
  <li>Maintained night/weekend status as per-issue support for the client</li>
</ul>`,
            },
            {
                company: "Education - University of Belgrade",
                position: "Bachelor of Science in Computer Science",
                duration: "09/2011 - 06/2015",
                description: `
<ul style="list-style: disc;"></ul>`,
            },
        ],
        projects: [
            {
                title: "Javor Draskovic | Portfolio Website",
                description:
                    "This is my portfolio website. I built it to showcase my projects and skills. It is a static site built with Next.js, Tailwind CSS, and Shadcn/UI. I used the following technologies to build it:",
                logo: "/logox.png",
                // repoLink: "https://github.com/codbuild-er/aurora-portfolio",
                technologies: [
                    {
                        icon: <RiNextjsFill className="text-[#FFF]" />,
                        name: "Next.js",
                    },
                    {
                        icon: <RiTailwindCssFill className="text-[#06B6D4]" />,
                        name: "Tailwind CSS",
                    },
                    {
                        icon: <SiShadcnui className="text-[#FFF]" />,
                        name: "Shadcn/UI",
                    },
                    {
                        icon: <SiTypescript className="text-[#3178C6]" />,
                        name: "TypeScript",
                    },
                ],
                // link: "https://javordraskovic.vercel.com",
            },
            {
                title: "Genzify AI",
                description:
                    "GenZify is an AI-powered tool I developed to transform everyday text into trendy Gen Z-style language. I managed both the front-end design and back-end development, integrating AI functionality for smooth and creative rephrasings. The platform delivers a fun, engaging experience, perfect for anyone looking to add a modern twist to their communication. This project highlights my skills in blending AI with user-centric design to create a playful, interactive web tool.",
                logo: "/genzify-logo.png",
                // repoLink: "https://github.com/codbuild-er/genzify-app",
                technologies: [
                    {
                        icon: <RiNextjsFill className="text-[#FFF]" />,
                        name: "Next.js",
                    },
                    {
                        icon: <RiOpenaiFill className="text-[#412991]" />,
                        name: "OpenAI API",
                    },
                    {
                        icon: <RiTailwindCssFill className="text-[#06B6D4]" />,
                        name: "Tailwind CSS",
                    },
                    {
                        icon: <SiTypescript className="text-[#3178C6]" />,
                        name: "TypeScript",
                    },
                    {
                        icon: <SiShadcnui className="text-[#FFF]" />,
                        name: "Shadcn/UI",
                    },
                ],
                link: "https://www.solarsystemscope.com",
            },
            {
                title: "WhatAboutPets",
                description:
                    "WhatAboutPets is a comprehensive blog and e-commerce platform I built to provide valuable insights into pet care, health, and wellness. Alongside engaging articles, the site features an integrated WooCommerce store, offering a variety of pet-related products. I managed everything from designing the user-friendly interface to implementing SEO strategies and setting up the online shop. This project highlights my expertise in both content-driven sites and e-commerce solutions, creating a complete experience for pet lovers.",
                logo: "/whataboutpets-logo.png",
                repoLink: "",
                technologies: [
                    {
                        icon: <RiNextjsFill className="text-[#FFF]" />,
                        name: "Next.js",
                    },
                    {
                        icon: <RiWordpressFill className="text-[#21759B]" />,
                        name: "WordPress",
                    },
                    {
                        icon: <SiTypescript className="text-[#3178C6]" />,
                        name: "TypeScript",
                    },
                    {
                        icon: <RiTailwindCssFill className="text-[#06B6D4]" />,
                        name: "Tailwind CSS",
                    },
                    {
                        icon: <SiShadcnui className="text-[#FFF]" />,
                        name: "Shadcn/UI",
                    },
                    {
                        icon: <GrGraphQl className="text-[#E10098]" />,
                        name: "GraphQL",
                    },
                    {
                        icon: <SiWoocommerce className="text-[#96588A]" />,
                        name: "Woocommerce",
                    },
                ],
                link: "https://whataboutpets.com",
            },
            {
                title: "丹丹影院 - ynct55.com",
                description:
                    "ynct55.com is a Chinese-language streaming platform offering free access to a diverse library of movies, TV shows, and anime. Managed all aspects of the project, from backend infrastructure and database setup to front-end design and user experience. Implemented efficient streaming solutions and optimized the platform for SEO to reach a broader audience. This project highlights my skills in building and maintaining a complete streaming site, tailored specifically for a Chinese-speaking user base.",
                logo: "/ynct55-logo.png",
                repoLink: "",
                technologies: [
                    {
                        icon: <RiNextjsFill className="text-[#FFF]" />,
                        name: "Next.js",
                    },
                    {
                        icon: <RiWordpressFill className="text-[#21759B]" />,
                        name: "WordPress",
                    },
                    {
                        icon: <SiTypescript className="text-[#3178C6]" />,
                        name: "TypeScript",
                    },
                    {
                        icon: <RiTailwindCssFill className="text-[#06B6D4]" />,
                        name: "Tailwind CSS",
                    },
                    {
                        icon: <SiShadcnui className="text-[#FFF]" />,
                        name: "Shadcn/UI",
                    },
                    {
                        icon: <SiPrisma className="text-[#2D3748]" />,
                        name: "Prisma",
                    },
                ],
                link: "https://www.ynct55.com",
            },
        ],
        technologies: {
            main: [
                {
                    name: "Next.js",
                    icon: <RiNextjsFill className="text-[#FFF]" />,
                    description: "React framework",
                },
                {
                    name: "React",
                    icon: <SiReact className="text-[#61DAFB]" />,
                    description: "JavaScript UI library",
                },
                {
                  name: "Angular",
                  icon: <RiAngularjsFill className="text-[#DD0031]" />,
                  description: "Typescript UI Framework",
                },
                {
                    name: "Vue",
                    icon: <RiVuejsFill className="text-[#42b883]" />,
                    description: "JavaScript UI Framework",
                },
                {
                    name: "Tailwind CSS",
                    icon: <RiTailwindCssFill className="text-[#06B6D4]" />,
                    description: "A CSS framework",
                },
                {
                    name: "JavaScript",
                    icon: <SiJavascript className="text-[#f5f800]" />,
                    description: "Javascript",
                },
                {
                    name: "TypeScript",
                    icon: <SiTypescript className="text-[#3178C6]" />,
                    description: "Typed Javascript",
                },
                {
                    name: "Git",
                    icon: <SiGit className="text-[#F05032]" />,
                    description: "A version control system",
                },
                {
                    name: "TypeORM",
                    icon: <SiTypeorm className="text-[#4a5b77]" />,
                    description: "An ORM for databases",
                },
                {
                    name: "Strapi",
                    icon: <SiStrapi className="text-[#21759B]" />,
                    description: "A CMS for websites",
                },
                {
                    name: "Express.js",
                    icon: <SiExpress className="text-[#FFF]" />, // ORIGINALLY BLACK
                    description: "A Node.js framework",
                },
                {
                    name: "Nest.js",
                    icon: <SiNestjs className="text-[#E0234E]" />, // ORIGINALLY BLACK
                    description: "A Node.js framework",
                },
                {
                    name: "Puppeteer",
                    icon: <SiPuppeteer className="text-[#7a56f1]" />,
                    description: "A library for browser automation",
                },
                {
                    name: "Unit testing",
                    icon: <SiJest className="text-[#C21325]" />,
                    description: "Writing Unit Test",
                },
                {
                    name: "End-to-End testing",
                    icon: <SiCypress className="text-[#172A4D]" />,
                    description: "Writing E2E Test",
                },
            ],
            other: [
                {
                    name: "HTML5",
                    icon: <SiHtml5 className="text-[#E34F26]" />,
                },
                {
                    name: "CSS",
                    icon: <SiCss3 className="text-[#009df7]" />,
                },
                {
                    name: "JavaScript",
                    icon: <SiJavascript className="text-[#F7DF1E]" />,
                },
                {
                    name: "NodeJS",
                    icon: <SiNodedotjs className="text-[#339933]" />,
                },
                {
                    name: "PHP",
                    icon: <SiPhp className="text-[#5d6dad]" />,
                },
                {
                    name: "MySQL",
                    icon: <SiMysql className="text-[#5798ca]" />,
                },
                {
                    name: "PostgresSQL",
                    icon: <SiPostgresql className="text-[#336791]" />,
                },
                {
                    name: "Supabase",
                    icon: <SiSupabase className="text-[#0084d4]" />,
                },
                {
                    name: "MongoDB",
                    icon: <SiMongodb className="text-[#47A248]" />,
                },
                {
                    name: "Redis",
                    icon: <DiRedis className="text-[#DC382D]" />,
                },
                {
                    name: "GraphQL",
                    icon: <SiGraphql className="text-[#E10098]" />,
                },
                {
                    name: "RESTful API",
                    icon: <TbApi className="text-[#FF5733]" />,
                },
                {
                    name: "UI Documentation",
                    icon: <SiStorybook className="text-[#FF4785]" />,
                },
                {
                    name: "Three.js",
                    icon: <SiThreedotjs className="text-[#FFF]" />, // ORIGINALLY BLACK
                },
                {
                    name: "WooCommerce",
                    icon: <SiWoocommerce className="text-[#96588A]" />,
                },
                {
                    name: "React Native",
                    icon: <TbBrandReactNative className="text-[#61DAFB]" />,
                },
                {
                    name: "Electron",
                    icon: <SiElectron className="text-[#47848F]" />,
                },
                {
                    name: "Docker",
                    icon: <SiDocker className="text-[#2496ED]" />,
                },
                {
                    name: "Shadcn/UI",
                    icon: <SiShadcnui className="text-[#FFF]" />,
                },
                {
                    name: "Drizzle",
                    icon: <SiDrizzle className="text-[#00A7E1]" />,
                },
            ],
        },
    },
};
