"use client";
import { motion } from "framer-motion";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

// data
const projects = [
  {
    id: 1,
    category: "frontend",
    title: "Portfolio",
    description: "Modern portfolio website",
    image: "/assets/work/portfolio.png",
    link: "https://www.iuriirebryk.com/",
    github: "https://github.com/gkirber/gk-portfolio",
    tech: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 2,
    category: "frontend",
    title: "Nextfolio Portfolio Site",
    description: "Next.js portfolio site",
    image: "/assets/work/thumb2.png",
    link: "",
    github: "",
    tech: ["Next.js", "Tailwind CSS", "Shadcn UI"],
  },
  {
    id: 3,
    category: "fullstack",
    title: "Ideanick",
    description: "Web application for managing ideas",
    image: "/assets/work/ideanick.png",
    link: "https://ideanick.eu/",
    github: "https://github.com/gkirber/ideanick",
    tech: ["React", "TypeScript", "Express", "PostgreSQL", "Docker"],
  },
  {
    id: 4,
    category: "fullstack",
    title: "ChatSync Platform",
    description: "Real-time MERN app with chat functionality",
    image: "/assets/work/thumb4.png",
    link: "",
    github: "",
    tech: ["MERN", "Socket.IO", "Redux"],
  },
  {
    id: 5,
    category: "uiux",
    title: "Velo-city",
    description: "Bicycle Shop – Bikes, Parts & Accessories. Built with HTML & CSS",
    image: "/assets/work/thumb1.png",
    link: "https://velocity-orpin-one.vercel.app/",
    github: "https://github.com/gkirber/velocity",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 6,
    category: "uiux",
    title: "ShopEase Dashboard Redesign",
    description: "Redesign of e-commerce dashboard",
    image: "/assets/work/thumb2.png",
    link: "",
    github: "",
    tech: ["Figma", "Framer", "Whimsical"],
  },
  {
    id: 7,
    category: "other",
    title: "TODO App",
    description: "A modern, responsive TODO application with real-time authentication and task management features. Built with vanilla JavaScript and Firebase.",
    image: "/assets/work/todo-app.png",
    link: "https://todo-wg.vercel.app/",
    github: "https://github.com/gkirber/todo-wg",
    tech: ["JavaScript", "HTML", "CSS", "Firebase"],
  },
  {
    id: 8,
    category: "other",
    title: "Web-Meteo",
    description: "Web Meteo is a modern weather web application that allows you to view current weather, hourly, and 5-day forecasts for any city or your current geolocation. The app features a light/dark theme switcher, a user-friendly interface, and recent city search history.",
    image: "/assets/work/web-meteo.png",
    link: "https://gkirber.github.io/web-meteo/",
    github: "https://github.com/gkirber/web-meteo",
    tech: ["JavaScript", "HTML", "CSS", "OpenWeatherMap API"],
  },
  {
    id: 9,
    category: "branding",
    title: "NovaTach Brand Kit",
    description:
      "Full branding kit for a tech startup including logo and brand book",
    image: "/assets/work/thumb1.png",
    link: "",
    github: "",
    tech: ["Illustrator", "Figma", "Notion"],
  },
];

const categories = ["frontend", "fullstack", "uiux", "other"];

const Work = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-screen flex items-center py-24 xl:py-0"
    >
      <div className="container mx-auto w-full h-full flex flex-col justify-center">
        {/* heading */}
        <h2 className="h2 mb-6 xl:mb-12 max-w-[600px]">
          My Latest <span className="text-accent">Work</span>
        </h2>
        {/* tabs */}
        <Tabs
          defaultValue="frontend"
          className="w-full flex flex-col gap-6 xl:gap-12"
        >
          {/* tabs list */}
          <TabsList className="flex flex-wrap justify-center items-center gap-4 h-full mb-4 xl:mb-0">
            {categories.map((category) => {
              return (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="capitalize border border-white/10 data-[state=active]:bg-accent data-[state=active]:border-accent h-[48px] px-6 rounded-full cursor-pointer"
                >
                  {category === "uiux" ? "UI UX Design" : category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="h-[400px] scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible">
            {categories.map((category) => {
              return (
                <TabsContent key={category} value={category}>
                  <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    className="h-max xl:h-[460px]"
                  >
                    {projects
                      .filter((project) => project.category === category)
                      .map((project) => {
                        return (
                          <SwiperSlide key={project.id} className="h-full">
                            <div className="flex flex-col xl:flex-row gap-8 xl:gap-12">
                              {/* project info */}
                              <div className="w-full max-w-[380px] flex flex-col gap-6 xl:gap-8 xl:pt-6 order-2 xl:order-none">
                                {/* title */}
                                <h3 className="h3">{project.title}</h3>
                                {/* tech */}
                                <div className="xl:mb-4 max-w-[300px] min-h-[130px]">
                                  <p className="mb-4">Technologies Used</p>
                                  <ul className="flex flex-wrap gap-4">
                                    {project.tech.map((item, index) => {
                                      return (
                                        <li
                                          key={index}
                                          className="flex items-center gap-4 bg-[#a883ff]/13 h-[28px] px-[14px] rounded-full"
                                        >
                                          {item}
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>
                                {/* btns */}
                                <div className="flex flex-col sm:flex-row gap-4 items-start">
                                  <Link href={project.link}>
                                    <button className="btn btn-sm btn-accent flex gap-2">
                                      <MdArrowOutward className="text-xl" />
                                      <span>Live Project</span>
                                    </button>
                                  </Link>
                                  <Link href={project.github}>
                                    <button className="btn btn-sm btn-white flex gap-2">
                                      <FaGithub className="text-xl" />
                                      <span>Github Repo</span>
                                    </button>
                                  </Link>
                                </div>
                              </div>
                              {/* project img */}
                              <div className="w-full h-[200px] md:h-[300px] xl:h-[400px] relative bg-pink-50/10 order-1 xl:order-none rounded-lg overflow-hidden">
                                <Image
                                  src={project.image}
                                  alt={project.image}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                  </Swiper>
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
};

export default Work;
