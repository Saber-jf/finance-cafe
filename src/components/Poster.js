import poster from "../photo/poster.jpg";

function Poster() {
  return (
    <div>
      <div
        className="relative mx-auto h-[30vh] md:h-[50vh] w-full bg-no-repeat bg-cover"
        style={{ backgroundImage: `url('${poster}')` }}
      >
        <div className="w-full"></div>

        <div className="flex flex-col justify-end px-5 w-full h-full max-w-7xl mx-auto ">
          <div className="">
            <h1 className="text-[1.6rem] md:text-[3rem] font-bold text-white">
              WelCome.
            </h1>
            <p className=" text-[1.2rem] md:text-[2em] font-semibold text-white  ">
              Finance cafe'te 350'den fazla kripto parayı satın alın, saklayın
              ve alım-satım yapın
            </p>
            <div className=" relative w-full text-[15px] md:text-[20px] mt-8  ">
              <input
                placeholder="Search..."
                className=" p-4 mb-8 w-full h-10 md:h-14 rounded-full focus:outline-none"
              />

              <div className=" absolute top-0 right-0 w-28 search h-10 md:h-14 rounded-full flex items-center justify-center ">
                <h1 className="text-white font-semibold text-[15px] md:text-[20px]">
                  Search
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Poster;
