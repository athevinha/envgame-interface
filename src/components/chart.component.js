import Chart from "react-apexcharts";
import React, { Component } from "react";
export default class Charts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Doanh thu",
          data: [100, 80, 120, 200, 50, 500, 300, 100, 300],
        },
        {
          name: "Doanh thu đầu tư vào cây xanh",
          data: [80, 64, 96, 160, 40, 400, 240, 80, 240],
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
          colors: ["transparent"],
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
            text: "$ (thousands)",
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands";
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
