import React from "react";

interface ProfileInfoProps {
  name: string;
  title: string;
}

const ProfileInfo = ({ name, title }: ProfileInfoProps) => {
  return (
    <div className="flex flex-col">
      <span className=" text-left font-bold">{name}</span>
      <span className=" text-left text-sm font-medium text-gray-600">
        {title}
      </span>
    </div>
  );
};

export default ProfileInfo;
