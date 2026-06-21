import React from "react";
import { IconType } from "react-icons";
import Link from "next/link";

const Social = ({ icon: Icon, link }: { icon: IconType; link: string }) => {
  return (
    <Link href={link} target="_blank">
      <div className="p-3 rounded-full border bg-white/1 backdrop-blur-lg transition-all hover:bg-white/5 cursor-pointer">
        {<Icon />}
      </div>
    </Link>
  );
};

export default Social;
