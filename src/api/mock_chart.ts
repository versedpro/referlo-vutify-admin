export const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
};

// export function getLineChartOption({ expectedData, actualData } = {}) {
// eslint-disable-next-line
export function getLineChartOption(opt: any) {
  return {
    xAxis: {
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      boundaryGap: false,
      axisTick: {
        show: false
      }
    },
    grid: {
      left: 10,
      right: 10,
      bottom: 20,
      top: 30,
      containLabel: true
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross"
      },
      padding: [5, 10]
    },
    yAxis: {
      axisTick: {
        show: false
      }
    },
    legend: {
      data: ["expected", "actual"]
    },
    series: [
      {
        name: "expected",
        itemStyle: {
          normal: {
            color: "#FF005A",
            lineStyle: {
              color: "#FF005A",
              width: 2
            }
          }
        },
        smooth: true,
        type: "line",
        data: opt.expectedData,
        animationDuration: 2800,
        animationEasing: "cubicInOut"
      },
      {
        name: "actual",
        smooth: true,
        type: "line",
        itemStyle: {
          normal: {
            color: "#3888fa",
            lineStyle: {
              color: "#3888fa",
              width: 2
            },
            areaStyle: {
              color: "#f3f8ff"
            }
          }
        },
        data: opt.actualData,
        animationDuration: 2800,
        animationEasing: "quadraticOut"
      }
    ]
  };
}

// eslint-disable-next-line
export function getRaddarChartOption(animationDuration: { animationDuration: number }) {
  return {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    radar: {
      radius: "66%",
      center: ["50%", "42%"],
      splitNumber: 8,
      splitArea: {
        areaStyle: {
          color: "rgba(127,95,132,.3)",
          opacity: 1,
          shadowBlur: 45,
          shadowColor: "rgba(0,0,0,.5)",
          shadowOffsetX: 0,
          shadowOffsetY: 15
        }
      },
      indicator: [
        { name: "Sales", max: 10000 },
        { name: "Administration", max: 20000 },
        { name: "Information Techology", max: 20000 },
        { name: "Customer Support", max: 20000 },
        { name: "Development", max: 20000 },
        { name: "Marketing", max: 20000 }
      ]
    },
    legend: {
      left: "center",
      bottom: "10",
      data: ["Allocated Budget", "Expected Spending", "Actual Spending"]
    },
    series: [
      {
        type: "radar",
        symbolSize: 0,
        areaStyle: {
          normal: {
            shadowBlur: 13,
            shadowColor: "rgba(0,0,0,.2)",
            shadowOffsetX: 0,
            shadowOffsetY: 10,
            opacity: 1
          }
        },
        data: [
          {
            value: [5000, 7000, 12000, 11000, 15000, 14000],
            name: "Allocated Budget"
          },
          {
            value: [4000, 9000, 15000, 15000, 13000, 11000],
            name: "Expected Spending"
          },
          {
            value: [5500, 11000, 12000, 15000, 12000, 12000],
            name: "Actual Spending"
          }
        ],
        animationDuration
      }
    ]
  };
}

export function getPieChartOption() {
  return {
    title: {
      subtext: "個案",
      text: "1333",
      left: "center",
      top: "45%"
    },
    tooltip: {
      show: false,
      trigger: "none",
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
      // orient: "vertical",
      show: false,
      bottom: "0%",
      left: "center",
      data: ["努力中", "未成功個案", "已成功個案"]
    },
    series: [
      {
        name: "個案",
        type: "pie",
        radius: ["60%", "90%"],
        hoverAnimation: false,
        avoidLabelOverlap: true,
        label: {
          formatter: "{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%} ",
          backgroundColor: "#eee",
          borderColor: "#aaa",
          borderWidth: 3,
          borderRadius: 4,
          show: false
          // position: "center"
        },
        emphasis: {
          label: {
            show: false,
            fontSize: "30",
            fontWeight: "bold"
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 17, name: "努力中", backgroundColor: "#ff0000" },
          { value: 583, name: "未成功個案" },
          { value: 723, name: "已成功個案" }
        ]
      }
    ]
  };
}

// eslint-disable-next-line
export function getBarChartOption(animationDuration: any) {
  return {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      top: 10,
      left: "2%",
      right: "2%",
      bottom: "3%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        axisTick: {
          show: false
        }
      }
    ],
    series: [
      {
        name: "pageA",
        type: "bar",
        stack: "vistors",
        barWidth: "60%",
        data: [79, 52, 200, 334, 390, 330, 220],
        animationDuration
      },
      {
        name: "pageB",
        type: "bar",
        stack: "vistors",
        barWidth: "60%",
        data: [80, 52, 200, 334, 390, 330, 220],
        animationDuration
      },
      {
        name: "pageC",
        type: "bar",
        stack: "vistors",
        barWidth: "60%",
        data: [30, 52, 200, 334, 390, 330, 220],
        animationDuration
      }
    ]
  };
}
