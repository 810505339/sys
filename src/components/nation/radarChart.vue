<!--
 * @Author: yxx
 * @Date: 2022-11-25 10:19:55
 * @LastEditTime: 2022-12-02 16:13:39
 * @LastEditors: yxx
 * @Description:
 * @FilePath: \project20221116\src\components\nation\radarChart.vue
-->
<script setup lang="ts">
import { defineExpose } from 'vue';
import * as echarts from 'echarts';
const lineDom = ref<HTMLElement>();
const option: echarts.EChartsOption = {
    grid: {
        bottom: 25,
        left: 0,
        right: 0,
        top: 0,
    },
    label: {
        color: '#E6D900',
    },
    title: {
        show: false,
    },
    radar: {
        indicator: [
            {
                name: '',
                max: 6500,
            },
            {
                name: '测发控系统',
                max: 16000,
            },
            {
                name: '瞄准系统',
                max: 30000,
            },
            {
                name: '伺服系统',
                max: 38000,
            },
            {
                name: '控制系统',
                max: 38000,
            },
        ],
        splitArea: {
            show: false,
            areaStyle: {
                color: 'transparent', // 图表背景的颜色
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                width: 1,
                color: '#013A3F', // 设置网格的颜色
            },
        },
        axisName: {
            color: '#E6D900',
        },
    },
    series: [
        {
            data: [
                {
                    value: [4300, 10000, 28000, 35000, 8000],
                    name: 'Allocated Budget',
                },
            ],
            type: 'radar',
            lineStyle: {
                color: '#00C0E0',
            },
            itemStyle: {
                opacity: 0,
            },
            areaStyle: {
                color: 'rgba(0, 192, 224, 0.3)',
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
