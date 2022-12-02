<!--
 * @Author: yxx
 * @Date: 2022-10-24 09:05:03
 * @LastEditTime: 2022-12-02 18:01:41
 * @LastEditors: yxx
 * @Description:区域态势
 * @FilePath: \project20221116\src\pages\NationSituation\area.vue
-->
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { repeat } from 'seemly'
import type { DropdownOption, TreeOption } from 'naive-ui'
import { useMessage } from 'naive-ui'
const userStore = useUserStore()
const style
    = userStore.themeColor[
      userStore.commonStyle as keyof typeof userStore.themeColor
    ]
const type = ref('') // 型号
const lot = ref('') // 批 发
const standAlone = ref('') // 单机
const types = ref([
  {
    label: '798型号',
    value: 'song0',
  },
  {
    label: '7981型号',
    value: 'song1',
  },
  {
    label: '7982型号',
    value: 'song2',
  },
  {
    label: '7983型号',
    value: 'song3',
  },
  {
    label: '7984型号',
    value: 'song4',
  },
  {
    label: '7985型号',
    value: 'song5',
  },
])
const lots = ref([
  {
    label: '01批',
    value: '01批',
  },
  {
    label: '01发',
    value: '01发',
  },
  {
    label: '02批',
    value: '02批',
  },
  {
    label: '02发',
    value: '02发',
  },
  {
    label: '03批',
    value: '03批',
  },
  {
    label: '03发',
    value: '03发',
  },
])
const chooseType = ref('xh')
function createData(level = 4, baseKey = ''): TreeOption[] | undefined {
  if (!level)
    return undefined
  return repeat(6 - level, undefined).map((_, index) => {
    const key = `${baseKey}${level}${index}`
    return {
      label: createLabel(level),
      key,
      children: createData(level - 1, key),
    }
  })
}
console.log(createData())
function createLabel(level: number): string {
  if (level === 4)
    return '导弹（系统）'
  if (level === 3)
    return '控制系统（分系统）'
  if (level === 2)
    return '控制组件（子系统）'
  if (level === 1)
    return '控制组件Ⅰ（单机）'
  return ''
}
const cardType = ref({
  xh: {
    // 型号
    list: [
      {
        title: '基本信息',
        span: 1,
        type: 0,
      },
      {
        title: '问题记录统计',
        span: 1,
        type: 4,
        echart: 'pie',
      },
      {
        title: '备品备件统计',
        span: 1,
        type: 9,
        echart: 'bar',
      },
      {
        title: '产品寿命/维修倒计时',
        span: 3,
        type: 7,
        echart: 'bar',
      },

      {
        title: '健康状态评分',
        span: 3,
        type: 3,
        echart: 'line',
      },
    ],
  },
  pi: {
    // 批
    list: [
      {
        title: '基本信息',
        span: 1,
        type: 0,
      },
      {
        title: '厂家信息',
        span: 1,
        type: 2,
      },
      {
        title: '健康状态评分',
        span: 1,
        type: 3,
        echart: 'radar',
      },
      {
        title: '校验倒计时',
        span: 1,
        type: 5,
      },
      {
        title: '产品寿命/维修倒计时',
        span: 1,
        type: 7,
        echart: 'bar',
      },
      {
        title: '定检维护信息',
        span: 1,
        type: 6,
      },
      {
        title: '问题记录统计',
        span: 3,
        type: 4,
        echart: 'table',
      },
    ],
  },
  fa: {
    // 批
    list: [
      {
        title: '产品信息',
        span: 1,
        type: 1,
      },
      {
        title: '厂家信息',
        span: 1,
        type: 2,
      },
      {
        title: '健康状态评分',
        span: 1,
        type: 3,
        echart: 'radar',
      },
      {
        title: '校验倒计时',
        span: 1,
        type: 5,
      },
      {
        title: '产品寿命/维修倒计时',
        span: 1,
        type: 7,
        echart: 'pie',
      },
      {
        title: '定检维护信息',
        span: 1,
        type: 6,
      },
      {
        title: '问题记录统计',
        span: 3,
        type: 4,
        echart: 'table',
      },
    ],
  },
  dan: {
    // 单机
    list: [
      {
        title: '产品信息',
        span: 1,
        type: 1,
      },
      {
        title: '厂家信息',
        span: 1,
        type: 2,
      },
      {
        title: '单机模型',
        span: 1,
        type: 10,
      },
      {
        title: '问题记录统计',
        span: 1,
        type: 4,
        echart: 'table',
      },
      {
        title: '产品寿命/维修倒计时',
        span: 1,
        type: 7,
        echart: 'bar',
      },
      {
        title: '校验倒计时',
        span: 1,
        type: 5,
      },
      {
        title: '健康状态评分',
        span: 1,
        type: 3,
        echart: 'pie',
      },

      {
        title: '产品关键参数信息',
        span: 2,
        type: 8,
      },
    ],
  },
  xt: {
    // 子系统
    list: [
      {
        title: '产品信息',
        span: 1,
        type: 1,
      },
      {
        title: '厂家信息',
        span: 1,
        type: 2,
      },
      {
        title: '健康状态评分',
        span: 1,
        type: 3,
        echart: 'radar',
      },
      {
        title: '校验倒计时',
        span: 1,
        type: 5,
      },
      {
        title: '产品寿命/维修倒计时',
        span: 1,
        type: 7,
        echart: 'bar',
      },
      {
        title: '备品备件统计',
        span: 1,
        type: 9,
      },
      {
        title: '问题记录统计',
        span: 2,
        type: 4,
        echart: 'table',
      },
      {
        title: '定检维护信息',
        span: 1,
        type: 6,
      },
    ],
  },
})
// console.log(cardType.value[chooseType.value])

