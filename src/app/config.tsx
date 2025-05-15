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
    name: "Borivoj Delic",
    title: "Borivoj Delic | Full-Stack Developer",
    email: "borivojdelic@gmail.com",
    alias: "Borivoj",
    description:
        "Borivoj Delic is a dedicated and experienced Full Stack Developer, adept at crafting innovative web applications. Skilled in utilizing a range of technologies such as React, Vue, AWS Lambda, Angular and Node.js. Thrives in collaborative environments, demonstrated by successful team projects and significant contributions to app migrations and new feature implementations. A proactive problem-solver with a keen eye for detail, eager to leverage expertise to drive impactful solutions aligned with the company's mission.",
    keywords:
        "Borivoj Delic, full-stack developer, web development, Next.js,React, Angular, Vue, Node.js, Express.js, Nest.js, scalable applications, clean code",
    url: "https://borivojdelic.vercel.app",
    taglines: [
        "🚀 Coding Simplicity, Crafting Solutions: Bringing Ideas to Life, One Line at a Time. ✨ Let's transform challenges into digital possibilities with precision and creativity!",
        "🎨 Where Code Meets Creativity: Building Digital Experiences that Matter. 🌐 From intuitive interfaces to powerful backend systems, I create solutions that engage and inspire.",
        "💡 Innovating Beyond the Screen: Crafting Seamless Digital Journeys. 🌟 From concept to completion, let’s build the future, one pixel and one line of code at a time.",
    ],
    titles: ["Full-Stack Developer - Frontend & Backend & Mobile"],
    socialLinks: [
        {
            icon: <FaGithub />,
            url: "https://github.com/codbuild-er",
        },
        {
            icon: <FaLinkedin />,
            url: "https://www.linkedin.com/in/borivoj-delic/",
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
            url: "mailto:borivojdelic@gmail.com",
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
            Hi! I'm Borivoj, a <strong>Full Stack Developer</strong> with a proven track record in building robust web applications, including <strong>SaaS platforms, CRMs, fintech solutions</strong>, and projects using <strong>React</strong>, <strong>Angular</strong>, <strong>Vue</strong>, <strong>Next.js</strong>, <strong>Nuxt.js</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>, <strong>Nest.js</strong>, <strong>PHP / Laravel</strong> and <strong>Python / Django</strong>.
             I am proficient in <strong>JavaScript/TypeScript</strong>, <strong>React / Angular / Vue</strong>, <strong>Node.js</strong>, <strong>PHP</strong>, and <strong>Laravel</strong>.
              I have a strong foundation in software development methodologies and also bring expertise as a DevOps engineer, with hands-on experience implementing CI/CD workflows using tools such as <b>GitHub Actions, Docker</b>, and more.
            </p>
            <p>
                Let's connect—I'd love to help with your <strong>application</strong>!
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
  <li>Experienced in developing, customizing, and maintaining Next.js + Strapi websites, including theme and plugin development, SEO optimization, and content management</li>
  <li>Maintained Angular based project, Improved UI performance by reducing bundle size via lazy loading, tree-shaking, and code splitting</li>
</ul>`,
            },
            {
                company: "Vodafone",
                position: "Full Stack Developer",
                duration: "10/2020 - 12/2024",
                description:`
<ul style="list-style: disc;"> 
 <li>Developed a conversational PDF interface that integrates Pinecone, OpenAI, and Langchain to enable natural language-based interactions, allowing users to chat with documents, get answers, and discuss content</li>
 <li>Streamlined a company's workflow by simplifying their Google services flow, turning several into more practical and easy-to-use solutions, tools, and integrations</li>
 <li>Developed a microservices architecture using Node.js and TypeScript, implementing Event-Driven-Architectures with Apache Kafka, which improved system scalability and reliability</li>
 <li>Transformed business ideas into technical solutions. Created products and features that increased productivity presented new possibilities and reduced manual processes</li>
 <li>Developed a Slack chatbot integrating Google's Dialogflow platform, resulting in a bot that smoothly leads users through conversations while collecting relevant data points</li>
 <li>Redesigned a front-end application fully, building on an existing system. Created dozens of flexible CMS components, allowing designers and editors to focus on creating new content and cutting down the need for developer time by a large portion</li>
 <li>Built an image processing tool, compositing input images with various background images and outputting Google Slides presentations for rapid design prototyping</li>
 <li>Created an interactive Slack workflow for downloading media from user-supplied links. Processed tens to hundreds of video and audio files daily, delivering them to a storage platform after applying various edits and tags</li>
</ul>`,
            },
            {
                company: "Wolftech Studio",
                position: "Full Stack developer",
                duration: "07/2019 - 08/2020",
                description: `
<ul style="list-style: disc;">
  <li>Created a custom responsive drag and drop tool in React-connecting calendar, note, and appointment functions and saving users from using multiple applications</li>
  <li>Implemented a car location tracking system that calculates potential banner revenue based on impressions for a React Native application</li>
  <li>Supervised and trained a team of two front-end interns</li>
  <li>Developed precise airspace tracking of drones, processing their attributes such as height, atmospheric pressure, or tilt for a web application</li>
  <li>Created a secure flight scheduling application for pilots with a custom calendar component</li>
</ul>`,
            },
            {
                company: "AltahonosStudio",
                position: "Software Engineer",
                duration: "04/2016 - 06/2019",
                description: `
<ul style="list-style: disc;">
    <li>Contributed to the architecture and development of a teleconferencing app used for ERS for all major S&P 500 companies</li>
    <li>Contributed to the design, architecture, and development of an app that helps government contractors bid on projects</li>
    <li>Prototyped a Node.js-powered Angular app backed by a Gremlin-Cassandra database</li>
    <li>Created an aggregator of financial Twitter streams to monitor and log social activity related to the company</li>
    <li>Developed a mailing product that leverages AWS SES, S3, and SNS. It allows a higher-level interface over a lower-level infrastructure</li>
    <li>Built a financial tracker that monitors short-selling positions not closed before the EOB</li>
    <li>Developed a deal-tracking website with the Google Maps API to display current and upcoming deals on the map</li>
</ul>`,
            },
            {
                company: "Quarks Systems",
                position: "Full Stack developer",
                duration: "02/2015 - 03/2016",
                description: `
<ul style="list-style: disc;">
    <li>Developed a microservices architecture using Node.js and TypeScript, implementing Event-Driven-Architectures with Apache Kafka, which improved system scalability and reliability.</li>
    <li>Transitioned the legacy app from jQuery-powered framework to MERN stack, enhancing performance and maintainability.</li>
    <li>Scripted, built, and deployed pipelines, enhancing data processing efficiency and system reliability.</li>
    <li>Developed an interactive and offline reporting engine, improving user engagement and data accessibility.</li>
    <li>Created comprehensive documentation, streamlining onboarding and reducing training time.</li>
</ul>`,
            },
            {
                company: "Education - University of Belgrade",
                position: "Bachelor's Degree - Computer Science",
                duration: "10/2010 - 06/2014",
                description: `
<ul style="list-style: disc;"></ul>`,
            },
        ],
        projects: [
            {
                title: "Borivoj Delic | Portfolio Website",
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
                // link: "https://borivojdelic.vercel.com",
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
