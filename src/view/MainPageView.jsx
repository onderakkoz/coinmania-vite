import { MdCurrencyBitcoin } from "react-icons/md";
import CardView from "../view/CardView";
import millify from "millify";
import LoadMoreController from "../controller/LoadMoreController";

const MainPageView = ({ popular, coins, navigate }) => {
  // console.log(popular);
  // console.log(coins);
  // console.log(navigate);

  return (
    <div className="container-xl mt-5 ">
      <h3 className="d-flex align-items-center gap-2">
        <p className="fs-1">
          <MdCurrencyBitcoin />
        </p>
        <p>Bitcoin'in Yükselişi</p>
      </h3>
      <p>
        Bitcoin, kripto para dünyasında büyük bir çıkış yakaladı. Son birkaç
        haftada değeri hızla arttı ve birçok yatırımcı tarafından ilgiyle takip
        ediliyor. Peki, bu yükseliş ne anlama geliyor?
      </p>

      {/**populerleri listele */}
      <div className=" popular d-flex flex-wrap justify-content-evenly gap-3 mb-5">
        {popular?.map((i) => (
          <CardView key={i.id} data={i} />
        ))}
      </div>

      <table className="table table-dark">
        <thead>
          <tr>
            <th>#</th>
            <th className="cursor: pointer">Coin</th>
            <th>Fiyat</th>
            <th>Market Hacmi</th>
            <th>Değişim (24s)</th>
            <th>% Değişim (24s)</th>
          </tr>
        </thead>
        <tbody>
          {coins ? (
            coins.map((coin, id) => (
              <tr key={id} onClick={() => navigate(`/coin/${coin.id}`)}>
                <td>{id + 1}</td>
                <td>
                  <span className="text-warning text-nowrap fw-bold me-2">
                    {coin.symbol}
                  </span>{" "}
                  <span>{coin.name}</span>
                </td>
                <td>${millify(Number(coin.priceUsd))}</td>
                <td>{millify(coin.marketCapUsd)}</td>
                <td>{millify(coin.volumeUsd24Hr)}</td>
                <td
                  className={
                    Number(coin.changePercent24Hr) >= 0
                      ? "text-success"
                      : "text-danger"
                  }
                >
                  {millify(Number(coin.changePercent24Hr).toFixed(2))}
                </td>
              </tr>
            ))
          ) : (
            <p>Yükleniyor...</p>
          )}
        </tbody>
      </table>

      <LoadMoreController />
    </div>
  );
};

export default MainPageView;