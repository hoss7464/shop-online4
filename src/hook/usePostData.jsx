import { useState } from "react";

const usePostData = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState("");

  const postData = (payload) => {
    setIsLoading(true);
    setError(null);

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch existing posts!");
        }
        return res.json();
      })
      .then((posts) => {
        const nextId =
          posts.length > 0
            ? (Math.max(...posts.map((post) => Number(post.id))) + 1).toString()
            : "1";

        const newPayload = { ...payload, id: nextId };

        return fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newPayload),
        });
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to post data!");
        }
        return response.json();
      })
      .then((result) => {
        setData(result);
      })
      .catch((err) => {
        setError(err.message || "Something went wrong!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { postData, data, isLoading, error };
};

export default usePostData;
