import { CustomButton } from "../../../components";

const Header = () => {
  return (
    <div className="container flex items-center justify-center md:h-[80vh] h-screen">
      <div className="grid md:grid-cols-2">
        <div className="flex flex-col mb-5 md:mb-0">
          <h1 className="md:text-[4.5rem] text-white font-extrabold md:text-left text-center">
            HypeX: Hypelify's native token
          </h1>
          <div className="flex justify-center md:justify-start">
            <CustomButton className="p-4 px-6 mt-5">
              <span className="text-sm">Buy HyperX now</span>
            </CustomButton>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <img src="/header.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
