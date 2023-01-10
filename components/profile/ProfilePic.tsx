import Image from "next/image";
import React from "react";

interface ProfilePicParams {
  headshot: string;
}

const ProfilePic = ({ headshot }: ProfilePicParams) => {
  return (
    <Image
      src={headshot}
      alt="headshot"
      width="50"
      height="50"
      className=" w-16 h-16 object-cover rounded-full border-secondaryColor border-2"
    />
  );
};

export default ProfilePic;
