<template>
  <div id="china_map" style="width: 100%; height: 100%; background-color: pink"></div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";
import chinaMap from "./china.json";
// import echarts from 'echarts'
// import './china.js'

import { onMounted } from "vue";

//echart data
const dataList = [
  {
    name: "南海诸岛",
    value: 100,
  },
  {
    name: "北京",
    value: 540,
  },
  {
    name: "天津",
    value: 540,
  },
  {
    name: "上海",
    value: 540,
  },
];

onMounted(() => {
  setTimeout(() => {
    initEchartMap();
  }, 300);
});

//初始化中国地图
function initEchartMap() {
  setTimeout(() => {
    let mapDiv = document.getElementById("china_map");
    let myChart = echarts.init(mapDiv);
    // @ts-ignore
    echarts.registerMap("china", chinaMap);
    let option = {
      tooltip: {
        triggerOn: "mousemove", //mousemove、click
        padding: 8,
        //   borderWidth: 100,
        //   borderColor: '#409eff',
        backgroundColor: "rgba(255,255,255,0.7)",
        textStyle: {
          color: "#000000",
          fontSize: 36,
        },
        formatter: function (e: any) {
          let data = e.data;
          return "数量：" + data.value;
        },
      },
      legend: {
        // 添加图例配置
        show: true, // 是否显示图例，默认为true
        left: "right", // 图例的位置，可以设置成 'left'、'right'、'center'、'top'、'bottom' 等位置
        data: ["突发事件"], // 图例数据，对应series中的name
        textStyle: {
          // 文字样式配置
          color: "#000000", // 文字颜色
          fontSize: 14, // 文字大小
        },
        selectedMode: "single", // 选中模式，可选值：single、multiple，默认为single，即只有一个系列被选中时才会显示图例。如果为multiple，则当有多个系列被选中时才会显示图例。



      },
      visualMap: {
        show: false,
        left: 26,
        bottom: 40,
        showLabel: false,
        pieces: [
          {
            gte: 100,
            label: ">= 1000",
            color: "#eeeeee",
          },
          {
            gte: 500,
            lt: 999,
            label: "500 - 999",
            color: "#3c57ce",
          },
          {
            gte: 100,
            lt: 499,
            label: "100 - 499",
            color: "#6f83db",
          },
          {
            gte: 10,
            lt: 99,
            label: "10 - 99",
            color: "#9face7",
          },
          {
            lt: 10,
            label: "<10",
            color: "#bcc5ee",
          },
        ],

        // min: 50,
        // max: 3000,
        // text: [50, 3000],
        // realtime: true,
        // calculable: true,
        // inRange: {
        //   color: ['#aac8fd', '#8db3fd', '#2e6bff']
        // },
        // orient: 'horizontal'  // 设置为横向展示
      },
      geo: {
        map: "china",
        scaleLimit: {
          min: 1,
          max: 2,
        },
        bottom: 10,
        zoom: 1.9,
        geoIndex: 1,
        aspectScale: 0.75, //长宽比
        label: {
          normal: {
            show: false,
            fontSize: "14",
            color: "rgba(255, 255, 255, 1.0)",
          },
        },
        itemStyle: {
          normal: {
            shadowBlur: 1,
            borderColor: "#7ce4fc",
            borderWidth: 0,
          },
          // emphasis: {
          // 	areaColor: "#f2d5ad",
          // 	shadowOffsetX: 0,
          // 	shadowOffsetY: 0,
          // 	borderWidth: 0
          // }
        },
        roam: false, // 允许拖拽
        // selectedMode: 'multiple', // 选中模式，表示是否支持多个选中，默认关闭，支持布尔值和字符串，字符串取值可选'single'表示单选，或者'multiple'表示多选。
        silent:true,    //图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。
      },
      series: [
        {
          name: "突发事件",
          type: "map",
          mapType: "china",
          geoIndex: 0,
          data: dataList,
          markPoint: {
            type: "circle", // 标记点的类型，可选 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
            symbolSize: 10, // 标记点的大小
            // itemStyle: { // 标记点的样式
            //   color: '#ff0000', // 标记点的颜色
            //   borderWidth: 1, // 标记点的边框宽度
            //   borderColor: '#ff0000' // 标记点的边框颜色
            // },
            // label: { // 标记点的标签样式
            //   show: false, // 是否显示标签
            //   textStyle: { // 标签的样式
            //     color: '#ff0000', // 标签的颜色
            //     fontSize: 12 // 标签的字体大小
            //   }
            // },
            data: [
              // 标记点的数据，每个数据代表一个标记点
              {
                // name: '标记点1', // 标记点的名称，可选
                coord: [116.274822, 39.947641], // 标记点的坐标，格式为[经度, 纬度]
                value: 10, // 标记点的值，用于图例筛选
                itemStyle: {
                  // 标记点的样式，同上
                  color: "#2a69ff",
                },
                label: {
                  // 同上
                  show: false,
                  textStyle: {
                    color: "#ff0000",
                    fontSize: 12,
                  },
                },
              },
              // ...其他标记点数据
            ],
          },
        },
      ],
    };
    setTimeout(() => {
      console.log("map123", document.getElementById("china_map"));

      myChart.setOption(option);
    }, 300);
  }, 2000);
}




</script>
