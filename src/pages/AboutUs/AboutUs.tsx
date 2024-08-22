import { ImageAndDescSection, PageTitle } from "../../components";
import HeadQuarters from "./Components/HeadQuarters";
import Publications from "./Components/Publications";

const AboutUs = () => {
  return (
    <div className="flex flex-col pt-10 md:pt-32">
      <PageTitle title="About Us" sub="Home &gt; About Us" />

      <ImageAndDescSection
        left={
          <div className="flex items-center justify-start">
            <img src="/vision.png" alt="" />
          </div>
        }
        right={
          <div className="flex flex-col gap-10 text-white">
            <div className="flex flex-col py-10 md:py-0">
              <h3 className="md:text-[5rem] text-2xl md:text-left text-center font-bold mb-3 md:mb-10">
                Vision
              </h3>
              <p className="text-base md:text-2xl">
                At Hypelify we envision a digital haven where people’s voices
                are amplified. The all-in-one platform cultivates a stellar
                space to connect, create and conquer.
              </p>
            </div>
            <div className="flex flex-col">
              <h3 className="md:text-[5rem] text-2xl md:text-left text-center font-bold mb-3 md:mb-10">
                Mission
              </h3>
              <p className="text-base md:text-2xl">
                Our mission is to empower individuals and businesses through
                seamless social experiences. We open our community up to each
                other and to a world of opportunities.
              </p>
            </div>
          </div>
        }
      />

      <HeadQuarters />

      <Publications />
    </div>
  );
};

export default AboutUs;
