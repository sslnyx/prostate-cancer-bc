// import React from 'react'

const BoardCard = (props) => {
  const {
    title,
    memberContact: { email, tel },
    memberDescription: { biography, profilePicture, professionalDesignation },
    memberTypes,
  } = props;
  return (
    <div className="relative mamber-card overflow-hidden h-[450px] md:min-w-[375px]">
      <div className="member-card-backdrop absolute w-full h-[20%] left-0 bottom-0 bg-gradient-to-t from-darkBlue to-transparent"></div>
      <div
        className={`content-card overflow-auto absolute w-full h-full flex items-start text-left text-white z-10 ${
          !professionalDesignation &&
          (memberTypes?.nodes[0].name === "Director" ||
            memberTypes?.nodes[0].name === "Medical Advisor")
            ? "top-[82%]"
            : "top-[73%]"
        }`}
      >
        <div className="flex flex-col w-full p-[22px]">
          <h2 className="text-white mb-5 text-2xl md:text-4xl">
            {title}
            <br />
            <small>
              {professionalDesignation}
              {memberTypes?.nodes[0].name === "Director" ||
              memberTypes?.nodes[0].name === "Medical Advisor"
                ? ""
                : " " + memberTypes?.nodes[0].name}
            </small>
          </h2>
          <div className="member-content opacity-0">
            <p>
              <a href={`mailto:${email}`}>{email}</a>
              <a href={`tel:${tel}`}>{tel}</a>
            </p>
            <p dangerouslySetInnerHTML={{ __html: biography }} />
          </div>
        </div>
      </div>
      <img
        className="h-full w-full object-cover"
        src={profilePicture.sourceUrl}
        alt={title}
      />
    </div>
  );
};

export default BoardCard;