watch(
  () => type.value,
  () => {
    chooseType.value = 'xh'
  },
)
watch(
  () => lot.value,
  () => {
    if (lot.value.includes('批'))
      chooseType.value = 'pi'

    else
      chooseType.value = 'fa'
  },
)
watch(
  () => standAlone.value,
  () => {
    if (standAlone.value.includes('单机'))
      chooseType.value = 'dan'

    else
      chooseType.value = 'xt'
  },
)
const lists0 = ref([
  {
    name: '型号名称：',
    value: '电子标签技术',
  },
  {
    name: '已生产批次：',
    value: 'SRGH001',
  },
  {
    name: '已生产发次：',
    value: '贮存',
  },
  {
    name: '总体质量等级：',
    value: '宝钢2厂',
  },
  {
    name: '质量评价：',
    value: '宝钢2厂',
  },
])
const lists = ref([
  {
    name: '产品名称：',
    value: '控制组合I',
  },
  {
    name: '产品代号：',
    value: 'KZZH I 20200101',
  },
  {
    name: '当前状态：',
    value: '贮存',
  },
  {
    name: '贮存地点：',
    value: '北京',
  },
  {
    name: '出厂时间：',
    value: '2020-12-09',
  },
  {
    name: '故障次数：',
    value: '0',
  },
  {
    name: '最后测试时间：',
    value: '2020-06-30',
  },
])
const lists1 = ref([
  {
    name: '产品名称：',
    value: '控制组合I',
  },
  {
    name: '产品代号：',
    value: 'KZZH I 20200101',
  },
  {
    name: '设计单位：',
    value: '中国运载火箭技术研究院',
  },
  {
    name: '生产单位：',
    value: '中国运载火箭技术研究院',
  },
  {
    name: '出厂编号：',
    value: 'KZZHBH20200101',
  },
])
const lefts = ref([
  {
    title: '维<br />修',
    id: 1,
  },
  {
    title: '寿<br />命',
    id: 2,
  },
])
const lefts1 = ref([
  {
    title: 'LRU<br />备件',
    id: 1,
  },
  {
    title: '非<br />LRU<br />备件',
    id: 2,
  },
])
const active = ref(1)
const active1 = ref(1)
const barChart = ref(null)
const columns = ref([
  {
    title: '产品名称',
    key: 'title',
    align: 'center',
    ellipsis: {
      tooltip: true,
    },
  },
  {
    title: '问题性质 ',
    key: 'length',
    align: 'center',
    ellipsis: {
      tooltip: true,
    },
  },
  {
    title: '问题说明',
    key: 'msg',
    align: 'center',
    ellipsis: {
      tooltip: true,
    },
  },
  {
    title: '数量',
    key: 'num',
    align: 'center',
    ellipsis: {
      tooltip: true,
    },
  },
  {
    title: '故障部位及现象',
    key: 'xx',
    align: 'center',
    ellipsis: {
      tooltip: true,
    },
  },
  {
    title: '故障原因分析',
    key: 'yy',
    align: 'center',
    ellipsis: {
      tooltip: true,
    },
  },
  {
    title: '修理情况及技术结论',
    key: 'js',
    align: 'center',
    ellipsis: {
      tooltip: true,
    },
  },
])
const columns1 = ref([
  {
    title: '产品名称',
    key: 'title',
    align: 'center',
    ellipsis: {
      tooltip: true,
    },
  },
  {
    title: '问题性质 ',
    key: 'length',
    align: 'center',
    ellipsis: {
      tooltip: true,
    },
  },
  {
    title: '故障定位',
    key: 'yy',
    align: 'center',
    ellipsis: {
      tooltip: true,
    },
  },
])

