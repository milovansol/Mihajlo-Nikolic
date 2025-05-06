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
    name: "Milovan Soldatovic",
    title: "Milovan Soldatovic | Full-Stack Developer",
    email: "milovansoldatovic@gmail.com",
    alias: "Milovan",
    description:
        "Milovan Soldatovic is a web developer who builds scalable, user-centric applications using Next.js, WordPress, and other frameworks. With a focus on performance, accessibility, and clean code, Milovan creates digital solutions that are both functional and aesthetically pleasing.",
    keywords:
        "Milovan Soldatovic, full-stack developer, web development, Next.js, WordPress, React, Node.js, scalable applications, clean code",
    url: "https://milovansoldatovic.dev",
    taglines: [
        "🚀 Coding Simplicity, Crafting Solutions: Bringing Ideas to Life, One Line at a Time. ✨ Let's transform challenges into digital possibilities with precision and creativity!",
        "🎨 Where Code Meets Creativity: Building Digital Experiences that Matter. 🌐 From intuitive interfaces to powerful backend systems, I create solutions that engage and inspire.",
        "💡 Innovating Beyond the Screen: Crafting Seamless Digital Journeys. 🌟 From concept to completion, let’s build the future, one pixel and one line of code at a time.",
    ],
    titles: ["Full-Stack Developer", "NextJS Developer", "Node.js Developer"],
    socialLinks: [
        {
            icon: <FaGithub />,
            url: "https://github.com/codbuild-er",
        },
        {
            icon: <FaLinkedin />,
            url: "https://www.linkedin.com/in/milovan-soldatovic/",
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
            url: "mailto:milovansoldatovic@gmail.com",
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
                Hi! I'm Milovan, a <strong>full-stack developer</strong> who started development in <strong>2014</strong>. Since then, I've built <strong>bunkering</strong>, <strong>e-learning</strong>, <strong>healthcare</strong>, <strong>fintech</strong>, and <strong>e-commerce sites</strong>. Whether it’s front-end finesse or back-end logic, I love bringing ideas to life on the web.
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
                company: "Duos Asinos",
                position: "Full Stack Developer",
                duration: "02/2020 - 12/2024",
                description:`
<ul style="list-style: disc;">
  <li>Built an advanced IoT portal using React.js, capitalizing on its full suite of features for dynamic and responsive UI components.</li>
  <li>Developed a robust and scalable multi-tenant IoT platform using Node.js integrated with a Serverless architecture.</li>
  <li>Designed and implemented sophisticated cloud-based microservices for the automotive industry, with front-end solutions developed in Next.js and supported by Angular for improved responsiveness and interactivity.</li>
  <li>Enhanced AWS Lambda performance by implementing efficient bundling, tree shaking, and leveraging top-level await to significantly reduce cold start times.</li>
  <li>Led the development of a loyalty web application using Next.js, achieving seamless cross-platform integration and enhanced user engagement.</li>
  <li>Developed Java-based back-end solutions to ensure robust processing and integration with client applications.</li>
  <li>Conducted end-to-end design and integration of back-end services with third-party solutions, including Shopify, Magento, Auth0, Zapier, Hubspot, and Pipedrive, enhancing system interoperability.</li>
  <li>Increased application efficiency and operational performance through strategic integration of Amazon Web Services, Firebase, and JavaScript based microservices</li>
</ul>`,
            },
            {
                company: "Nignite",
                position: "Full Stack developer",
                duration: "10/2017 - 02/2020",
                description: `
<ul style="list-style: disc;">
  <li>Spearheaded IoT solution development, incorporating customizable RESTful API integration to enhance cross-device communication.</li>
  <li>Delved into the Java ecosystem as part of a strategic project in the gas distribution sector, crafting a utility desktop application based on the uDig geospatial platform using Java, RCP, OracleDB with spatial extensions, GeoTools, and the GDAL library.</li>
  <li>Instrumental in the successful launch of Nignite's new branch in Warsaw, driving integration events and fostering effective communication between developers and project management teams.</li>
  <li>Collaborated on existing codebases, maintained adherence to coding standards, conducted regular code reviews, engaged in daily standups to align on priorities, and contributed to the development of franchise platforms.</li>
  <li>Executed optimization of existing database migrations, resulting in enhanced system performance and streamlined operations.</li>
</ul>`,
            },
            {
                company: "CUBE Team",
                position: "Full Stack developer",
                duration: "05/2015 - 10/2017",
                description: `
<ul style="list-style: disc;">
  <li>Engineered e-commerce and fintech web applications utilizing the MERN/MEAN stack (MongoDB, Express, React, Node.js).</li>
  <li>Implemented Socket.IO for dynamic group chat functionality and used WebSockets for real-time synchronization across platforms.</li>
  <li>Designed and developed a trend analysis platform using D3.js, delivering insightful data visualization capabilities.</li>
</ul>`,
            },
            {
                company: "CUBE Team",
                position: "Frontend developer",
                duration: "01/2014 - 05/2015",
                description: `
<ul style="list-style: disc;">
  <li>Joined CUBE Team as a Front-end Developer, contributing to critical projects with a focus on responsive web design.</li>
  <li>Played a key role in developing a car-driving lesson web application, employing AngularJS and jQuery for interactive feature implementation.</li>
  <li>Gained substantial hands-on experience with web development technologies, including HTML, CSS, JavaScript, and PHP.</li>
</ul>`,
            },
        ],
        projects: [
            {
                title: "Milovan Soldatovic | Portfolio Website",
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
                // link: "https://milovansoldatovic.vercel.com",
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
                    name: "Vue",
                    icon: <RiVuejsFill className="text-[#42b883]" />,
                    description: "JavaScript UI Framework",
                },
                {
                    name: "Angular",
                    icon: <RiAngularjsFill className="text-[#DD0031]" />,
                    description: "Typescript UI Framework",
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
