import Chart from "react-apexcharts";
import React, { Component } from "react";
export default class Charts extends Component {
  random_x2y = (x, y) => {
    return Math.floor(Math.random() * y) + x;
  };
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Doanh thu",
          data: [
            this.random_x2y(400, 700),
            this.random_x2y(400, 700),
            this.random_x2y(400, 700),
            this.random_x2y(400, 700),
            this.random_x2y(400, 700),
            this.random_x2y(400, 700),
            this.random_x2y(400, 700),
            this.random_x2y(400, 700),
            this.random_x2y(400, 700),
          ],
        },
        {
          name: "Doanh thu đầu tư vào cây xanh",
          data: [
            (this.random_x2y(100, 480) * 80) / 100,
            (this.random_x2y(100, 480) * 80) / 100,
            (this.random_x2y(100, 480) * 80) / 100,
            (this.random_x2y(100, 480) * 80) / 100,
            (this.random_x2y(100, 480) * 80) / 100,
            (this.random_x2y(100, 480) * 80) / 100,
            (this.random_x2y(100, 480) * 80) / 100,
            (this.random_x2y(100, 480) * 80) / 100,
            (this.random_x2y(100, 480) * 80) / 100,
          ],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["black"],
        },
        xaxis: {
          categories: [
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
          ],
        },
        yaxis: {
          title: {
            text: "VNĐ (nghìn)",
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val * 1000 + " VNĐ";
            },
          },
        },
      },
    };
  }
  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="bar"
        height={350}
      />
    );
  }
}
