import { CustomButton } from "../../../components";

const Header = () => {
  return (
    <div className="container flex items-center justify-center h-[80vh]">
      <div className="grid grid-cols-2">
        <div className="flex flex-col">
          <h1 className="md:text-[4.5rem] text-white font-extrabold">
            HypeX: Hypelify's native token
          </h1>
          <div>
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
