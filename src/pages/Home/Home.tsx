import { ImageAndDescSection } from "../../components";

const Home = () => {
  return (
    <div className="flex flex-col pt-32">
      {/* <Header /> */}
      <div className="flex flex-col text-center text-white md:h-[70vh] h-[40vh] items-center justify-center">
        <h2 className="md:text-[5.1rem] font-semibold text-xl mb-12 uppercase md:leading-[6rem]">
          The Social Network of <br /> Value Creation
        </h2>
      </div>

      <div className="flex flex-col md:gap-28">
        <ImageAndDescSection
          right={
            <img
              src="/modern.png"
              alt=""
              className="md:w-[451px] md:h-[451px]"
            />
          }
          left={
            <div className="flex flex-col h-full text-left text-white md:p-20">
              <h2 className="md:text-[3.5rem] font-bold md:leading-[3.5rem] text-xl md:text-left text-center md:mb-0 mb-5">
                A Modern <br /> SocialFi Network <br /> Protocol
              </h2>
              <p className="text-lg leading-7 text-center md:mt-3 text-desc md:text-left">
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
            <div className="flex flex-col justify-center h-full text-left text-white md:pl-0 md:p-20 md:pr-48">
              <h2 className="md:text-[3.5rem] font-bold md:leading-[3.5rem] text-xl md:text-left text-center">
                The Token
              </h2>
              <p className="mt-8 text-base leading-7 text-center md:text-lg md:text-left text-desc">
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
            <div className="flex flex-col h-full py-10 text-white md:text-left md:p-20 md:py-20">
              <h2 className="md:text-[3.5rem] font-bold md:text-left text-center md:leading-[3.5rem]">
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
            <div className="flex flex-col justify-center h-full text-left text-white md:pl-0 md:p-20 md:pr-48">
              <h2 className="md:text-[3.5rem] text-xl font-bold md:leading-[3.5rem] md:textleft text-center">
                Earn Returns
              </h2>
              <p className="mt-8 text-base leading-7 md:text-lg text-desc">
                Content creators can tokenize their work and sell NFTs or
                receive tips in the platform's native token HypeX. Users earn
                tokens for active participation, such as posting, commenting,
                and moderating and Advertisers can reward users for viewing and
                engaging with ads.
              </p>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Home;
