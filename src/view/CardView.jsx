import React from "react";

const CardView = ({ data }) => {
  // console.log(data);
  return (
    <div className="cardd d-flex flex-column rounded p-3 border gap-3">
      <div>
        <h3>{data.name}</h3>
        <h6>{data.symbol}</h6>
        <p>{Number(data.priceUsd).toFixed(2)}</p>
      </div>
      <p>
          <span>Günlük Değişim</span><br />
          <span
            className={
              Number(data.changePercent24Hr) >= 0
                ? "text-success"
                : "text-danger"
            }
          >
            %{Number(data.changePercent24Hr).toFixed(2)}
          </span>
        </p>
    </div>
  );
};

export default CardView;