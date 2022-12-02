<!--
 * @Author: yxx
 * @Date: 2022-11-25 10:19:55
 * @LastEditTime: 2022-12-02 16:39:38
 * @LastEditors: yxx
 * @Description:
 * @FilePath: \project20221116\src\components\nation\lineChart.vue
-->
<script setup lang="ts">
import { defineExpose } from 'vue';
import * as echarts from 'echarts';
const props = withDefaults(
    defineProps<{
        type?: Array;
    }>(),
    {}
);
console.log(props.type);
const lineDom = ref<HTMLElement>();
const option: echarts.EChartsOption = {
    grid: {
        bottom: 10,
        left: 60,
        right: 0,
        top: 40,
    },
    xAxis: {
        type: 'category',
        data: ['本级产品1', '下级', '下级112'],
        axisLabel: {
            color: '#00C7FA',
        },
        axisTick: {
            show: false,
        },
        show: false,
    },
    yAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                type: 'dotted',
                color: '#485348',
            },
        },
        axisLabel: {
            color: '#00C7FA',
        },
    },
    title: {
        text: '单位：分',
        textStyle: {
            // 标题样式
            color: '#00C7FA',
            fontSize: '12px',
        },
        show: props.type == 3 ? true : false,
        left: 0,
        top: 0,
    },
    series: [
        props.type == 8
            ? {
                  type: 'line',
                  color: '#0099ff',
                  symbol: false,
                  markLine: {
                      symbol: ['none', 'none'],
                      data: [
                          {
                              type: 'average',
                              yAxis: '60',
                              lineStyle: {
                                  color: 'red',
                              },
                              emphasis: {
                                  label: {
                                      formatter: '最大值',
                                      fontSize: 10,
                                  },
                              },
                              label: {
                                  formatter: '过热',
                                  fontSize: 10,
                              },
                          },
                          {
                              yAxis: '20',
                              lineStyle: {
                                  color: 'rgb(70,140,144)',
                              },
                              emphasis: {
                                  label: {
                                      formatter: '过冷5%',
                                      fontSize: 10,
                                  },
                              },
                              label: {
                                  formatter: '最小值',
                                  fontSize: 10,
                              },
                          },
                      ],
                  },
              }
            : '',
        {
            data: [24, 58, 36],
            type: 'line',
            itemStyle: {
                normal: {
                    areaStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 1,
                            x2: 0,
                            y2: 0,
                            colorStops: [
                                {
                                    offset: 1,
                                    color: '#3097E2',
                                },
                                {
                                    offset: 0,
                                    color: 'transparent',
                                },
                            ],
                        },
                    },
                    lineStyle: {
                        color: '#3097E2', //线的颜色 #00A870
                    },
                },
                // color: (params) => {
                //     const colorList = ['#3097E2'];
                //     return colorList[params.dataIndex];
                // },
            },
        },
    ],
};

/**
 * @description: 初始化图表所需配置项
 * @return {*}
 */
const renderCharts = () => {
    const barChart = echarts.init(lineDom.value!);
    barChart.clear();
    barChart.setOption(option);
};
defineExpose({
    renderCharts,
});
onMounted(() => {
    renderCharts();
});
</script>

<template>
    <div ref="lineDom" h-full w-full />
</template>
