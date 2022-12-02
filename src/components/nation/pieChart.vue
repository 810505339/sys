<!--
 * @Author: yxx
 * @Date: 2022-11-25 10:19:55
 * @LastEditTime: 2022-12-02 16:17:07
 * @LastEditors: yxx
 * @Description:
 * @FilePath: \project20221116\src\components\nation\pieChart.vue
-->
<script setup lang="ts">
import { defineExpose } from 'vue';
import * as echarts from 'echarts';
const barDom = ref<HTMLElement>();
const option: echarts.EChartsOption = {
    grid: {
        bottom: 25,
    },
    // xAxis: {
    //     type: 'category',
    //     data: ['本级产品1', '下级', '下级112'],
    //     axisLabel: {
    //         color: '#00C7FA',
    //     },
    //     axisTick: {
    //         show: false,
    //     },
    //     show: false,
    // },
    // yAxis: {
    //     type: 'value',
    //     splitLine: {
    //         lineStyle: {
    //             type: 'dotted',
    //             color: '#485348',
    //         },
    //     },
    //     axisLabel: {
    //         color: '#00C7FA',
    //     },
    // },
    title: {
        // text: '单位：月',
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
            type: 'pie',
            radius: [40, 60],
            label: {
                // alignTo: 'edge',
                formatter: '{name|{b}}\n{time|{c} }',
                minMargin: 5,
                edgeDistance: 10,
                lineHeight: 15,
                rich: {
                    time: {
                        fontSize: 10,
                        color: '#999',
                    },
                },
            },
            itemStyle: {
                color: (params) => {
                    const colorList = ['#3097E2', '#EF4560', '#E58E58'];
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
    const barChart = echarts.init(barDom.value!);
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
    <div id="barDom" ref="barDom" h-full w-full />
</template>
