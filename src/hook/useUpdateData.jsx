import { useState } from "react";
//--------------------------------------------------------------------------------------------------
const useUpdateData = (url) => {
  //States : 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
//--------------------------------------------------------------------------------------------------
  const updateData = async (data) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Something wen wrong.");
      }

      const result = await response.json();
      return result;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { updateData, loading, error };
};

export default useUpdateData;
