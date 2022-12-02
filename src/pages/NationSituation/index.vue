<!--
 * @Author: yxx
 * @Date: 2022-10-24 09:05:03
 * @LastEditTime: 2022-11-30 09:41:17
 * @LastEditors: yxx
 * @Description:全国态势
 * @FilePath: \project20221116\src\pages\NationSituation\index.vue
-->
<script setup lang="ts">
// 产品信息data
const proInfo = [
  { title: '车辆设备', city: '北京钢铁厂', num: '280' },
  { title: '车辆设备', city: '包头钢铁厂', num: '170' },
  { title: '车辆设备', city: '北京钢铁厂', num: '56' },
  { title: '车辆设备', city: '北京钢铁厂', num: '280' },
  { title: '车辆设备', city: '包头钢铁厂', num: '170' },
  { title: '车辆设备', city: '北京钢铁厂', num: '56' },
  { title: '车辆设备', city: '北京钢铁厂', num: '280' },
  { title: '车辆设备', city: '包头钢铁厂', num: '170' },
  { title: '车辆设备', city: '北京钢铁厂', num: '56' },
  { title: '车辆设备', city: '北京钢铁厂', num: '280' },
  { title: '车辆设备', city: '包头钢铁厂', num: '170' },
  { title: '车辆设备', city: '北京钢铁厂', num: '56' },
  { title: '车辆设备', city: '北京钢铁厂', num: '280' },
  { title: '车辆设备', city: '包头钢铁厂', num: '170' },
  { title: '车辆设备', city: '北京钢铁厂', num: '56' },
  { title: '车辆设备', city: '北京钢铁厂', num: '280' },
  { title: '车辆设备', city: '包头钢铁厂', num: '170' },
  { title: '车辆设备', city: '北京钢铁厂', num: '56' },
  { title: '车辆设备', city: '北京钢铁厂', num: '280' },
  { title: '车辆设备', city: '包头钢铁厂', num: '170' },
  { title: '车辆设备', city: '北京钢铁厂', num: '56' },

]

const proCol = [{
  key: 'title',
  className: 'col',
  title() {
    return h(
      'div',
      {
        class: 'title',
      },
      '产品名称',
    )
  },
},
{
  title() {
    return h(
      'div',
      {
        class: 'title',
      },
      '生产单位',
    )
  },
  key: 'city',
  className: 'col',
},
{
  title() {
    return h(
      'div',
      {
        class: 'title',
      },
      '数量',
    )
  },
  key: 'num',
  className: 'col',
}]

const proCol1 = [{
  key: 'title',
  className: 'col',
  title() {
    return h(
      'div',
      {
        class: 'title',
      },
      '产品名称',
    )
  },
},
{
  title() {
    return h(
      'div',
      {
        class: 'title',
      },
      '产品代号',
    )
  },
  key: 'city',
  className: 'col',
},
{
  title() {
    return h(
      'div',
      {
        class: 'title',
      },
      '目录标识码',
    )
  },
  key: 'city',
  className: 'col',
},
{
  title() {
    return h(
      'div',
      {
        class: 'title',
      },
      '承制单位码',
    )
  },
  key: 'city',
  className: 'col',
},
{
  title() {
    return h(
      'div',
      {
        class: 'title',
      },
      '生产序号码',
    )
  },
  key: 'city',
  className: 'col',
},
{
  title() {
    return h(
      'div',
      {
        class: 'title',
      },
      '设计单位',
    )
  },
  key: 'city',
  className: 'col',
},
{
  title() {
    return h(
      'div',
      {
        class: 'title',
      },
      '生产单位',
    )
  },
  key: 'city',
  className: 'col',
},
{
  title() {
    return h(
      'div',
      {
        class: 'title',
      },
      '使用单位',
    )
  },
  key: 'city',
  className: 'col',
},
{
  title() {
    return h(
      'div',
      {
        class: 'title',
      },
      '出厂编号',
    )
  },
  key: 'city',
  className: 'col',
},
{
  title() {
    return h(
      'div',
      {
        class: 'title',
      },
      '数量',
    )
  },
  key: 'num',
  className: 'col',
}]

