<template>
    <div id="china_map_box">
        <div style="font-size: 52px;color: #FFC000;height:10%;">地区分布</div>
        <div style="height: 90%;display: flex;">
            <div style="width: 30%;height: 35%;border: 1px #0e3cb0 solid;margin-top:10%;display: flex;
                flex-direction: column;justify-content: space-around;padding:1%;">
                <div style="font-size: 20px;color: #fff;">设计产能（万吨）</div>
                <div style="font-size: 25px;color: #fff;">
                    <img src="./bluebox.png" alt="" style="transform: scale(1.5);margin-right: 20px; width: 25px;height: 20px;">
                    砂石骨料
                </div>
                <div style="font-size: 20px;color: #fff;">
                    <img src="./yellowbox.png" alt="" style="transform: scale(1.5);margin-right: 20px; width: 25px;height: 20px;">
                    建材混凝土
                </div>
            </div>
            <div id="china_map"></div>
        </div>

    </div>
</template>
<script>
import * as echarts from 'echarts'
import './china.js'

export default {
    props: {
        chartData: {
            type: Object,
            default: {}
        }
    },
    data() {
        return {
            //echart data
            dataList: [
                {
                    name: '南海诸岛',
                    value: 100
                },
                {
                    name: '北京',
                    value: 540
                },
                {
                    name: '天津',
                    value: 540
                },
                {
                    name: '上海',
                    value: 540
                },
                {
                    name: '重庆',
                    value: 540
                },
                {
                    name: '河北',
                    value: 540
                },
                {
                    name: '河南',
                    value: 540
                },
                {
                    name: '云南',
                    value: 540
                },
                {
                    name: '辽宁',
                    value: 540
                },
                {
                    name: '黑龙江',
                    value: 540
                },
                {
                    name: '湖南',
                    value: 540
                },
                {
                    name: '安徽',
                    value: 540
                },
                {
                    name: '山东',
                    value: 540
                },
                {
                    name: '新疆',
                    value: 540
                },
                {
                    name: '江苏',
                    value: 540
                },
                {
                    name: '浙江',
                    value: 540
                },
                {
                    name: '江西',
                    value: 540
                },
                {
                    name: '湖北',
                    value: 540
                },
                {
                    name: '广西',
                    value: 540
                },
                {
                    name: '甘肃',
                    value: 540
                },
                {
                    name: '山西',
                    value: 540
                },
                {
                    name: '内蒙古',
                    value: 540
                },
                {
                    name: '陕西',
                    value: 540
                },
                {
                    name: '吉林',
                    value: 540
                },
                {
                    name: '福建',
                    value: 540
                },
                {
                    name: '贵州',
                    value: 540
                },
                {
                    name: '广东',
                    value: 540
                },
                {
                    name: '青海',
                    value: 540
                },
                {
                    name: '西藏',
                    value: 540
                },
                {
                    name: '四川',
                    value: 540
                },
                {
                    name: '宁夏',
                    value: 540
                },
                {
                    name: '海南',
                    value: 540
                },
                {
                    name: '台湾',
                    value: 540
                },
                {
                    name: '香港',
                    value: 540
                },
                {
                    name: '澳门',
                    value: 540
                }
            ]
        }
    },
    watch: {
        chartData: {
            handler(newVal) {
                // if ((newVal, Object.keys(newVal).length > 0)) {
                //   let data = newVal.regionalDistribution
                //   this.dataList.forEach((item) => {
                //     let sandSales = 0
                //     let buildSales = 0
                //     if (data && data.length > 0) {
                //       data.forEach((ditem) => {
                //         if (item.province && item.province.indexOf(ditem.province) > -1) {
                //           if (item.materialType.indexOf('砂石') > -1) sandSales += Number(ditem.designCapacity)
                //           if (item.materialType.indexOf('建材') > -1) buildSales += Number(ditem.designCapacity)
                //         }
                //       })
                //     }
                //     item.sandSales = sandSales
                //     item.buildSales = buildSales
                //   })
                // }
                this.$nextTick(() => {
                    this.initEchartMap()
                })
            },
            deep: true,
            immediate: true
        }
    },
    methods: {
        //初始化中国地图
        initEchartMap() {
            let mapDiv = document.getElementById('china_map')
            let myChart = echarts.init(mapDiv)
            let option = {
                tooltip: {
                    triggerOn: 'mousemove', //mousemove、click
                    padding: 8,
                    //   borderWidth: 100,
                    //   borderColor: '#409eff',
                    backgroundColor: 'rgba(255,255,255,0.7)',
                    textStyle: {
                        color: '#000000',
                        fontSize: 36
                    },
                    formatter: function (e, t, n) {
                        let data = e.data
                        return '数量：' + data.value
                    }
                },
                visualMap: {
                    show: false,
                    left: 26,
                    bottom: 40,
                    showLabel: false,
                    pieces: [
                        {
                            gte: 100,
                            label: '>= 1000',
                            color: '#1f307b'
                        },
                        {
                            gte: 500,
                            lt: 999,
                            label: '500 - 999',
                            color: '#3c57ce'
                        },
                        {
                            gte: 100,
                            lt: 499,
                            label: '100 - 499',
                            color: '#6f83db'
                        },
                        {
                            gte: 10,
                            lt: 99,
                            label: '10 - 99',
                            color: '#9face7'
                        },
                        {
                            lt: 10,
                            label: '<10',
                            color: '#bcc5ee'
                        }
                    ]
                },
                geo: {
                    map: 'china',
                    scaleLimit: {
                        min: 1,
                        max: 2
                    },
                    bottom: 10,
                    zoom: 1.9,
                    geoIndex: 1,
                    aspectScale: 0.75, //长宽比
                    label: {
                        normal: {
                            show: false,
                            fontSize: '14',
                            color: 'rgba(255, 255, 255, 1.0)'
                        }
                    },
                    itemStyle: {
                        normal: {
                            shadowBlur: 1,
                            borderColor: '#7ce4fc',
                            borderWidth: 3
                        }
                        // emphasis: {
                        // 	areaColor: "#f2d5ad",
                        // 	shadowOffsetX: 0,
                        // 	shadowOffsetY: 0,
                        // 	borderWidth: 0
                        // }
                    }
                },
                series: [
                    {
                        name: '突发事件',
                        type: 'map',
                        geoIndex: 0,
                        data: this.dataList
                    }
                ]
            }
            myChart.setOption(option)
        }
    }
}
</script>
<style scoped>
#china_map_box {
    height: 100%;
    /* position: relative; */
}

#china_map_box #china_map {
    width: 80%;
    height: 100%;
}

/*  #china_map_box #china_map {
    height: 100%;
  }

  #china_map_box .china_map_logo {
    position: absolute;
    top: 0;
    left: 0;
    width: 45px;
  } */
</style>
<style>
/*  #china_map .tooltip_style {
    line-height: 1.7;
    overflow: hidden;
  }

  #china_map .tooltip_left {
    float: left;
  }

  #china_map .tooltip_right {
    float: right;
  } */
</style>
