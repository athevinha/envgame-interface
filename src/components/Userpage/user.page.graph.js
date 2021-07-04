import Chart from "react-apexcharts";
import React, { Component } from "react";
export default class UserPageGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Số tiền trồng cây của bạn",
          data: this.props.earned_money,
        },
        // {
        //   name: "Doanh thu đầu tư vào cây xanh",
        //   data: [80, 64, 96, 160, 40, 400, 240, 80, 240],
        // },
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
            "Nov",
            "Dec",
          ],
        },
        yaxis: {
          title: {
            text: "VNĐ (thousand)",
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
