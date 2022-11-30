<!--
 * @Author: yxx
 * @Date: 2022-11-25 10:19:55
 * @LastEditTime: 2022-11-26 18:11:08
 * @LastEditors: yxx
 * @Description:
 * @FilePath: \project20221116\src\components\nation\lineChart.vue
-->
<script setup lang="ts">
import { defineExpose } from 'vue';
import * as echarts from 'echarts';
const lineDom = ref<HTMLElement>();
const option: echarts.EChartsOption = {
    grid: {
        bottom: 25,
        left:0,
        right:0,
        top:0
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
        show:false
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
        text: '单位：月',
        textStyle: {
            // 标题样式
            color: '#00C7FA',
            fontSize: '12px',
        },
        show:false,
        right: 0,
        top: 10,
    },
    series: [
        {
            data: [24, 58, 36],
            type: 'line',
            itemStyle: {
                color: (params) => {
                    const colorList = ['#3097E2'];
                    return colorList[params.dataIndex];
                },
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
