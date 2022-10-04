import React from "react";

const PostSectionTitle = ({ title, titleWidth }) => {
  return (
    <h2
      className={`text-center text-5xl mb-10 ${
        titleWidth ? titleWidth : "max-w-[550px]"
      }  mx-auto`}
      dangerouslySetInnerHTML={{ __html: title }}
    />
  );
};

export default PostSectionTitle;
