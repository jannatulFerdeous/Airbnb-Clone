"use client";

import Image from "next/image";

import React from "react";
import dp from "../public/images/placeholder.png";

const Avatar = () => {
  return (
    <Image
      className="rounded-full"
      height="30"
      width="30"
      alt="Avatar"
      src={dp}
    ></Image>
  );
};

export default Avatar;
