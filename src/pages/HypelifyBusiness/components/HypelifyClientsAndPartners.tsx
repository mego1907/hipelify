const HypelifyClientsAndPartners = () => {
  return (
    <div className="py-10 md:py-20">
      <h2 className="md:text-[3.8rem] text-xl font-extrabold text-white text-center md:mb-16 mb-5">
        Hypelify Clients and Partners
      </h2>

      <div className="flex flex-wrap items-center justify-center p-6 py-20 border md:gap-x-28 gap-x-10 gap-y-10 md:gap-y-20 bg-white/5 rounded-3xl">
        {Array.from({ length: 10 }, (_, i) => (
          <div key={i} className="flex items-center justify-center">
            <img
              key={i}
              src={`/public/clientsAndParteners/${i + 1}.svg`}
              alt=""
              className="object-contain w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HypelifyClientsAndPartners;
