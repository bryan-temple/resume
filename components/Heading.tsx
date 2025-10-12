import React from "react";
import { FaHashtag } from "react-icons/fa";

type HeadingProps = {
  title: string;
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
};

const Heading: React.FC<HeadingProps> = ({ title, level = 'h3' }) => {
  const Tag = level;
  return (
    <Tag className="flex items-center text-xl font-semibold mb-12">
      {title && (
        <>
          <FaHashtag className="mr-4 text-[#4F4F4F]" size={18} />
          {title}
        </>
      )}
    </Tag>
  );
};

export default Heading;
