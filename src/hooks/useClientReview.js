import { useEffect, useState } from "react";

const useClientReview = () => {
  const [clientReview, setClientReview] = useState([]);
  useEffect(() => {
    fetch("clientReview.json")
      .then((res) => res.json())
      .then((data) => setClientReview(data));
    // console.log(clientReview);
  }, []);

  return [clientReview, setClientReview];
};

export default useClientReview;
