import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Image
      width={40}
      height={40}
      src={"/logo/logo.webp"}
      alt={"SA"}
      className=" size-10"
    />
  );
};

export default Logo;
