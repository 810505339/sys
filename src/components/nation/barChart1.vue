<!--
 * @Author: yxx
 * @Date: 2022-11-25 10:19:55
 * @LastEditTime: 2022-12-03 18:16:52
 * @LastEditors: yxx
 * @Description:
 * @FilePath: \project20221116\src\components\nation\barChart1.vue
-->
<script setup lang="ts">
import { defineExpose } from 'vue';
import * as echarts from 'echarts';
const props = withDefaults(
    defineProps<{
        active?: Array;
    }>(),
    {}
);
let barChart: any = {}
const barDom = ref<HTMLElement>();
const option: echarts.EChartsOption = {
    grid: {
        bottom: 25,
        right: 0,
        left: 50,
        top:25
    },
    xAxis: {
        type: 'category',
        data: ['控制组合I', '控制单机主', '控制单机备', '其他'],
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
    tooltip: {
        // trigger: 'axis',
        // axisPointer: {
        //     type: 'shadow',
        // },
        formatter: (params) => {
            // console.log(params)
            // return
            return `${params.seriesName}：${params.value}`;
        },
    },
    title: {
        textStyle: {
            // 标题样式
            color: '#00C7FA',
            fontSize: '12px',
        },

        right: 0,
        top: 1,
    },
    series: [
        {
            data: [50, 50, 50, 50],
            barWidth: '25%',
            barMinWidth: 25,
            type: 'bar',
            stack: 'Ad',
            name: '总时长',
            itemStyle: {
                color: (params) => {
                    const colorList = [
                        '#3097E2',
                        '#EF4560',
                        '#E58E58',
                        '#3097E2',
                    ];
                    return colorList[params.dataIndex];
                },
            },
        },
        {
            data: [24, 10, 36, 20],
            // barWidth: '25%',
            type: 'bar',
            stack: 'Ad',
            name: '剩余时长',
            itemStyle: {
                color: (params) => {
                    const colorList = [
                        '#3097E2',
                        '#EF4560',
                        '#E58E58',
                        '#3097E2',
                    ];
                    return colorList[params.dataIndex];
                },
                opacity: 0.3,
            },
        },
    ],
};

/**
 * @description: 初始化图表所需配置项
 * @return {*}
 */
const renderCharts = () => {
    barChart = echarts.init(barDom.value!);
    barChart.clear();
    option.title.text = props.active == 1 ? '单位：月' : '单位：年';
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
