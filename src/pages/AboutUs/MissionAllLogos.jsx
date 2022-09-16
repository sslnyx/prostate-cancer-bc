import React from "react";

const MissionAllLogos = () => {
  const logos = [
    {
      web: "https://prostatecancersupport.ca/",
      imgSrc:
        "https://mcusercontent.com/a14f02861ddacdbff63d2e318/images/81551c0b-3d18-17de-7780-06d08357b541.png",
    },
    {
      web: "https://thefathersdayrun.ca",
      imgSrc:
        "https://mcusercontent.com/a14f02861ddacdbff63d2e318/images/0fc8c526-5ada-6278-2397-2ac12546d7b9.png",
    },
    {
      web: "https://ridetolive.ca",
      imgSrc:
        "https://mcusercontent.com/a14f02861ddacdbff63d2e318/images/baa98c66-d8db-5112-17bc-be2cb34baca9.png",
    },
    {
      web: "https://mcusercontent.com/a14f02861ddacdbff63d2e318/files/4d957556-6954-4c62-9c35-448a62a1ed10/Light_Up_in_Blue_Invitation_Poster_1_.pdf",
      imgSrc:
        "https://mcusercontent.com/a14f02861ddacdbff63d2e318/images/a5babbc6-bebf-5265-367f-32d9cb180168.png",
    },
    {
      web: "https://mcusercontent.com/a14f02861ddacdbff63d2e318/files/a146c6f6-c5ad-ba3b-4d20-c73a3294057e/Silent_Auction_Prize_Letter.pdf",
      imgSrc:
        "https://mcusercontent.com/a14f02861ddacdbff63d2e318/images/2dc6d31b-95ee-cb10-ea4a-8066e164558e.png",
    },
    {
      web: "https://pubsforprostate.ca",
      imgSrc:
        "https://mcusercontent.com/a14f02861ddacdbff63d2e318/images/461103f6-235c-1e06-cbda-d0cd421faec6.png",
    },
    {
      web: "https://itsasnowday.ca",
      imgSrc:
        "https://mcusercontent.com/a14f02861ddacdbff63d2e318/images/08a16c47-a795-4445-b1cd-9343f757c628.jpg",
    },
    {
      web: "https://parsforprostate.ca",
      imgSrc:
        "https://mcusercontent.com/a14f02861ddacdbff63d2e318/images/b8b70dca-019f-fa94-086a-9e708bad5fc3.png",
    },
    {
      web: "https://us02web.zoom.us/meeting/register/tZYqdumhqT0sGdBgJVvLIcuu3PeaKopCGEpo",
      imgSrc:
        "https://mcusercontent.com/a14f02861ddacdbff63d2e318/images/99e4a97a-38df-e5a4-1171-bb7d9b569028.png",
    },
    {
      web: "https://partnersinprostate.ca",
      imgSrc:
        "https://mcusercontent.com/a14f02861ddacdbff63d2e318/images/30de5150-308c-1ad5-fac2-47fd2ae5d18d.png",
    },
    {
      web: "https://advancedprostatecancer.ca",
      imgSrc:
        "https://mcusercontent.com/a14f02861ddacdbff63d2e318/images/4797670d-8fc4-78e6-832f-f8f4db03eff6.png",
    },
    {
      web: "https://us02web.zoom.us/meeting/register/tZArfu2gqjwuGdY6zmBXq_nfvQ-am7oeLEII",
      imgSrc:
        "https://mcusercontent.com/a14f02861ddacdbff63d2e318/images/5e9c50d4-d3e9-f0cc-d362-78feb7fd6f4f.png",
    },
    ,
    {
      web: "https://buttsinmotion.ca",
      imgSrc:
        "https://mcusercontent.com/a14f02861ddacdbff63d2e318/images/fc1212a6-9ffa-7309-86a8-a8981b182c7c.png",
    },
    {
      web: "https://prostatecancersupport.ca/resources/",
      imgSrc:
        "https://mcusercontent.com/a14f02861ddacdbff63d2e318/images/af3999ae-6f64-036d-5d10-afeb63edadc6.png",
    },
    ,
    {
      web: "https://ifiweretom.ca",
      imgSrc:
        "https://mcusercontent.com/a14f02861ddacdbff63d2e318/images/05aabf22-3486-6eaf-1721-43dfb5dded4e.png",
    },
  ];
  return (
    <div>
      <section>
        <div className="container">
          <div className="text-center mb-10">
            <i>A new era for prostate cancer support in Canada</i>
          </div>

          <div className="flex justify-center">
            <img src="/assets/img/logos/site-logo.svg" alt="pcfbc-logo" />
          </div>

          <div className="flex flex-wrap justify-center">
            {logos.map(({ web, imgSrc }) => (
              <div className="basis-36 px-3 flex items-center">
                <a href={web} className="outer-square w-full">
                  <div className="inner flex items-center">
                    <img src={imgSrc} />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionAllLogos;
