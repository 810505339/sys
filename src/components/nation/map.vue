<!--
 * @Author: yxx
 * @Date: 2022-11-28 10:44:29
 * @LastEditTime: 2022-11-29 21:30:31
 * @LastEditors: yxx
 * @Description:
 * @FilePath: \project20221116\src\components\nation\map.vue
-->
<script setup lang="tsx">
import * as echarts from 'echarts'
import china from '~/assets/data/china.json'
type EChartsOption = echarts.EChartsOption

const map = ref()
const bus = ref()
let busShow = $ref(false)
let mapChart: any = {}
let city = $ref('')
const option: EChartsOption = {
  tooltip: {
    show: true,
    trigger: 'item',
    backgroundColor: '#02152D',
    enterable: true,
    borderColor: '#00C7FA',
    position: 'bottom',
    padding: '5px',
    formatter: (params) => {
      busShow = true
      city = (params as any).data.name

      return bus.value
    },
  },
  geo: {

    map: 'china',
    silent: true,
    roam: false,
    zoom: 1.7,
    center: [105, 36],
    label: {
      show: true,
      color: '#FFFFFF',

    },
    itemStyle: {
      areaColor: '#1C3454',
      borderColor: '#389dff',
      borderWidth: 0.5,
    },
  },
  series: [
    {
      type: 'effectScatter',
      coordinateSystem: 'geo',
      geoIndex: 0,
      symbolSize(params) {
        return (params[2] / 100) * 5
      },
      itemStyle: {
        color: '#FFFF00',
      },
      encode: {
        tooltip: 2,
      },
      data: [
        {
          name: '北京',
          value: [116.42, 39, 340],
          label: {
            show: false,
            // formatter: '{b}',
            color: '#FFFFFF',

          },
        },
        {
          name: '内蒙古',
          value: [110.42, 39, 340],
          label: {
            show: false,
            // formatter: '{b}',
            color: '#FFFFFF',

          },
        },

      ],
    },

  ],
}

onMounted(() => {
  mapChart = echarts.init(map.value)
  echarts.registerMap('china', china as any)
  mapChart.setOption(option)
})
useResizeObserver(map, () => {
  mapChart.resize()
})
</script>

<template>
  <div id="map" ref="map" h="60vh" w-full />
  <div ref="bus">
    <tooltipBus v-show="busShow" absolute :city="city" />
  </div>
</template>
