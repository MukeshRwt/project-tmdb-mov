import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

const BannerHome = () => {
  const bannerData = useSelector((state) => state.moviesData.bannerDate);
  const imageURL = useSelector((state) => state.moviesData.imageURL);
  const [currentImage, setCurrentImage] = useState(0);
  //   console.log("data", bannerData);
  //   console.log("image url", imageURL);
  const handleNext = () => {
    if (currentImage < bannerData.length - 1) {
      setCurrentImage((prev) => prev + 1);
    }
  };
  const handlePrev = () => {
    if (currentImage > 0) {
      setCurrentImage((prev) => prev - 1);
    }
  };
  useEffect(() => {
    const intervel = setInterval(() => {
      if (currentImage < bannerData.length - 1) {
        handleNext();
      } else {
        setCurrentImage(0);
      }
    }, 5000);

    return () => clearInterval(intervel);
  }, [imageURL, bannerData]);

  return (
    <section className="w-full h-full text-white overflow-hidden">
      <div className="flex  min-w-full max-h-[92vh]">
        {bannerData.map((data, index) => {
          return (
            <div
              key={data.id}
              className="min-w-full lg:min-h-full min-h-[450px] relative overflow-hidden group transition-all duration-500"
              style={{ transform: `translateX(-${currentImage * 100}%)` }}
            >
              <div className="w-full h-full">
                <img
                  src={imageURL + data.backdrop_path}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute hidden justify-between items-center  top-3 w-full h-full px-5 group-hover:flex ">
                {" "}
                <button className="bg-white text-black z-10 rounded-full p-1" onClick={handlePrev}>
                  <NavigateBeforeIcon sx={{ fontSize: 30 }} />
                </button>
                <button className="bg-white text-black z-10 rounded-full p-1 " onClick={handleNext}>
                  <NavigateNextIcon sx={{ fontSize: 30 }} />
                </button>
              </div>
              {/* <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent"></div> */}

              <div className="container">
                <div className="absolute mx-auto bottom-5 max-w-md px-3 flex flex-col gap-4 ">
                  <h2 className="font-bold text-2xl  lg:text-4xl">{data?.title || data?.name}</h2>
                  <p className=" text-clip line-clamp-3 my-2 ">{data.overview}</p>
                  <div className="flex items-center gap-4">
                    <p>Rating : {Number(data.vote_average).toFixed(1)}</p>
                    <span>|</span>
                    <p>View : {Number(data.popularity).toFixed(0)}</p>
                  </div>
                  <button className=" bg-white text-gray-900 font-display font-bold px-4 py-2 rounded-md hover:bg-gradient-to-l from-red-700 to-orange-500 w-fit transition-all hover:scale-105">
                    Play Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BannerHome;
