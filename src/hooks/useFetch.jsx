import { useState, useEffect } from "react";

//useName
// use
// return values isloading, data: cars, datat: rest

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const res = await fetch(url);
    const response = await res.json();
    setIsLoading(false);
    setData(response);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading };
};
