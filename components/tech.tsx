import { IconType } from "react-icons";
import { FaFlutter, FaGolang, FaJava, FaReact } from "react-icons/fa6";
import { SiMongodb, SiNextdotjs } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";

export type TechType = { icon: IconType; label: string };
export const Techs = {
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
const Tech = ({ tech }: { tech: keyof typeof Techs }) => {
  const { icon: Icon, label } = Techs[tech];

  return (
    <div className="text-gray-400 flex flex-col items-center text-center space-y-2">
      <Icon size={24} />
      <span className="text-sm">{label}</span>
    </div>
  );
};

export default Tech;
