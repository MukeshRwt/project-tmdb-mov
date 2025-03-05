import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

function ExplorePage() {
  const params = useParams();
  const [pageNo, setPageNo] = useState(1);
  const [data, setData] = useState([]);
  const [totalPageNo, setTotalPageNo] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true); // ✅ Track if more pages exist

  // console.log(data);

  // ✅ Reset data & pageNo when category changes
  useEffect(() => {
    setData([]);
    setPageNo(1);
    setHasMore(true); // Reset "has more" flag
  }, [params.explore]);

  const fetchData = async () => {
    if (isLoading || !hasMore) return; // Prevent duplicate calls

    setIsLoading(true);
    try {
      const response = await axios.get(`/discover/${params.explore}`, {
        params: { page: pageNo },
      });

      if (response.data.results.length === 0 || pageNo >= response.data.total_pages) {
        setHasMore(false); // No more pages left
      }

      setData((prev) =>
        pageNo === 1 ? response.data.results : [...prev, ...response.data.results]
      );
      setTotalPageNo(response.data.total_pages);
    } catch (error) {
      console.log("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [pageNo, params.explore]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50 && hasMore) {
        setPageNo((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore]);

  return (
    <div className="container">
      <h2 className="capitalize text-lg lg:text-xl font-semibold my-3">
        Popular {params.explore} show
      </h2>
      <div className="container flex flex-wrap gap-4 justify-center">
        {data.length === 0 && !isLoading ? (
          <p className="text-center text-gray-500">No data available</p>
        ) : (
          data.map((item, index) => <Card data={item} key={index} params={params.explore} />)
        )}
      </div>

      {/* ✅ Show loading state */}
      {isLoading && <p className="text-center text-blue-500 font-semibold my-4">Loading...</p>}

      {/* ✅ Show when all pages are loaded */}
      {!isLoading && !hasMore && <p className="text-center text-gray-400 my-4">No more results</p>}
    </div>
  );
}

export default ExplorePage;
