import TeamMembers from "../../components/TeamMembers";
import { CustomButton, ImageAndDescSection, PageTitle } from "../../components";

const Team = () => {
  return (
    <div className="flex flex-col pt-10 md:pt-32">
      <PageTitle sub="Home &gt; Our Team" title="Our Team" />
      <TeamMembers />

      <div className="pt-10 md:pt-32 md:pb-20">
        <ImageAndDescSection
          left={
            <div className="flex flex-col gap-6 mb-6 text-white md:mb-0">
              <h2 className="md:text-[3.8rem] md:leading-[4rem] text-2xl font-bold md:text-left text-center ">
                Share your CV <br /> with us!
              </h2>
              <p className="text-base text-center md:text-2xl text-desc md:text-left">
                Join the dynamic Hypelify team! Share your CV at hr@hypelify.com
              </p>
              <div className="flex items-center justify-center md:blok">
                <CustomButton>Email CV</CustomButton>
              </div>
            </div>
          }
          right={
            <div className="flex justify-center">
              <img src="/Mask group (1).png" alt="" />
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Team;
