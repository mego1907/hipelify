import { CustomButton, ImageAndDescSection } from "../../components";
import TeamMembers from "../../components/TeamMembers";
import Header from "./components/Header";
import RoadMap from "./components/Roadmap";
import TokenomicsAllocations from "./components/TokenomicsAllocations";
import TokenomicsFundraising from "./components/TokenomicsFundraising";

const HypeX = () => {
  return (
    <div className="flex flex-col pt-10 md:pt-32">
      <Header />
      <div className="flex flex-col md:gap-28">
        <ImageAndDescSection
          right={
            <img src="/modern.png" alt="" className="w-[451px] h-[451px]" />
          }
          left={
            <div className="flex flex-col h-full text-left text-white md:p-20">
              <h2 className="md:text-[3.5rem] text-2xl font-bold md:leading-[3.5rem] md:text-left text-center">
                A Modern <br /> SocialFi Network <br /> Protocol
              </h2>
              <p className="mt-3 leading-7 md:text-lg text-desc">
                Hypelify is a decentralized ecosystem designed to transform
                social networking by leveraging the decentralization
                technologies infrastructure to give users full control over
                their data, content, and interactions, turning their social
                activities into tangible value.
              </p>
            </div>
          }
        />
        <ImageAndDescSection
          left={
            <div className="flex justify-end">
              <img
                src="/token.png"
                alt=""
                className="md:w-[490px] md:h-[490px]"
              />
            </div>
          }
          right={
            <div className="flex flex-col h-full text-left text-white md:p-20">
              <h2 className="md:text-[3.5rem] text-2xl font-bold md:leading-[3.5rem] md:text-left text-center">
                The Token
              </h2>
              <p className="mt-8 text-lg leading-7 text-desc">
                The token serves as the platform's value, utility,  and
                financial incentive mechanism. Investors will have the
                opportunity to stake the token and increase the yield of their
                investment, and token holders will be able to participate in the
                governance process.
              </p>
            </div>
          }
        />

        <ImageAndDescSection
          right={
            <img
              src="/how-it-works.png"
              alt=""
              className="md:w-[451px] md:h-[451px]"
            />
          }
          left={
            <div className="flex flex-col h-full text-left text-white md:p-20">
              <h2 className="md:text-[3.5rem] text-2xl font-bold md:leading-[3.5rem] md:text-left text-center">
                How It Works
              </h2>
              <div className="flex flex-col leading-[1.9rem] text-desc mt-5">
                <p>Web3 embodies the principle of</p>
                <ul>
                  <li className="">
                    <span className="text-lg font-semibold text-transparent bg-primary bg-clip-text">
                      01.
                    </span>
                    Read + Write + Own, and the HypeLify protocol adheres to
                    this by ensuring every user interaction is recorded on the
                    blockchain and owned by the user.
                  </li>
                  <li className="">
                    <span className="text-lg font-semibold text-transparent bg-primary bg-clip-text">
                      02.
                    </span>
                    Content is stored in decentralized storage solutions, with
                    ownership retained by the creator.
                  </li>
                  <li className="">
                    <span className="text-lg font-semibold text-transparent bg-primary bg-clip-text">
                      03.
                    </span>
                    Each user has a unique decentralized digital identity (DID).
                  </li>
                  <li className="">
                    <span className="text-lg font-semibold text-transparent bg-primary bg-clip-text">
                      04.
                    </span>
                    Users and businesses participate in protocol governance
                    through proposals and voting, powered by the native token
                    HypeX.{" "}
                  </li>
                </ul>
              </div>
            </div>
          }
        />

        <ImageAndDescSection
          left={
            <div className="flex justify-end">
              <img
                src="/token.png"
                alt=""
                className="md:w-[490px] md:h-[490px]"
              />
            </div>
          }
          right={
            <div className="flex flex-col h-full text-left text-white md:p-20">
              <h2 className="md:text-[3.5rem] text-2xl font-bold md:leading-[3.5rem] md:text-left text-center">
                Earn Returns
              </h2>
              <p className="mt-8 text-lg leading-7 text-desc">
                Content creators can tokenize their work and sell NFTs or
                receive tips in the platform's native token HypeX. Users earn
                tokens for active participation, such as posting, commenting,
                and moderating and Advertisers can reward users for viewing and
                engaging with ads.
              </p>
            </div>
          }
        />

        <div className="flex items-center justify-center">
          <CustomButton className="md:p-6 md:px-12">
            <span className="md:text-[1.6rem]">Whitepaper</span>
          </CustomButton>
        </div>

        <RoadMap />

        <div className="flex items-center justify-center">
          <CustomButton className="md:p-6 md:px-12">
            <span className="md:text-[1.6rem]">Learn More</span>
          </CustomButton>
        </div>

        <TokenomicsFundraising />

        <TokenomicsAllocations />

        <div className="flex flex-col md:mb-10 md:gap-16">
          <h3 className="font-bold text-center text-white md:text-6xl">
            Our Team
          </h3>
          <TeamMembers />
        </div>
      </div>
    </div>
  );
};

export default HypeX;