// 生产单位data
const spareInfo = [
  { title: '车辆设备', city: '钢铁厂123', num: '12' },
  { title: '车辆设备', city: '钢铁厂45', num: '32' },
  { title: '车辆设备', city: '钢铁厂546', num: '424' },
    { title: '车辆设备', city: '钢铁厂123', num: '12' },
  { title: '车辆设备', city: '钢铁厂45', num: '32' },
  { title: '车辆设备', city: '钢铁厂546', num: '424' },
  { title: '车辆设备', city: '钢铁厂123', num: '12' },
  { title: '车辆设备', city: '钢铁厂45', num: '32' },
  { title: '车辆设备', city: '钢铁厂546', num: '424' },
  { title: '车辆设备', city: '钢铁厂123', num: '12' },
  { title: '车辆设备', city: '钢铁厂45', num: '32' },
  { title: '车辆设备', city: '钢铁厂546', num: '424' },
  { title: '车辆设备', city: '钢铁厂123', num: '12' },
  { title: '车辆设备', city: '钢铁厂45', num: '32' },
  { title: '车辆设备', city: '钢铁厂546', num: '424' },

]

const spareCol = [{
  key: 'title',
  className: 'col',
  title() {
    return h(
      'div',
      {
        class: 'title',
      },
      '生产单位',
    )
  },
},
// {
//   title() {
//     return h(
//       'div',
//       {
//         class: 'title',
//       },
//       '所在市 ',
//     )
//   },
//   key: 'city',
//   className: 'col',
// },
{
  title() {
    return h(
      'div',
      {
        class: 'title',
      },
      '数量',
    )
  },
  key: 'num',
  className: 'col',
}
]
const spareInfo1 = [
  { title: '车辆设备', city: '钢铁厂123', num: '12' },
  { title: '车辆设备', city: '钢铁厂45', num: '32' },
  { title: '车辆设备', city: '钢铁厂546', num: '424' },
    { title: '车辆设备', city: '钢铁厂123', num: '12' },
  { title: '车辆设备', city: '钢铁厂45', num: '32' },
  { title: '车辆设备', city: '钢铁厂546', num: '424' },
  { title: '车辆设备', city: '钢铁厂123', num: '12' },
  { title: '车辆设备', city: '钢铁厂45', num: '32' },
  { title: '车辆设备', city: '钢铁厂546', num: '424' },
  { title: '车辆设备', city: '钢铁厂123', num: '12' },
  { title: '车辆设备', city: '钢铁厂45', num: '32' },
  { title: '车辆设备', city: '钢铁厂546', num: '424' },

]



//产品状态data
const stateInfo = [
  { title: '车辆设备', city: '钢铁厂123', num: '12' },
  { title: '车辆设备', city: '钢铁厂45', num: '32' },
  { title: '车辆设备', city: '钢铁厂546', num: '424' },
    { title: '车辆设备', city: '钢铁厂123', num: '12' },
  { title: '车辆设备', city: '钢铁厂45', num: '32' },
  { title: '车辆设备', city: '钢铁厂546', num: '424' },
  { title: '车辆设备', city: '钢铁厂123', num: '12' },
  { title: '车辆设备', city: '钢铁厂45', num: '32' },
  { title: '车辆设备', city: '钢铁厂546', num: '424' },
  { title: '车辆设备', city: '钢铁厂123', num: '12' },
  { title: '车辆设备', city: '钢铁厂45', num: '32' },
  { title: '车辆设备', city: '钢铁厂546', num: '424' },
  { title: '车辆设备', city: '钢铁厂123', num: '12' },
  { title: '车辆设备', city: '钢铁厂45', num: '32' },
  { title: '车辆设备', city: '钢铁厂546', num: '424' },

]

const stateCol = [{
  key: 'title',
  className: 'col',
  title() {
    return h(
      'div',
      {
        class: 'title',
      },
      '产品名称',
    )
  },
},
{
  title() {
    return h(
      'div',
      {
        class: 'title',
      },
      '现有状态',
    )
  },
  key: 'city',
  className: 'col',
},
// {
//   title() {
//     return h(
//       'div',
//       {
//         class: 'title',
//       },
//       '数量',
//     )
//   },
//   key: 'num',
//   className: 'col',
// }
]

