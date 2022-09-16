import { useState } from "react";

const CommunityCard = (props) => {
  const [hovering, setHovering] = useState(false);

  const {
    title,
    memberContact: { email, tel },
    memberDescription: { biography, profilePicture },
    memberTypes,
    committies: { committeeMembers },
  } = props;

  // console.log(committeeMembers);

  return (
    <div
      className="relative w-full h-full flex justify-center items-center"
      onMouseOver={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <img className="w-full" src={profilePicture.sourceUrl} alt={title} />
      <div
        className={`absolute w-full h-full left-0 top-0  bg-opacity-80 ${
          hovering ? "bg-darkBlue" : "bg-blue"
        }`}
      ></div>

      <div className="absolute flex justify-center text-center">
        {hovering ? (
          <ul>
            {committeeMembers?.map(({ title, name }) => (
              <li className="flex items-end">
                <h4 className="text-white">{name}</h4>

                {title ? (
                  <i className="text-white text-sm">
                    {", "}
                    {title}
                  </i>
                ) : (
                  ""
                )}
              </li>
            ))}
          </ul>
        ) : (
          <h2 className="text-white text-5xl max-w-[330px]">{title}</h2>
        )}
      </div>
    </div>
  );
};

export default CommunityCard;
