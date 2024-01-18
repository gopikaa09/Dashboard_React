import axios from "axios";
import { useEffect, useState } from "react";

const useApicall = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [url]);
  // console.log(data);
  return { data };
};
export default useApicall;