const stateCol1 = [{
  key: 'title',
  className: 'col',
  title() {
    return h(
      'div',
      {
        class: 'title',
      },
      '产品名称',
    )
  },
},
{
  title() {
    return h(
      'div',
      {
        class: 'title',
      },
      '现有状态',
    )
  },
  key: 'city',
  className: 'col',
},
{
  title() {
    return h(
      'div',
      {
        class: 'title',
      },
      '产品寿命倒计时',
    )
  },
  key: 'num',
  className: 'col',
},
{
  title() {
    return h(
      'div',
      {
        class: 'title',
      },
      '定检维护倒计时',
    )
  },
  key: 'num',
  className: 'col',
},
{
  title() {
    return h(
      'div',
      {
        class: 'title',
      },
      '校验检定倒计时',
    )
  },
  key: 'num',
  className: 'col',
},
{
  title() {
    return h(
      'div',
      {
        class: 'title',
      },
      '维修倒计时',
    )
  },
  key: 'num',
  className: 'col',
}
]
 // 问题记录data
const qualityInfo = [
  { title: '车辆设备', city: '钢铁厂123', num: '12' },
  { title: '车辆设备', city: '钢铁厂45', num: '32' },
  { title: '车辆设备', city: '钢铁厂546', num: '424' },
    { title: '车辆设备', city: '钢铁厂123', num: '12' },
  { title: '车辆设备', city: '钢铁厂45', num: '32' },
  { title: '车辆设备', city: '钢铁厂546', num: '424' },
  { title: '车辆设备', city: '钢铁厂123', num: '12' },
  { title: '车辆设备', city: '钢铁厂45', num: '32' },
  { title: '车辆设备', city: '钢铁厂546', num: '424' },
  { title: '车辆设备', city: '钢铁厂123', num: '12' },
  { title: '车辆设备', city: '钢铁厂45', num: '32' },
  { title: '车辆设备', city: '钢铁厂546', num: '424' },

]

const qualityCol = [{
  key: 'title',
  className: 'col',
  title() {
    return h(
      'div',
      {
        class: 'title',
      },
      '产品名称',
    )
  },
},
{
  title() {
    return h(
      'div',
      {
        class: 'title',
      },
      '问题性质',
    )
  },
  key: 'city',
  className: 'col',
},
// {
//   title() {
//     return h(
//       'div',
//       {
//         class: 'title',
//       },
//       '数量',
//     )
//   },
//   key: 'num',
//   className: 'col',
// }
]
const qualityCol1 = [{
  key: 'title',
  className: 'col',
  title() {
    return h(
      'div',
      {
        class: 'title',
      },
      '产品名称',
    )
  },
},
{
  title() {
    return h(
      'div',
      {
        class: 'title',
      },
      '问题性质',
    )
  },
  key: 'city',
  className: 'col',
},
{
  title() {
    return h(
      'div',
      {
        class: 'title',
      },
      '故障部位及现象',
    )
  },
  key: 'num',
  className: 'col',
},
{
  title() {
    return h(
      'div',
      {
        class: 'title',
      },
      '故障原因分析',
    )
  },
  key: 'num',
  className: 'col',
}
]
const mapInfo = [
  { title: '56', city: '21', num: '31' },
  { title: '56', city: '21', num: '31' },
  { title: '56', city: '21', num: '31' },
]

const mapCol = [{
  key: 'title',
  className: 'col',
  title() {
    return h(
      'div',
      {
        class: 'title',
      },
      '厂家数量',
    )
  },
},
{
  title() {
    return h(
      'div',
      {
        class: 'title',
      },
      '交付数量',
    )
  },
  key: 'city',
  className: 'col',
},
{
  title() {
    return h(
      'div',
      {
        class: 'title',
      },
      '备附件数量',
    )
  },
  key: 'num',
  className: 'col',
}]

const btns = ['承研单位', '使用单位']
let Selected = $ref('承研单位')
let show = $ref(false)

