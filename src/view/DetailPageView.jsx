import millify from "millify";
import { Chart as ChartJS } from "chart.js/auto";
import { Line, Bar } from "react-chartjs-2";

const DetailPageView = ({ model, coin }) => {
  //   console.log(model);
  //   console.log(coin);
  return (
    <div>
      <h3 className="text-center">
        <span className="me-3 fs-4 font-bold">{model.coin?.name}</span>
        <span className="fs-2 text-warning">{model.coin?.symbol}</span>
      </h3>

      <div className="row d-flex m-2">
        <section className=" col-md-4 col-lg-3 d-flex flex-column gap-5 p-5 p-md-4 ">
          {model?.infoFields?.map((info, i) => (
            <div
              key={i}
              className=" card-dark border shadow-lg text-center p-3 rounded-2"
            >
              <span className="fs-3">{info.icon}</span>
              <h3 className="text-nowrap mt-4 mb-4">{info.label}</h3>
              <p className="fw-bold">{millify(Number(info.value))}</p>
            </div>
          ))}
        </section>

        <section className="col-md-8 col-lg-9 mt-4">
          <Line className="mb-5" data={model.chartData} />
          <Bar data={model.chartData} />
        </section>
      </div>
    </div>
  );
};

export default DetailPageView;