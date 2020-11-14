import { ReferloChartInfo } from "@/types"; // Our interface

export function getPieChartOption(referlo: ReferloChartInfo): unknown {
  const options = {
    color: ["grey", "#001e2f", "#dcb456"],
    title: {
      // show: false,
      text: referlo.title.text,
      textStyle: {
        color: "#001e2f",
        fontSize: 14,
        fontWeight: "bold"
      },
      subtext: referlo.title.subtext,
      subtextStyle: {
        color: "#001e2f",
        fontSize: 14,
        fontWeight: "bold"
      },
      left: "center",
      top: "40%"
    },
    tooltip: {
      show: false,
      trigger: "none",
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
      show: false,
      orient: "horizontal",
      bottom: "10",
      left: "center",
      itemGap: 50,
      selectedMode: false,
      // backgroundColor: "red",
      formatter: function (name: string) {
        switch (name) {
          case "completed":
            return referlo.legend.completed;
          case "referred":
            return referlo.legend.referred;
          case "wip":
            return referlo.legend.wip;
        }
        return name;
      },
      data: [
        {
          name: "completed",
          icon: "roundRect",
          textStyle: {
            color: "#dcb456",
            fontSize: 14,
            fontWeight: "bold"
          }
        },
        {
          name: "wip",
          icon: "roundRect",
          textStyle: {
            color: "#001e2f",
            fontSize: 14,
            fontWeight: "bold"
          }
        },
        {
          name: "referred",
          icon: "roundRect",
          textStyle: {
            color: "grey",
            fontSize: 14,
            fontWeight: "bold"
          }
        }
      ]
    },
    series: [
      {
        name: "referlo",
        type: "pie",
        radius: ["70%", "100%"],
        center: ["50%", "50%"],
        hoverAnimation: false,
        avoidLabelOverlap: true,
        label: {
          // formatter: "{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%} ",
          // backgroundColor: "#eee",
          borderColor: "#f00",
          borderWidth: 1,
          // borderRadius: 4,
          show: false,
          position: "outside"
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
          { value: referlo.data.referred, name: "referred" },
          { value: referlo.data.wip, name: "wip" },
          { value: referlo.data.completed, name: "completed" }
        ]
      }
    ]
  };

  return options;
}

export const ads = [
  {
    src: "/img/products/csl1.png"
  },
  {
    src: "/img/products/csl2.png"
  }
];

export const person = {
  name: "Joe",
  avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
  memberSince: 2020,
  points: 10000,
  score: [17, 583, 723]
};