const columns5 = ref([
  {
    title: '产品名称',
    key: 'title',
    align: 'center',
    ellipsis: {
      tooltip: true,
    },
  },
  {
    title: '校验周期 ',
    key: 'length',
    align: 'center',
    ellipsis: {
      tooltip: true,
    },
  },
  {
    title: '最近校验检定时间',
    key: 'time',
    align: 'center',
    ellipsis: {
      tooltip: true,
    },
  },
  {
    title: '校验检定倒计时',
    key: 'time1',
    align: 'center',
    ellipsis: {
      tooltip: true,
    },
  },
])
const columns6 = ref([
  {
    title: '产品名称',
    key: 'title',
    align: 'center',
    ellipsis: {
      tooltip: true,
    },
  },
  {
    title: '定检周期 ',
    key: 'length',
    align: 'center',
    ellipsis: {
      tooltip: true,
    },
  },
  {
    title: '最近检查日期',
    key: 'time',
    align: 'center',
    ellipsis: {
      tooltip: true,
    },
  },
  {
    title: '定检倒计时',
    key: 'time1',
    align: 'center',
    ellipsis: {
      tooltip: true,
    },
  },
])
const columns9 = ref([
  {
    title: '产品名称',
    key: 'title',
    align: 'center',
  },
  {
    title: '数量 ',
    key: 'length',
    align: 'center',
  },
])

