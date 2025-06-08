import React, { ReactNode } from "react";
const Skill = ({ icon, name }: { icon: ReactNode; name: string }) => {
    return (
        <div className="flex gap-3 items-center text-lg text-neutral-500 font-medium hover:text-white cursor-pointer transition-colors">
            {icon}
            <span>{name}</span>
        </div>
    );
};

export default Skill;
