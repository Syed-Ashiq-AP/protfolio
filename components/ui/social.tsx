import React from "react";
import { IconType } from "react-icons";
import Link from "next/link";

const Social = ({
  icon: Icon,
  label,
  link,
}: {
  icon?: IconType;
  label?: React.ReactNode;
  link: string;
}) => {
  return (
    <Link href={link} target="_blank">
      <div className="p-3 rounded-full border bg-white/1 backdrop-blur-lg transition-all hover:bg-white/5 cursor-pointer">
        {Icon && <Icon />}
        {label}
      </div>
    </Link>
  );
};

export default Social;
