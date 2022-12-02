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
import hebei from '~/assets/data/hebei.json'
type EChartsOption = echarts.EChartsOption

const map = ref()
const bus = ref()
let busShow = $ref(false)
let mapChart: any = {}
let city = $ref('')
let active = $ref(false) // 是否显示上一级
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
    silent: false,
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
const hebeiOption: EChartsOption = {
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

    map: 'hebei',
    silent: false,
    roam: false,
    zoom: 1.1,
    center: [115, 39],
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
          name: '唐山市',
          value: [116.42, 39, 340],
          label: {
            show: true,
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
  mapChart.on('click', (ev) => {
    if (ev.name === '河北省') {
      active = true
      echarts.registerMap('hebei', hebei as any)
      mapChart.setOption(hebeiOption)
    }
  })
})
useResizeObserver(map, () => {
  mapChart.resize()
})
function click() {
  active = false
  echarts.registerMap('china', china as any)
  mapChart.setOption(option)
}
</script>

<template>
  <div id="map" ref="map" h="80vh" w-full relative />
  <div v-show="active" absolute top="10%" left="30%" z="100" cursor-pointer @click="click">
    返回上一级
  </div>
  <div ref="bus">
    <tooltipBus v-show="busShow" absolute :city="city" />
  </div>
</template>
