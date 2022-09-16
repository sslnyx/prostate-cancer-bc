import React from "react";

const TeamCard = (props) => {
  //   console.log(props);

  const {
    title,
    memberContact: { email, tel },
    memberDescription: { biography, profilePicture },
    memberTypes,
  } = props;
  
  return (
    <div className="flex flex-wrap lg:-mx-5 w-full mb-10">
      <div className="basis-full lg:basis-1/2 lg:px-5 h-[380px] mb-5 lg:mb-0">
        {profilePicture ? (
          <img
            className="h-full w-full object-cover"
            src={profilePicture.sourceUrl}
          />
        ) : (
          ""
        )}
      </div>
      <div className="basis-full lg:basis-1/2 lg:px-5 overflow-y-scroll max-h-[380px]">
        <h3>{title}</h3>
        <p>{memberTypes.nodes[0].name}</p>
        <p>
          {email ? (
            <>
              <span className="min-w-[1.5rem] inline-block font-bold text-darkBlue">E.</span>
              <a className="text-blue font-bold" href={`mailto:${email}`}>{email}</a>
            </>
          ) : (
            ""
          )}
          {tel ? (
            <>
              <br />

              <span className="min-w-[1.5rem] inline-block font-bold text-darkBlue">T.</span>
              <a className="text-blue font-bold" href={`tel:${tel}`}>{tel}</a>
            </>
          ) : (
            ""
          )}
        </p>
        <p className="text-sm">{biography}</p>
      </div>
    </div>
  );
};

export default TeamCard;