const dataTable: Song[] = [
  { no: 3, title: '伺服系统', length: '4:18' },
  { no: 4, title: '伺服系统1', length: '4:48' },
  { no: 12, title: '伺服系统2', length: '7:27' },
  { no: 3, title: '伺服系统3', length: '4:18' },
  { no: 4, title: '伺服单机', length: '4:48' },
  { no: 12, title: 'Champagne Supernova', length: '7:27' },
  { no: 3, title: 'Wonderwall', length: '4:18' },
  { no: 4, title: 'Don\'t Look Back in Anger', length: '4:48' },
  { no: 12, title: 'Champagne Supernova', length: '7:27' },
  { no: 3, title: 'Wonderwall', length: '4:18' },
  { no: 4, title: 'Don\'t Look Back in Anger', length: '4:48' },
  { no: 12, title: 'Champagne Supernova', length: '7:27' },
  { no: 3, title: 'Wonderwall', length: '4:18' },
  { no: 4, title: 'Don\'t Look Back in Anger', length: '4:48' },
  { no: 12, title: 'Champagne Supernova', length: '7:27' },
  { no: 3, title: 'Wonderwall', length: '4:18' },
  { no: 4, title: 'Don\'t Look Back in Anger', length: '4:48' },
  { no: 12, title: 'Champagne Supernova', length: '7:27' },
  { no: 3, title: 'Wonderwall', length: '4:18' },
  { no: 4, title: 'Don\'t Look Back in Anger', length: '4:48' },
  { no: 12, title: 'Champagne Supernova', length: '7:27' },
]
const dataTable1: Song[] = [
  { no: 3, title: '伺服系统', length: '1个' },
  { no: 4, title: '伺服机构1', length: '1个' },
  { no: 12, title: '伺服单机', length: '1个' },
  { no: 3, title: '伺服机构2', length: '1个' },
  { no: 4, title: '伺服单机', length: '1个' },
  { no: 12, title: '引爆装置', length: '50个' },
  { no: 3, title: '螺母', length: '210个' },
  { no: 4, title: '螺栓', length: '300个' },
  { no: 12, title: '头状螺栓', length: '500个' },
  { no: 3, title: '电片', length: '500个' },
  { no: 4, title: '吸铁石', length: '500个' },
]
const dataTable6: Song[] = [
  { no: 3, title: '伺服系统', length: '6个月', time: '2022.9', time1: '3个月' },
  { no: 4, title: '控制组合1', length: '6个月', time: '2022.9', time1: '3个月' },
  { no: 12, title: '控制单机主', length: '6个月', time: '2022.9', time1: '3个月' },
  { no: 3, title: '控制单机备', length: '6个月', time: '2022.9', time1: '3个月' },
  { no: 4, title: '控制组合2', length: '6个月', time: '2022.9', time1: '3个月' },
  { no: 12, title: '控制组合2', length: '6个月', time: '2022.9', time1: '3个月' },
  { no: 3, title: '控制单机备', length: '210个', time: '2022.9', time1: '3个月' },
]
const dataTable4: Song[] = [
  { title: '控制系统', length: '偶然', msg: '控制系统无响应', num: '1', xx: '敏感装置失效', yy: '未知', js: '已修理' },
  { title: '控制组合1', length: '偶然', msg: '伺服系统无响应', num: '1', xx: '驱动电机失效', yy: '未知', js: '已修理' },
  { title: '控制单机主', length: '偶然', msg: '控制单机主无响应', num: '1', xx: '启动无效', yy: '未知', js: '已修理' },
  { title: '控制单机备', length: '偶然', msg: '控制系统无响应', num: '1', xx: '启动无效', yy: '未知', js: '已修理' },
  { title: '控制组合2', length: '偶然', msg: '控制系统无响应', num: '1', xx: '测试设备失效', yy: '未知', js: '已修理' },
  { title: '控制单机主', length: '偶然', msg: '控制系统无响应', num: '1', xx: '启动无效', yy: '未知', js: '已修理' },
  { title: '控制单机备', length: '偶然', msg: '控制系统无响应', num: '1', xx: '启动无效', yy: '未知', js: '已修理' },
  { title: '伺服系统', length: '偶然', msg: '控制系统无响应', num: '1', xx: '启动无效', yy: '未知', js: '已修理' },
  { title: '瞄准系统', length: '偶然', msg: '控制系统无响应', num: '1', xx: '启动无效', yy: '未知', js: '已修理' },
  { title: '测发控系统', length: '偶然', msg: '控制系统无响应', num: '1', xx: '启动无效', yy: '未知', js: '已修理' },

]
watch(
  () => active.value,
  () => {
    console.log(barChart.value)
    barChart.value[0].renderCharts()
  },
)
const data = ref([
  {
    label: '导弹（系统）',
    key: '40',
    children: [
      {
        label: '控制系统（分系统）',
        key: '4030',
        children: [
          {
            label: '控制组件I（子系统）',
            key: '403020',
            children: [
              {
                label: '控制单机主（单机）',
                key: '40302010',
              },
              {
                label: '控制单机备（单机）',
                key: '40302011',
              },
              {
                label: '其他（单机）',
                key: '40302012',
              },
            ],
          },
          {
            label: '控制组件II（子系统）',
            key: '403021',
            children: [
              {
                label: '控制单机主（单机）',
                key: '40302110',
              },
              {
                label: '控制单机备（单机）',
                key: '40302111',
              },
              {
                label: '其他（单机）',
                key: '40302112',
              },
            ],
          },
        ],
      },
      {
        label: '伺服系统（分系统）',
        key: '4031',
        children: [
          {
            label: '控制组件（子系统）',
            key: '403120',
            children: [
              {
                label: '控制组件Ⅰ（单机）',
                key: '40312010',
              },
              {
                label: '控制组件Ⅰ（单机）',
                key: '40312011',
              },
              {
                label: '控制组件Ⅰ（单机）',
                key: '40312012',
              },
              {
                label: '控制组件Ⅰ（单机）',
                key: '40312013',
              },
              {
                label: '控制组件Ⅰ（单机）',
                key: '40312014',
              },
            ],
          },
          {
            label: '控制组件（子系统）',
            key: '403121',
            children: [
              {
                label: '控制组件Ⅰ（单机）',
                key: '40312110',
              },
              {
                label: '控制组件Ⅰ（单机）',
                key: '40312111',
              },
              {
                label: '控制组件Ⅰ（单机）',
                key: '40312112',
              },
              {
                label: '控制组件Ⅰ（单机）',
                key: '40312113',
              },
              {
                label: '控制组件Ⅰ（单机）',
                key: '40312114',
              },
            ],
          },
          {
            label: '控制组件（子系统）',
            key: '403122',
            children: [
              {
                label: '控制组件Ⅰ（单机）',
                key: '40312210',
              },
              {
                label: '控制组件Ⅰ（单机）',
                key: '40312211',
              },
              {
                label: '控制组件Ⅰ（单机）',
                key: '40312212',
              },
              {
                label: '控制组件Ⅰ（单机）',
                key: '40312213',
              },
              {
                label: '控制组件Ⅰ（单机）',
                key: '40312214',
              },
            ],
          },
          {
            label: '控制组件（子系统）',
            key: '403123',
            children: [
              {
                label: '控制组件Ⅰ（单机）',
                key: '40312310',
              },
              {
                label: '控制组件Ⅰ（单机）',
                key: '40312311',
              },
              {
                label: '控制组件Ⅰ（单机）',
                key: '40312312',
              },
              {
                label: '控制组件Ⅰ（单机）',
                key: '40312313',
              },
              {
                label: '控制组件Ⅰ（单机）',
                key: '40312314',
              },
            ],
          },
        ],
      },
      {
        label: '瞄准系统（分系统）',
        key: '4032',
        children: [
          {
            label: '控制组件（子系统）',
            key: '403220',
            children: [
              {
                label: '控制组件Ⅰ（单机）',
                key: '40322010',
              },
              {
                label: '控制组件Ⅰ（单机）',
                key: '40322011',
              },
              {
                label: '控制组件Ⅰ（单机）',
                key: '40322012',
              },
              {
                label: '控制组件Ⅰ（单机）',
                key: '40322013',
              },
              {
                label: '控制组件Ⅰ（单机）',
                key: '40322014',
              },
            ],
          },
          {
            label: '控制组件（子系统）',
            key: '403221',
            children: [
              {
                label: '控制组件Ⅰ（单机）',
                key: '40322110',
              },
              {
                label: '控制组件Ⅰ（单机）',
                key: '40322111',
              },
              {
                label: '控制组件Ⅰ（单机）',
                key: '40322112',
              },
              {
                label: '控制组件Ⅰ（单机）',
                key: '40322113',
              },
              {
                label: '控制组件Ⅰ（单机）',
                key: '40322114',
              },
            ],
          },
          {
            label: '控制组件（子系统）',
            key: '403222',
            children: [
              {
                label: '控制组件Ⅰ（单机）',
                key: '40322210',
              },
              {
                label: '控制组件Ⅰ（单机）',
                key: '40322211',
              },
              {
                label: '控制组件Ⅰ（单机）',
                key: '40322212',
              },
              {
                label: '控制组件Ⅰ（单机）',
                key: '40322213',
              },
              {
                label: '控制组件Ⅰ（单机）',
                key: '40322214',
              },
            ],
          },
          {
            label: '控制组件（子系统）',
            key: '403223',
            children: [
              {
                label: '控制组件Ⅰ（单机）',
                key: '40322310',
              },
              {
                label: '控制组件Ⅰ（单机）',
                key: '40322311',
              },
              {
                label: '控制组件Ⅰ（单机）',
                key: '40322312',
              },
              {
                label: '控制组件Ⅰ（单机）',
                key: '40322313',
              },
              {
                label: '控制组件Ⅰ（单机）',
                key: '40322314',
              },
            ],
          },
        ],
      },
    ],
  },
  // {
  //     label: '导弹（系统）',
  //     key: '41',
  //     children: [
  //         {
  //             label: '控制系统（分系统）',
  //             key: '4130',
  //             children: [
  //                 {
  //                     label: '控制组件（子系统）',
  //                     key: '413020',
  //                     children: [
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41302010',
  //                         },
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41302011',
  //                         },
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41302012',
  //                         },
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41302013',
  //                         },
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41302014',
  //                         },
  //                     ],
  //                 },
  //                 {
  //                     label: '控制组件（子系统）',
  //                     key: '413021',
  //                     children: [
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41302110',
  //                         },
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41302111',
  //                         },
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41302112',
  //                         },
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41302113',
  //                         },
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41302114',
  //                         },
  //                     ],
  //                 },
  //                 {
  //                     label: '控制组件（子系统）',
  //                     key: '413022',
  //                     children: [
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41302210',
  //                         },
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41302211',
  //                         },
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41302212',
  //                         },
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41302213',
  //                         },
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41302214',
  //                         },
  //                     ],
  //                 },
  //                 {
  //                     label: '控制组件（子系统）',
  //                     key: '413023',
  //                     children: [
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41302310',
  //                         },
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41302311',
  //                         },
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41302312',
  //                         },
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41302313',
  //                         },
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41302314',
  //                         },
  //                     ],
  //                 },
  //             ],
  //         },
  //         {
  //             label: '控制系统（分系统）',
  //             key: '4131',
  //             children: [
  //                 {
  //                     label: '控制组件（子系统）',
  //                     key: '413120',
  //                     children: [
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41312010',
  //                         },
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41312011',
  //                         },
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41312012',
  //                         },
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41312013',
  //                         },
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41312014',
  //                         },
  //                     ],
  //                 },
  //                 {
  //                     label: '控制组件（子系统）',
  //                     key: '413121',
  //                     children: [
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41312110',
  //                         },
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41312111',
  //                         },
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41312112',
  //                         },
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41312113',
  //                         },
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41312114',
  //                         },
  //                     ],
  //                 },
  //                 {
  //                     label: '控制组件（子系统）',
  //                     key: '413122',
  //                     children: [
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41312210',
  //                         },
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41312211',
  //                         },
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41312212',
  //                         },
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41312213',
  //                         },
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41312214',
  //                         },
  //                     ],
  //                 },
  //                 {
  //                     label: '控制组件（子系统）',
  //                     key: '413123',
  //                     children: [
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41312310',
  //                         },
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41312311',
  //                         },
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41312312',
  //                         },
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41312313',
  //                         },
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41312314',
  //                         },
  //                     ],
  //                 },
  //             ],
  //         },
  //         {
  //             label: '控制系统（分系统）',
  //             key: '4132',
  //             children: [
  //                 {
  //                     label: '控制组件（子系统）',
  //                     key: '413220',
  //                     children: [
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41322010',
  //                         },
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41322011',
  //                         },
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41322012',
  //                         },
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41322013',
  //                         },
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41322014',
  //                         },
  //                     ],
  //                 },
  //                 {
  //                     label: '控制组件（子系统）',
  //                     key: '413221',
  //                     children: [
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41322110',
  //                         },
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41322111',
  //                         },
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41322112',
  //                         },
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41322113',
  //                         },
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41322114',
  //                         },
  //                     ],
  //                 },
  //                 {
  //                     label: '控制组件（子系统）',
  //                     key: '413222',
  //                     children: [
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41322210',
  //                         },
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41322211',
  //                         },
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41322212',
  //                         },
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41322213',
  //                         },
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41322214',
  //                         },
  //                     ],
  //                 },
  //                 {
  //                     label: '控制组件（子系统）',
  //                     key: '413223',
  //                     children: [
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41322310',
  //                         },
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41322311',
  //                         },
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41322312',
  //                         },
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41322313',
  //                         },
  //                         {
  //                             label: '控制组件Ⅰ（单机）',
  //                             key: '41322314',
  //                         },
  //                     ],
  //                 },
  //             ],
  //         },
  //     ],
  // },
])
export default defineComponent({
  setup() {
    // const message = useMessage()
    const showDropdownRef = ref(false)
    const optionsRef = ref<DropdownOption[]>([])
    const xRef = ref(0)
    const yRef = ref(0)
    return {
      style,
      type,
      lot,
      lots,
      standAlone,
      types,
      cardType,
      chooseType,
      lists0,
      lists,
      lists1,
      lefts,
      lefts1,
      active,
      active1,
      barChart,
      columns,
      columns1,
      columns5,
      columns6,
      columns9,
      dataTable,
      dataTable1,
      dataTable6,
      dataTable4,
      data,
      defaultExpandedKeys: ref(['40', '41']),
      showDropdown: showDropdownRef,
      x: xRef,
      y: yRef,
      options: optionsRef,
      handleSelect: () => {
        showDropdownRef.value = false
      },
      handleClickoutside: () => {
        showDropdownRef.value = false
      },
      nodeProps: ({ option }: { option: TreeOption }) => {
        return {
          onClick() {
            // console.log(option.label);
            standAlone.value = option.label
            // message.info('[Click] ' + option.label)
          },
          onContextmenu(e: MouseEvent): void {
            optionsRef.value = [option]
            showDropdownRef.value = true
            xRef.value = e.clientX
            yRef.value = e.clientY
            console.log(e.clientX, e.clientY)
            e.preventDefault()
          },
        }
      },
    }
  },
})
</script>

