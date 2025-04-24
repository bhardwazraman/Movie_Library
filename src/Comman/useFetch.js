import React, { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url = "") => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(url, {
        headers: {
          "x-rapidapi-host": "imdb236.p.rapidapi.com",
          "x-rapidapi-key":
            "f1df57b17emsha659ee5b85e2348p1bfb43jsn7a2ff0142259",
        },
      });

      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }
      const result = await response.data;
      console.log("result", result);
      setData(result);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error };
};
export default useFetch;