let dataType = $ref('')
const modalData = $computed(() => {
  let list = [] as any[]
  switch (dataType) {
    case 'info':
      list = proInfo
      break
    case 'pro':
      list = spareInfo
      break
    case 'map':
      list = mapInfo
      break
    case 'state':
      list = stateInfo
      break
    case 'quality':
      list = qualityInfo
      break
    default:
      break
  }
  return list
})
const modalCol = $computed(() => {
  let list = [] as any[]
  switch (dataType) {
    case 'info':
      list = proCol1
      break
    case 'pro':
      list = spareCol
      break
    case 'map':
      list = mapCol
      break
    case 'state':
      list = stateCol1
      break
    case 'quality':
      list = qualityCol1
      break
    default:
      break
  }
  return list
})

const active = computed(() => {
  return Selected === '承研单位'
})

const toggle = (btn: string) => {
  Selected = btn
}
const moreClick = (type: string) => {
  show = true
  dataType = type
}

provide('toggle', active) // 全局注入provide
provide('changeShow', {
  changeShow() {
    show = true
    dataType = 'map'
  },
})
</script>

<template>
  <div class="relative flex w-100% mx-auto mt-4" justify-between items-start px5>
    <div w="20%">
      <NavBox title="产品信息" @moreClick="moreClick('info')">
        <div flex items-center justify-center mt5>
          <n-data-table
            :data="proInfo" :columns="proCol" :bordered="false" :pagination="false" :max-height="'calc((100vh - 31rem) / 2)'"
            w="85%"
          />
        </div>
      </NavBox>
        <NavBox title="生产单位" mt5 @moreClick="moreClick('pro')">
        <div flex items-center justify-center mt5>
          <n-data-table
            :data="spareInfo" :columns="spareCol" :bordered="false" :pagination="false" :max-height="'calc((100vh - 31rem) / 2)'"
            w="85%"
          />
        </div>
      </NavBox>


    </div>
    <div w="60%">
      <div text="#00FFFF" flex justify-center>
        <div
          v-for="(btn,index) in btns"  :key="index" text-base border="~ #00FFFF" box-border="~" px="3" py="1" cursor-pointer="~"
          :class="[ Selected === btn ? 'active':'',
          index?'rounded-r-md':'rounded-l-md' ]" @click="toggle(btn)"
        >
          {{ btn }}
        </div>
      </div>
      <Map />
    </div>
    <div w="20%">
      <NavBox title="产品状态"  @moreClick="moreClick('state')">
        <div flex items-center justify-center mt5>
          <n-data-table
            :data="stateInfo" :columns="stateCol" :bordered="false" :pagination="false" :max-height="'calc((100vh - 31rem) / 2)'"
            w="85%"
          />
        </div>
        <!-- <div class="w-80% h-80% m-auto" flex items-center justify-center>
          <BarChart />
        </div> -->
      </NavBox>
       <NavBox title="问题记录" mt5  @moreClick="moreClick('quality')">
         <div flex items-center justify-center mt5>
          <n-data-table
            :data="qualityInfo" :columns="qualityCol" :bordered="false" :pagination="false" :max-height="'calc((100vh - 31rem) / 2)'"
            w="85%"
          />
        </div>
      </NavBox>
    </div>
  </div>
  <n-modal v-model:show="show">
    <n-card w="9/12" bordered size="huge" role="dialog" aria-modal="true">
      <n-input-group>
        <div w="50%" />
        <n-input :style="{ width: '50%' }" placeholder="请输入要查询内容" />
        <n-button type="info">
          搜索
        </n-button>
      </n-input-group>

      <n-data-table
        mt10 :data="modalData" :columns="modalCol" :bordered="false" :pagination="false" :max-height="'calc((100vh - 44rem) / 2)'"
        w="100%"
      />
      <div>
      </div>
    </n-card>
  </n-modal>
</template>

<style lang="css" scoped>
:deep(.col) {
  color: #fff !important;
  background: #02152D;
  text-align: center;
}

:deep(.title) {
  width: 100%;
  text-align: center;
  color: var(--color-primary1);
  font-weight: bold;
}

:deep(.n-data-table) {
  border-top: none
}

.active {
  background: var(--color-primary1);
  font-weight: bold;
  color: #02152D;
  font-size: 1.125rem;
}

.n-card.n-modal {
  background-color: #02152D !important;
}

.n-card.n-card--bordered {
  border: 1px solid #00C7FA !important;
}

:deep(.n-button::active) {
  background-color: #00C7FA !important;
}
</style>
