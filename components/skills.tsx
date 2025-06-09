import React from "react";
import {
    RiJavascriptFill,
    RiNextjsFill,
    RiTailwindCssFill,
} from "react-icons/ri";
import { FaHtml5, FaPython, FaReact } from "react-icons/fa";
import { BiLogoMongodb, BiLogoTypescript } from "react-icons/bi";
import { IoLogoElectron } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import { MdCss } from "react-icons/md";
import { TbApi } from "react-icons/tb";

const skills = {
    JavaScript: ({ size = 40 }: { size: number }) => (
        <RiJavascriptFill size={size} />
    ),
    TypeScript: ({ size = 40 }: { size: number }) => (
        <BiLogoTypescript size={size} />
    ),
    Python: ({ size = 40 }: { size: number }) => <FaPython size={size} />,
    React: ({ size = 40 }: { size: number }) => <FaReact size={size} />,
    "Next.JS": ({ size = 40 }: { size: number }) => (
        <RiNextjsFill size={size} />
    ),
    MongoDB: ({ size = 40 }: { size: number }) => <BiLogoMongodb size={size} />,
    Electron: ({ size = 40 }: { size: number }) => (
        <IoLogoElectron size={size} />
    ),
    MySQL: ({ size = 40 }: { size: number }) => <SiMysql size={size} />,
    HTML: ({ size = 40 }: { size: number }) => <FaHtml5 size={size} />,
    CSS: ({ size = 40 }: { size: number }) => <MdCss size={size} />,
    "Tailwind CSS": ({ size = 40 }: { size: number }) => (
        <RiTailwindCssFill size={size} />
    ),
    "Rest API": ({ size = 40 }: { size: number }) => <TbApi size={size} />,
};

export default skills;
