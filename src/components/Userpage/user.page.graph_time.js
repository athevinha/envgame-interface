import Chart from "react-apexcharts";
import React, { Component } from "react";
export default class UserPageGraphTime extends Component {
  GameAndTime = (time_gaming) => {
    let time = [];
    let game = [];

    for (let i = 0; i < time_gaming.length; i++) {
      time[i] = Math.round((time_gaming[i].time * 100) / 1000 / 60) / 100;
      game[i] = time_gaming[i].title;
    }
    return { time, game };
  };
  constructor(props) {
    super(props);
    const time_gaming = this.GameAndTime(this.props.time_gaming);
    this.state = {
      bar: {
        series: [
          {
            name: "Thời gian chơi game",
            data: time_gaming.time,
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
            categories: time_gaming.game,
          },
          yaxis: {
            title: {
              text: "Thời gian (phút)",
            },
          },
          fill: {
            opacity: 1,
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return val * 1000 + " Phút";
              },
            },
          },
        },
      },
      area: {
        zoom: {
          enabled: true,
          type: "x",
          autoScaleXaxis: true,
          zoomedArea: {
            fill: {
              color: "#90CAF9",
              opacity: 0.4,
            },
            stroke: {
              color: "#0D47A1",
              opacity: 0.4,
              width: 1,
            },
          },
        },
        series: [
          {
            name: "Thời gian chơi game",
            data: time_gaming.time,
          },
          // {
          //   name: "Doanh thu đầu tư vào cây xanh",
          //   data: [80, 64, 96, 160, 40, 400, 240, 80, 240],
          // },
        ],
        options: {
          chart: {
            height: 350,
            type: "area",
            zoom: {
              enabled: true,
              autoScaleYaxis: true,
              zoomX: "Racer",
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
          },
          grid: {
            row: {
              colors: ["transparent"], // takes an array which will be repeated on columns
              opacity: 0.5,
            },
          },

          fill: {
            type: "gradient",
            gradient: {
              shade: "dark",
              gradientToColors: ["rgb(255, 25, 132)"],
              shadeIntensity: 1,
              type: "horizontal",
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100, 100, 100, 100, 100, 100],
            },
          },
          markers: {
            size: 1,
            hover: {
              size: 2,
            },
          },

          tooltip: {
            y: {
              formatter: function (val) {
                return val + " Phút";
              },
            },
          },
          xaxis: {
            categories: time_gaming.game,
          },
        },
      },
    };
  }
  render() {
    return (
      //   <Chart
      //     options={this.state.bar.options}
      //     series={this.state.bar.series}
      //     type="bar"
      //     height={350}
      //   />
      //   <Chart
      //     options={this.state.donut.options}
      //     series={this.state.donut.series}
      //     type="pie"
      //     width={500}
      //   />
      //   <Chart
      //     options={this.state.line_charts.options}
      //     series={this.state.line_charts.series}
      //     height={350}
      //   />
      <Chart
        options={this.state.area.options}
        series={this.state.area.series}
        type="area"
        height={350}
      />
    );
  }
}
