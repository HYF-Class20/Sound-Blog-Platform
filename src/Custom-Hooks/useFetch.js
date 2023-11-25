import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = () => {
  const [mydata, setMyData] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("http://localhost:5010/audio")
        .then((res) => {
          console.log(res.data), setMyData(res.data.result);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);

  return { mydata, setMyData, setReady, ready };
};

export default useFetch;
