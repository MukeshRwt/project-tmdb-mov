import React, { useEffect, useState } from "react";
import BannerHome from "../components/BannerHome";
import Card from "../components/Card";
import { useSelector } from "react-redux";
import axios from "axios";
import useFetch from "../hooks/useFetch";
import HorizontalScrolling from "../components/HorizontalScrolling";

const Home = () => {
  const trendingData = useSelector((state) => state.moviesData.bannerDate);
  const { data: nowPlayingData } = useFetch("/movie/now_playing");
  const { data: topRated } = useFetch("/movie/top_rated");
  const { data: popularTvShowData } = useFetch("/movie/popular");

  return (
    <div>
      <BannerHome />
      <HorizontalScrolling data={trendingData} heading={"Trending"} trending={true} />
      <HorizontalScrolling data={nowPlayingData} heading={"Now Playing"} />
      <HorizontalScrolling data={topRated} heading={"Top Rated"} />
      <HorizontalScrolling data={popularTvShowData} heading={"Popular TV Show"} />
    </div>
  );
};

export default Home;
