import React, { useEffect, useState } from "react";
import MainPageView from "../view/MainPageView";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";

const MainPageController = () => {
  const [coins, setCoins] = useState([]);
  const [popular, setPopular] = useState(null);
  const [params] = useSearchParams();
  const page = params.get("page");
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`/assets?limit=15&offset=${page ? page : 1}`)
      .then((res) => {
        setCoins(coins.concat(res.data.data));

        if (!popular) {
          //gelen cevaptan 4 tanesini slice ile bolup pupulara verdik.
          setPopular(res.data.data.slice(0, 4));
        }
      })
      .catch((err) => console.log(err));
  }, [params]);
  // console.log(coins);
  // console.log(popular);

  return <MainPageView popular={popular} coins={coins} navigate={navigate} />;
};

export default MainPageController;