import Image from "next/image";
import React from "react";

interface ProfilePicProps {
  headshot: string;
}

const ProfilePic = ({ headshot }: ProfilePicProps) => {
  return (
    <Image
      src={headshot}
      alt="headshot"
      width="50"
      height="50"
      className=" h-16 w-16 rounded-full border-2 border-secondaryColor object-cover"
    />
  );
};

export default ProfilePic;