<template>
  <div class="area-content p-3">
    <div class="text-right">
      <span class="btn1">定检维修提醒</span>
      <span class="btn2">校验检定报警提醒</span>
    </div>
    <n-grid :x-gap="12" :y-gap="12">
      <n-gi :span="6">
        <div
          class="left"
          :style="`background-image:url(${style.bgImages.bgl}) `"
        >
          <div class="text-center text-white text-4 mb-9.5 font-bold">
            产品检索
          </div>
          <div class="bg w-80% m-auto mb-7.5">
            <n-select
              v-model:value="type"
              placeholder="型号选择"
              class="text-center"
              :options="types"
            />
          </div>
          <div class="bg w-80% m-auto mb-10">
            <n-select
              v-model:value="lot"
              placeholder="发批次选择"
              class="text-center"
              :options="lots"
            />
          </div>

          <template v-if="chooseType != 'xh'">
            <div
              class="h-5 mb-5 bg-contain bg-center bg-no-repeat"
              :style="`background-image:url(${style.bgImages.title}) `"
            />
            <div class="border-1 p-6">
              <n-tree
                block-line
                :data="data"
                :node-props="nodeProps"
              />
              <n-dropdown
                trigger="manual"
                placement="bottom-start"
                :show="showDropdown"
                :options="options as any"
                :x="x"
                :y="y"
                @select="handleSelect"
                @clickoutside="handleClickoutside"
              />
            </div>
          </template>
        </div>
      </n-gi>
      <n-gi :span="18">
        <n-grid :x-gap="12" :y-gap="12">
          <n-gi
            v-for="(item, index) in cardType[chooseType].list"
            :key="index"
            :span="8 * item.span"
          >
            <CardItem :item="item" :type="1">
              <ListItem
                v-if="item.type == 0"
                :type="item.type"
                :lists="lists0"
              />
              <ListItem
                v-if="item.type == 1"
                :type="item.type"
                :lists="lists"
              />

              <ListItem
                v-if="item.type == 2"
                :type="item.type"
                :lists="lists1"
              />

              <div v-if="item.type == 3" class="flex-1 h-full">
                <RadarChart
                  v-if="item.echart == 'radar'"
                  :type="item.type"
                />
                <LineChart
                  v-if="item.echart == 'line'"
                  :type="item.type"
                />
                <PieChart
                  v-if="item.echart == 'pie'"
                  ref="pieChart"
                  :type="item.type"
                />
              </div>
              <div v-if="item.type == 7" class="flex h-full">
                <div class="left-ul">
                  <div
                    v-for="(item, index) in lefts"
                    :key="index"
                    class="text-center w-9 py-4"
                    :class="{ in: item.id == active }"
                    @click="active = item.id"
                    v-html="item.title"
                  />
                </div>
                <div class="flex-1 h-full">
                  <BarChart1
                    v-if="item.echart == 'bar'"
                    ref="barChart1"
                    :type="item.type"
                  />
                  <PieChart
                    v-if="item.echart == 'pie'"
                    ref="pieChart"
                    :type="item.type"
                  />
                </div>
              </div>
              <template v-if="item.type == 8">
                <n-select
                  class="w-40 mb-2"
                  placeholder="请选择"
                  :options="types"
                />
                <div class="w-full h-80%">
                  <LineChart

                    :type="item.type"
                  />
                </div>
              </template>
              <template v-if="item.type == 4">
                <n-data-table
                  v-if="item.echart == 'table'"
                  max-height="calc((100vh - 38rem) / 3)"
                  :data="dataTable4"
                  :columns="
                    item.span == 1 ? columns1 : columns
                  "
                  :bordered="false"
                  :remote="true"
                />
                <PieChart
                  v-if="item.echart == 'pie'"
                  ref="pieChart"
                  :type="item.type"
                />
              </template>
              <template v-if="item.type == 5">
                <n-data-table
                  max-height="calc((100vh - 38rem) / 3)"
                  :data="dataTable6"
                  :columns="columns5"
                  :bordered="false"
                  :remote="true"
                />
              </template>
              <!-- 定检维护信息 -->
              <template v-if="item.type == 6">
                <n-data-table
                  max-height="calc((100vh - 38rem) / 3)"
                  :data="dataTable6"
                  :columns="columns6"
                  :bordered="false"
                  :remote="true"
                />
              </template>
              <!-- 备件统计 -->
              <template v-if="item.type == 9">
                <div
                  v-if="item.echart == 'bar'"
                  class="flex h-full"
                >
                  <div class="left-ul">
                    <div
                      v-for="(item, index) in lefts1"
                      :key="index"
                      class="text-center w-9 py-4"
                      :class="{ in: item.id == active1 }"
                      @click="active1 = item.id"
                      v-html="item.title"
                    />
                  </div>
                  <div class="flex-1 h-full">
                    <BarChart
                      ref="barChart"
                      :type="item.type"
                    />
                  </div>
                </div>
                <n-data-table
                  v-else
                  max-height="calc((100vh - 38rem) / 3)"
                  :data="dataTable1"
                  :columns="columns9"
                  :bordered="false"
                  :remote="true"
                />
              </template>
            </CardItem>
          </n-gi>
        </n-grid>
      </n-gi>
    </n-grid>
  </div>
