<!--
 * @Author: yxx
 * @Date: 2022-11-25 10:19:55
 * @LastEditTime: 2022-12-03 18:15:39
 * @LastEditors: yxx
 * @Description:
 * @FilePath: \project20221116\src\components\nation\barChart.vue
-->
<script setup lang="ts">
import { defineExpose } from 'vue'
import * as echarts from 'echarts';

const barDom = ref<HTMLElement>();
const option: echarts.EChartsOption = {
    grid: {
        bottom: 25,
         right: 0,
         left:50,
         top:10
    },
    xAxis: {
        type: 'category',
        data: ['控制系统', '测发系统', '测发控系统'],
        axisLabel: {
            color: '#00C7FA',
        },
        axisTick: {
            show: false,
        },
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
        // text: '寿命单位：年\n维修单位：月',
        textStyle: {
            // 标题样式
            color: '#00C7FA',
            fontSize: '12px',
        },

        right: 0,
        top: 10,
    },
    series: [
        {
            data: [24, 58, 36],
            barWidth: '25%',
            type: 'bar',
            itemStyle: {
                color: (params) => {
                    const colorList = ['#3097E2', '#EF4560', '#E58E58'];
                    return colorList[params.dataIndex];
                },
            },
        },

    ],
};
let barChart: any = {}
/**
 * @description: 初始化图表所需配置项
 * @return {*}
 */
const renderCharts = () => {
    barChart = echarts.init(barDom.value!);
    barChart.clear();
    barChart.setOption(option);
};
defineExpose({
    renderCharts,
});
onMounted(() => {
    renderCharts();
});
useResizeObserver(barDom, () => {
  barChart.resize()
})
</script>

<template>
    <div id="barDom" ref="barDom" h-full w-full />
</template>
