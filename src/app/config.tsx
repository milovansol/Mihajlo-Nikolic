import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { MdOutlineDescription } from "react-icons/md";
import {
  RiNextjsFill,
  RiTailwindCssFill, RiWordpressFill, RiOpenaiFill,
} from 'react-icons/ri';
import {
  SiTypescript,
  SiShadcnui,
  SiWoocommerce,
  SiReact,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiGraphql,
  SiDocker,
  SiPrisma,
  SiDotnet,
  SiCsharp,
  SiAnthropic,
  SiLangchain,
  SiHuggingface,
  SiPython,
  SiFlutter,
  SiAndroid,
  SiFirebase,
  SiExpo,
  SiAmazonwebservices,
  SiMicrosoftazure,
  SiKubernetes,
  SiGithubactions,
  SiJenkins,
  SiTerraform,
  SiLinux,
  SiMicrosoftsqlserver,
  SiElasticsearch,
  SiRedis,
} from 'react-icons/si';
import { GrGraphQl } from "react-icons/gr";
import {
  TbApi,
  TbBrandReactNative,
  TbDatabaseSearch,
  TbRobot,
  TbPrompt,
  TbAdjustmentsBolt,
  TbInfinity,
  TbPlugConnected,
} from "react-icons/tb";


export const siteConfig = {
    name: "Mihajlo Nikolic",
    title: "Mihajlo Nikolic | Software Engineering Consultant & AI Engineer",
    email: "mihajlon939@gmail.com",
    alias: "Mihajlo",
    description:
        "Mihajlo Nikolic is a Software Engineering Consultant and AI Application Specialist with 10 years of experience delivering scalable web platforms, intelligent business applications, and cloud-native software solutions. He architects modern full stack systems with React, Next.js, Node.js, and .NET, and implements AI-powered solutions through LLM integration, prompt engineering, Retrieval-Augmented Generation (RAG), AI workflow orchestration, and model fine-tuning.",
    keywords:
        "Mihajlo Nikolic, software engineering consultant, AI engineer, AI application specialist, full stack developer, LLM integration, RAG, LangChain, LangGraph, OpenAI, Claude, prompt engineering, React, Next.js, Node.js, .NET, ASP.NET Core, TypeScript, AWS, Azure, Docker, Kubernetes, Serbia",
    url: "https://mihajlonikolic.vercel.app",
    taglines: [
        "🚀 Building scalable web platforms and cloud-native software, from architecture to production. ✨ Let's turn your ideas into reliable, high-performing products!",
        "🤖 Bringing AI into real business workflows: LLM integration, RAG pipelines, AI agents, and fine-tuned models. 🌐 Automate processes, unlock knowledge, and engage customers.",
        "💡 10 years of full stack engineering with React, Next.js, Node.js, and .NET. 🌟 Let's define your technical roadmap and deliver it, one milestone at a time.",
    ],
    titles: [
        "Software Engineering Consultant",
        "AI Application Specialist",
        "Digital Solutions Developer",
    ],
    socialLinks: [
        {
            icon: <FaGithub />,
            url: "https://github.com/code-buildo",
        },
        {
            icon: <MdOutlineDescription size={24} />,
            url: "https://drive.google.com/file/d/1ayACRIYLZoqw8eiEKUOWfQrMknfrum1K/view?usp=sharing",
        },
        {
            icon: <FaLinkedin />,
            url: "https://www.linkedin.com/in/mihajlonikolic9",
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
            Hi! I'm Mihajlo, a <strong>Software Engineering Consultant</strong> and <strong>AI Engineer</strong> from Serbia with <strong>10 years</strong> of experience delivering <strong>scalable web platforms</strong>, <strong>intelligent business applications</strong>, and <strong>cloud-native software solutions</strong> for clients across finance, healthcare, and logistics.
             I architect modern full stack systems with <strong>React</strong>, <strong>Next.js</strong>, <strong>TypeScript</strong>, <strong>Node.js</strong>, <strong>C# / .NET 8</strong>, and <strong>ASP.NET Core</strong>, and guide technical delivery across the complete development lifecycle.
            </p>
            <p>
             I build AI-powered solutions through <strong>LLM integration</strong> (<strong>OpenAI</strong>, <strong>Claude</strong>), <strong>prompt engineering</strong>, <strong>Retrieval-Augmented Generation (RAG)</strong> with <strong>LangChain</strong> and <strong>LangGraph</strong>, <strong>AI agents</strong>, <strong>MCP</strong>, and <strong>model fine-tuning</strong>, and ship them on <b>AWS, Azure, Docker, and Kubernetes</b> with automated CI/CD pipelines.
            </p>
            <p>
                Let's connect—I'd love to help with your <strong>application</strong>!
            </p>
        `,
        experiences: [
            {
                company: "Self-Employed",
                position: "Independent Software Consultant | AI Engineer",
                duration: "03/2025 - Present",
                description: `
<ul style="list-style: disc;">
    <li>Integrate OpenAI, Claude, and LLM-powered capabilities into enterprise systems to automate business processes, knowledge management, and customer engagement</li>
    <li>Design and deploy Retrieval-Augmented Generation (RAG) solutions using LangChain, LangGraph, vector databases, and semantic search technologies</li>
    <li>Manage project orchestration, prompt engineering, AI model evaluation, fine-tuning, and production deployment across multiple client engagements</li>
    <li>Develop scalable full stack applications using React, Node.js, .NET, and Python while implementing secure cloud architectures</li>
    <li>Collaborate directly with founders and executive stakeholders to define technical roadmaps, delivery milestones, and software modernization strategies</li>
</ul>`,
            },
            {
                company: "Devapo · Full-time",
                position: "Senior Full Stack Engineer",
                duration: "03/2021 - 01/2025",
                description:`
<ul style="list-style: disc;">
    <li>Designed and delivered enterprise web applications using React, ASP.NET Core, Node.js, and TypeScript for clients across finance, healthcare, and logistics</li>
    <li>Developed secure REST APIs and scalable backend services supporting cloud-hosted SaaS platforms</li>
    <li>Improved application scalability through microservice architecture, database optimization, and performance tuning initiatives</li>
    <li>Worked closely with UX designers, QA engineers, DevOps specialists, and product managers to deliver high-quality software solutions</li>
    <li>Automated deployment pipelines using Docker, Kubernetes, GitHub Actions, and Infrastructure as Code practices</li>
    <li>Conducted technical mentoring, architecture reviews, and code quality assessments to strengthen engineering standards</li>
</ul>`,
            },
            {
                company: "Appomart · Full-time",
                position: "Full Stack Software Engineer",
                duration: "01/2017 - 01/2021",
                description: `
<ul style="list-style: disc;">
    <li>Built modern business applications using React, Next.js, .NET Core, and SQL Server for commercial and enterprise clients</li>
    <li>Engineered RESTful APIs and backend services that improved interoperability between internal systems and third-party platforms</li>
    <li>Collaborated with cross-functional teams to deliver scalable digital products using Agile software development methodologies</li>
    <li>Refactored legacy applications into modular architectures, improving maintainability and long-term scalability</li>
    <li>Optimized application performance through efficient database design, caching strategies, and backend enhancements</li>
    <li>Developed and maintained custom web applications using C#, ASP.NET MVC, JavaScript, HTML5, CSS3, and SQL Server</li>
    <li>Built reusable frontend components and backend modules that accelerated software delivery and improved code consistency</li>
    <li>Designed database schemas, optimized SQL queries, and enhanced application performance to support growing business requirements</li>
    <li>Integrated payment gateways, authentication providers, and third-party APIs into enterprise business systems</li>
    <li>Worked with senior developers, QA engineers, and project managers throughout Agile development cycles to deliver reliable software</li>
</ul>`,
            },
            {
                company: "Education - University of Belgrade, Serbia",
                position: "Bachelor of Science in Information Technology",
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
                    name: "C#",
                    icon: <SiCsharp className="text-[#9B4F96]" />,
                    description: "Typed .NET language",
                },
                {
                    name: ".NET 8 / ASP.NET Core",
                    icon: <SiDotnet className="text-[#512BD4]" />,
                    description: "Backend framework",
                },
                {
                    name: "Node.js",
                    icon: <SiNodedotjs className="text-[#339933]" />,
                    description: "JavaScript runtime",
                },
                {
                    name: "React",
                    icon: <SiReact className="text-[#61DAFB]" />,
                    description: "JavaScript UI library",
                },
                {
                    name: "Next.js",
                    icon: <RiNextjsFill className="text-[#FFF]" />,
                    description: "React framework",
                },
                {
                    name: "TypeScript",
                    icon: <SiTypescript className="text-[#3178C6]" />,
                    description: "Typed Javascript",
                },
                {
                    name: "OpenAI API",
                    icon: <RiOpenaiFill className="text-[#FFF]" />,
                    description: "LLM integration",
                },
                {
                    name: "Claude API",
                    icon: <SiAnthropic className="text-[#D97757]" />,
                    description: "LLM integration",
                },
                {
                    name: "LangChain / LangGraph",
                    icon: <SiLangchain className="text-[#FFF]" />,
                    description: "LLM orchestration",
                },
                {
                    name: "RAG",
                    icon: <TbDatabaseSearch className="text-[#10B981]" />,
                    description: "Retrieval-Augmented Generation",
                },
                {
                    name: "AI Agents & MCP",
                    icon: <TbRobot className="text-[#A78BFA]" />,
                    description: "Agentic workflows",
                },
                {
                    name: "Docker",
                    icon: <SiDocker className="text-[#2496ED]" />,
                    description: "Containerization",
                },
                {
                    name: "Kubernetes",
                    icon: <SiKubernetes className="text-[#326CE5]" />,
                    description: "Container orchestration",
                },
                {
                    name: "AWS",
                    icon: <SiAmazonwebservices className="text-[#FF9900]" />,
                    description: "Cloud platform",
                },
                {
                    name: "Microsoft Azure",
                    icon: <SiMicrosoftazure className="text-[#0078D4]" />,
                    description: "Cloud platform",
                },
            ],
            other: [
                {
                    name: "JavaScript",
                    icon: <SiJavascript className="text-[#F7DF1E]" />,
                },
                {
                    name: "HTML5",
                    icon: <SiHtml5 className="text-[#E34F26]" />,
                },
                {
                    name: "CSS3",
                    icon: <SiCss3 className="text-[#009df7]" />,
                },
                {
                    name: "Python",
                    icon: <SiPython className="text-[#3776AB]" />,
                },
                {
                    name: "RESTful API",
                    icon: <TbApi className="text-[#FF5733]" />,
                },
                {
                    name: "GraphQL",
                    icon: <SiGraphql className="text-[#E10098]" />,
                },
                {
                    name: "LlamaIndex",
                    icon: <TbPlugConnected className="text-[#FFF]" />,
                },
                {
                    name: "Hugging Face",
                    icon: <SiHuggingface className="text-[#FFD21E]" />,
                },
                {
                    name: "Prompt Engineering",
                    icon: <TbPrompt className="text-[#F472B6]" />,
                },
                {
                    name: "Model Fine-Tuning",
                    icon: <TbAdjustmentsBolt className="text-[#F59E0B]" />,
                },
                {
                    name: "Flutter",
                    icon: <SiFlutter className="text-[#02569B]" />,
                },
                {
                    name: "React Native",
                    icon: <TbBrandReactNative className="text-[#61DAFB]" />,
                },
                {
                    name: "Android SDK",
                    icon: <SiAndroid className="text-[#3DDC84]" />,
                },
                {
                    name: "Firebase",
                    icon: <SiFirebase className="text-[#FFCA28]" />,
                },
                {
                    name: "Expo",
                    icon: <SiExpo className="text-[#FFF]" />,
                },
                {
                    name: "GitHub Actions",
                    icon: <SiGithubactions className="text-[#2088FF]" />,
                },
                {
                    name: "Jenkins",
                    icon: <SiJenkins className="text-[#D24939]" />,
                },
                {
                    name: "Terraform",
                    icon: <SiTerraform className="text-[#7B42BC]" />,
                },
                {
                    name: "Linux",
                    icon: <SiLinux className="text-[#FCC624]" />,
                },
                {
                    name: "CI/CD Pipelines",
                    icon: <TbInfinity className="text-[#22D3EE]" />,
                },
                {
                    name: "PostgreSQL",
                    icon: <SiPostgresql className="text-[#336791]" />,
                },
                {
                    name: "SQL Server",
                    icon: <SiMicrosoftsqlserver className="text-[#CC2927]" />,
                },
                {
                    name: "MySQL",
                    icon: <SiMysql className="text-[#5798ca]" />,
                },
                {
                    name: "MongoDB",
                    icon: <SiMongodb className="text-[#47A248]" />,
                },
                {
                    name: "Redis",
                    icon: <SiRedis className="text-[#DC382D]" />,
                },
                {
                    name: "Elasticsearch",
                    icon: <SiElasticsearch className="text-[#00BFB3]" />,
                },
            ],
        },
    },
};
