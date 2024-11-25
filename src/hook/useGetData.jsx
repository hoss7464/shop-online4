import { useState } from "react";

const useGetData = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getData = async (url) => {
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch data!");
      }
      const fetchedData = await response.json();
      setData(fetchedData);
      return fetchedData; 
    } catch (err) {
      setError(err.message || "Something went wrong!");
      throw err; 
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, error, getData };
};

export default useGetData;