</template>

<style lang="less">
.area-content {
    .btn1,
    .btn2 {
        display: inline-block;
        width: 10rem;
        height: 1.75rem;
        line-height: 1.75rem;
        text-align: center;
        cursor: pointer;
        background: url(~/assets/images/nationSituation/red.png) no-repeat
            center/contain;
    }
    .btn2 {
        background-image: url(~/assets/images/nationSituation/blue.png);
    }
    .left {
        height: calc(100vh - 5.375rem - 1.75rem - 1.5rem);
        background: no-repeat;
        background-size: 100% 100%;
        color: var(--color-primary);
        padding: 2.5rem;
        .n-base-selection-label {
            background: url(~/assets/images/nationSituation/top1.png) no-repeat
                center/contain;
            background-size: 100% auto;
        }
        .n-base-icon {
            color: var(--color-primary);
        }
    }

    .border-1 {
        height: calc(100vh - 29rem);
        overflow: auto;
    }
    .left-ul {
        display: inline-block;
        > div {
            position: relative;
            right: 1.5rem;
            background: url(~/assets/images/left2.png) no-repeat center/cover;
            // border: 2px solid var(--color-primary);
            &:first-child {
                position: relative;
                bottom: -0.8rem;
                z-index: 1;
            }
            &.in {
                background: url(~/assets/images/left1.png) no-repeat
                    center/cover;
                //  position: relative;
                //  z-index: 1;
                // background: var(--color-bg3);
            }
        }
    }
    .n-data-table {
        background-color: transparent;
        border: none;
        .n-data-table-table,
        .n-data-table-thead,
        .n-data-table-th,
        .n-data-table-tr:not(.n-data-table-tr--summary):hover {
            padding-left: 0;
            padding-right: 0;
            background-color: transparent;
            color: var(--color-primary1);
        }
        .n-data-table-th {
            font-weight: bold;
        }
        .n-scrollbar,
        .n-data-table-td {
            padding-left: 0;
            padding-right: 0;
            background-color: transparent;
            color: #fff;
            // border-color: var(--color-bg1);
        }
    }
}
</style>
