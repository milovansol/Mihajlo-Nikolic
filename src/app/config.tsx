import React from 'react';
import { FaLinkedin, FaFile } from "react-icons/fa6";
import { FiFile } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import { MdOutlineDescription } from "react-icons/md";
import { FaRegFileAlt } from 'react-icons/fa';
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
    name: "Mihajlo Nikolic",
    title: "Mihajlo Nikolic | Full-Stack Developer",
    email: "mihajlon939@gmail.com",
    alias: "Mihajlo",
    description:
        "Mihajlo Nikolic is a dedicated and experienced Full Stack Developer, adept at crafting innovative web applications. Skilled in utilizing a range of technologies such as React, Vue, AWS Lambda, Angular and Node.js. Thrives in collaborative environments, demonstrated by successful team projects and significant contributions to app migrations and new feature implementations. A proactive problem-solver with a keen eye for detail, eager to leverage expertise to drive impactful solutions aligned with the company's mission.",
    keywords:
        "Mihajlo Nikolic, full-stack developer, web development, Next.js,React, Angular, Vue, Node.js, Express.js, Nest.js, scalable applications, clean code",
    url: "https://mihajlonikolic.vercel.app",
    taglines: [
        "🚀 Coding Simplicity, Crafting Solutions: Bringing Ideas to Life, One Line at a Time. ✨ Let's transform challenges into digital possibilities with precision and creativity!",
        "🎨 Where Code Meets Creativity: Building Digital Experiences that Matter. 🌐 From intuitive interfaces to powerful backend systems, I create solutions that engage and inspire.",
        "💡 Innovating Beyond the Screen: Crafting Seamless Digital Journeys. 🌟 From concept to completion, let’s build the future, one pixel and one line of code at a time.",
    ],
    titles: ["Full-Stack Developer - Frontend & Backend & Mobile"],
    socialLinks: [
        // {
        //     icon: <FaGithub />,
        //     url: "https://github.com/codbuild-er",
        // },
        {
            icon: <MdOutlineDescription size={24} />,
            url: "https://drive.google.com/file/d/1ayACRIYLZoqw8eiEKUOWfQrMknfrum1K/view?usp=sharing",
        },
        {
            icon: <FaLinkedin />,
            url: "https://www.linkedin.com/in/mihajlonikolic9/ ",
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
            url: "mailto:mihajlon939@gmail.com",
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
            Hi! I'm Mihajlo, a <strong>Full Stack Developer</strong> with a proven track record in building robust web applications, including <strong>SaaS platforms, CRMs, fintech solutions</strong>, and projects using <strong>React</strong>, <strong>Angular</strong>, <strong>Vue</strong>, <strong>Next.js</strong>, <strong>Nuxt.js</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>, <strong>Nest.js</strong>, <strong>PHP / Laravel</strong> and <strong>Python / Django</strong>.
             I am proficient in <strong>JavaScript/TypeScript</strong>, <strong>React / Angular / Vue</strong>, <strong>Node.js</strong>, <strong>PHP</strong>, and <strong>Laravel</strong>.
              I have a strong foundation in software development methodologies and also bring expertise as a DevOps engineer, with hands-on experience implementing CI/CD workflows using tools such as <b>GitHub Actions, Docker</b>, and more.
            </p>
            <p>
                Let's connect—I'd love to help with your <strong>application</strong>!
            </p>
        `,
        experiences: [
            {
                company: "Freelancer",
                position: "Full Stack Developer",
                duration: "01/2025 - Present",
                description: `
<ul style="list-style: disc;">
    <li>Orchestrated a strategic upgrade of the web platform from React to Next.js, resulting in a 20% improvement in SEO performance and a 30% increase in page loading speed</li>
    <li>Utilized Python and Django to develop robust web applications with dynamic features, efficient database management, and secure user authentication through RESTful APIs</li>
    <li>Developed, customized, and maintained Strapi-based CMS solutions, enabling flexible content management, API integration, and enhanced scalability for modern web projects</li>
    <li>Engineered backend services using Symfony, improving API performance, data processing, and security through well-structured RESTful endpoints and authentication mechanisms</li>
</ul>`,
            },
            {
                company: "Devapo · Full-time",
                position: "Lead Full Stack Developer",
                duration: "03/2021 - 01/2025",
                description:`
<ul style="list-style: disc;"> 
    <li>Led the architecture, development, and deployment of multiple scalable web applications, utilizing modern full stack frameworks and cloud technologies to deliver robust business solutions.</li>
    <li>Managed cross-functional teams, driving agile development processes and mentoring junior engineers to consistently achieve project milestones ahead of schedule.</li>
    <li>Updated the fintech project with Angular, Nest.js, Stripe, AWS and worked on the deployment process by CI/CD pipeline</li>
    <li>Integrated the real-time socket communication and complex payment system</li>
    <li>Actively participated in decision-making processes pertaining to various project-related topics and provided mentorship to junior developers, guiding them in issue resolution, code patterns, and overall best practices</li>
    <li>Developed a Saas platform using React, Tailwind CSS, Node and MongoDB and built a custom UI component library utilizing React, TypeScript and Storybook</li>
    <li>Developed and maintained backend services and APIs using Go, focusing on high performance and scalability.</li>
    <li>Implemented RESTful APIs and microservices architectures leveraging Go’s concurrency features, including goroutines and channels, to handle multiple parallel operations efficiently.</li>
    <li>Wrote clean, maintainable, and testable code, applying best practices such as proper error handling and context management.</li>
    <li>Integrated Go services with databases like PostgreSQL and Redis, using Go ORM libraries and database drivers.</li>
    <li>Collaborated in the design and development of distributed systems, applying RPC frameworks such as gRPC for interservice communication.</li>
    <li>Implemented monitoring dashboard using DataDog</li>
    <li>Optimize performance and eliminate bottlenecks in the system.</li>
    <li>Developed a Saas platform using React, Tailwind CSS, Node and MongoDB and built a custom UI component library utilizing React, TypeScript and Storybook</li>
</ul>`,
            },
            {
                company: "Appomart - IT company",
                position: "Full Stack developer",
                duration: "10/2016 - 02/2021",
                description: `
<ul style="list-style: disc;">
    <li>Refactored the existing code to improve the performance</li>
    <li>Worked on the CI/CD pipeline by Git actions, Jenkins and Circle Cl</li>
    <li>Utilized the MEAN stack (MongoDB, Express, AngularJS, and Node.js) and modern mobile-first UX designs and upgraded CRM platforms with Vue, Vuex, Laravel frameworks</li>
    <li>Created Saas project by React, Redux, Node (Express), RESTful API and created a HOC architecture to reuse common GraphQL functionality for listing and filtering</li>
    <li>Developed complex data visualization platform by React, D3 and Highcharts libraries</li>
    <li>Worked on an Advertising platform that manages heavy assets using React, React hooks, Context API</li>
    <li>Developed with Laravel eloquentORM, templates, Symfony Doctrine, twig blade</li>
    <li>Worked on the Back-end of the Admin Portal by using Node.js/MongoDB Worked with Mocha, Jest, Cypress</li>
</ul>`,
            },
            {
                company: "Education - University of Belgrade",
                position: "Bachelor's Degree - Computer Science",
                duration: "10/2012 - 06/2016",
                description: `
<ul style="list-style: disc;"></ul>`,
            },
        ],
        projects: [
            {
                title: "Mihajlo Nikolic | Portfolio Website",
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
                // link: "https://mihajlonikolic.vercel.com",
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
