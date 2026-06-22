import { IconType } from "react-icons";
import {
  FaFlutter,
  FaGolang,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa6";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPrisma,
  SiSupabase,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { TiHtml5 } from "react-icons/ti";
import { cn } from "@/lib/utils";

export type TechType = { icon: IconType; label: string };
export const Techs = {
  // :{
  //   icon:,
  //   label:""
  // },
  sql: {
    icon: SiMysql,
    label: "MySQL",
  },
  prisma: {
    icon: SiPrisma,
    label: "Prisma",
  },
  supabase: {
    icon: SiSupabase,
    label: "Supabase",
  },
  node: {
    icon: FaNodeJs,
    label: "Node.js",
  },
  express: {
    icon: SiExpress,
    label: "Express.js",
  },
  python: {
    icon: FaPython,
    label: "Python",
  },
  html: {
    icon: TiHtml5,
    label: "HTML / CSS",
  },
  js: {
    icon: RiJavascriptFill,
    label: "JavaScript",
  },
  react: {
    icon: FaReact,
    label: "React",
  },
  ts: {
    icon: BiLogoTypescript,
    label: "TypeScript",
  },
  tailwind: {
    icon: RiTailwindCssFill,
    label: "Tailwind CSS",
  },
  api: {
    icon: TbApi,
    label: "Rest API",
  },
  mongo: {
    icon: SiMongodb,
    label: "MongoDB",
  },
  next: {
    icon: SiNextdotjs,
    label: "Next.JS",
  },
  postres: {
    icon: BiLogoPostgresql,
    label: "PostgreSQL",
  },
  go: {
    icon: FaGolang,
    label: "Go Lang",
  },
  java: {
    icon: FaJava,
    label: "Java",
  },
  flutter: {
    icon: FaFlutter,
    label: "Flutter",
  },
};
const Tech = ({
  tech,
  big = false,
}: {
  tech: keyof typeof Techs;
  big?: boolean;
}) => {
  const { icon: Icon, label } = Techs[tech];

  return (
    <div className="text-gray-400 flex flex-col items-center text-center space-y-2">
      <Icon className={cn("size-8 my-4", !big && "size-6 md:size-8 my-0")} />
      <span className="text-sm hidden md:inline">{label}</span>
    </div>
  );
};

export default Tech;
