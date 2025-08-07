import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import Card from "../components/Card";

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const imageURL = useSelector((state) => state.moviesData.imageURL);
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q")?.trim();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!query) return;
      setLoading(true);
      try {
        const response = await axios.get(`/search/multi?query=${encodeURIComponent(query)}`);
        setResults(response.data.results || []);
      } catch (error) {
        console.error("Search error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [query]);

  const handleClearSearch = () => {
    navigate("/"); // remove the query param
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">
          {query ? `Search results for "${query}"` : "No search query provided"}
        </h2>
        {query && (
          <button
            onClick={handleClearSearch}
            className="ml-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Clear Search
          </button>
        )}
      </div>

      {loading ? (
        <p className="text-gray-500 text-lg">Loading...</p>
      ) : results.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {results
            .filter((item) => item.poster_path)
            .map((item, index) => (
              <Card
                key={item.id}
                data={item}
                index={index + 1}
                trending={false}
                params={item.media_type || "movie"}
              />
            ))}
        </div>
      ) : (
        !loading && query && <p className="text-gray-500 text-lg">No results found.</p>
      )}
    </div>
  );
};

export default Search;
