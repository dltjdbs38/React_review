import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function useFetch(url) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, [url]);
  return data;
}

export default useFetch;
