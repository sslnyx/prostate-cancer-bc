import React from "react";

const PostSectionTitle = ({ title }) => {
  return (
    <h2
      className="text-center mb-10 max-w-[550px] mx-auto"
      dangerouslySetInnerHTML={{ __html: title }}
    />
  );
};

export default PostSectionTitle;
