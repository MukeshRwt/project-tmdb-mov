import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";

const Card = ({ data, trending, index, params }) => {
  const imageURL = useSelector((state) => state.moviesData.imageURL);
  // console.log("data", data);

  return (
    <>
      <Link key={data.id} to={`/${data.media_type || params}/${data.id}`}>
        <div className="max-w-[250px] min-w-[230px] rounded-lg overflow-hidden shadow-lg relative">
          <img className="w-full max-h-80" src={imageURL + data.poster_path} alt="" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-clip line-clamp-1">
              {data.title || data.name}
            </div>
            <p className="text-gray-700 text-base text-clip line-clamp-3">
              {moment(data?.release_date || data?.first_air_date).format("MMMM Do YYYY")}
            </p>
          </div>
          {trending && (
            <div className="absolute top-3 px-5 backdrop-blur rounded-r-full text-white py-1 text-xl bg-black/60">
              #{index} Trending
            </div>
          )}
        </div>
      </Link>
    </>
  );
};

export default Card;
