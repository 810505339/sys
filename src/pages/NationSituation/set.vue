<!--
 * @Author: yxx
 * @Date: 2022-10-24 09:05:03
 * @LastEditTime: 2022-12-03 09:34:20
 * @LastEditors: yxx
 * @Description:配置页
 * @FilePath: \project20221116\src\pages\NationSituation\set.vue
-->
<script setup lang="ts">
import draggable from 'vuedraggable'
import { Add } from '@vicons/ionicons5'

import borderBg from '~/assets/images/nationSituation/bg1.png'
const dragOptions = ref({
  animation: 200,
  group: 'description',
  disabled: false,
  ghostClass: 'ghost',
})
let enabled = $ref(true)

const types = $ref([
  {
    label: '型号',
    value: 'song0',
    type: [1, 2, 3, 4, 5, 6, 7],
    select: [
      {
        title: '产品信息',
        type: 1,
        width: 1,
      },
      {
        title: '厂家信息',
        type: 2,
        width: 2,
      },
      {
        title: '健康状态评分',
        type: 3,
        width: 3,
      },
    ],

  },
  {
    label: '批',
    value: 'song1',
    type: [1, 2, 3, 4, 5, 6, 8, 9],
    select: [],
  },
  {
    label: '发',
    value: 'song2',
    type: [1, 2, 3, 4, 5, 6, 7],
    select: [],
  },
  {
    label: '子系统',
    value: 'song3',
    type: [1, 2, 3, 4, 5, 6, 7],
    select: [],
  },
  {
    label: '单机',
    value: 'song4',
    type: [1, 2, 5, 6, 7],
    select: [],
  },
])
let id = $ref<number>(0) // 所选的id
let i = $ref(0)
const type = $ref('song0') // 下拉选择的型号
let position = $ref<any[]>(
  [
    [],
    [],
    [],
  ],
)
const infoList = $ref([
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
  },
  {
    title: '质量问题信息',
    span: 3,
    type: 4,
  },
  {
    title: '校验倒计时',
    span: 1,
    type: 5,
  },
  {
    title: '定检维护信息',
    span: 1,
    type: 6,
  },
  {
    title: '产品寿命/维修倒计时',
    span: 1,
    type: 7,
  },
  {
    title: '产品关键参数信息',
    span: 2,
    type: 8,
  },
  {
    title: '单机模型',
    span: 1,
    type: 9,
  },
])
let selectType = $ref<number[]>([1, 2, 3, 4, 5, 6, 7]) // 所选中的typelsit 可选的card
let cardSelect = $ref<any[]>([
  {
    title: '产品信息',
    type: 1,
    width: 1,

  },
  {
    title: '厂家信息',
    type: 2,
    width: 2,

  },
  {
    title: '健康状态评分',
    type: 3,
    width: 3,
  },
]) // 已选中的card
let copyList = $ref<any[]>([])
const mes = useMessage()
let movingIndex = $ref(0)
let fIndex = $ref(0)

const getTotal = (list: any[]) => {
  return list.reduce((total, card) => total + card.width, 0)
}
const cardClick = (item: any, index: number) => {
  if (!enabled) {
    mes.error('请先保存编辑')
    return
  }

  if (!selectType.includes(item.type))
    return
  if ((cardSelect.findIndex(c => c.type === item.type) === -1)) {
    if (getTotal(cardSelect) > 8) {
      mes.error('布局已经铺满,请先调整布局')
      return
    }
    const index = position.findIndex(cl => cl.reduce((total: any, c: any) => total + c.width, 0) < 3)
    console.log(index)

    position[index].push({
      width: 1,
      type: item.type,
      title: item.title,
    })
    cardSelect = position.flat()
  }
  else {
    const i = cardSelect.findIndex(it => it.type === item.type)

    cardSelect.splice(i, 1)
    initPostion()
  }
}

function initPostion() {
  i = 0
  position = [[], [], []]
  cardSelect.forEach((card) => {
    const total = position[i].reduce((total: any, c: any) => total + c.width, 0)

    if (card.width + total > 3)
      i += 1

    position[i].push(card)
  })
}

watch($$(type), () => {
  const infoItem = types.find(item => item.value === type)
  selectType = infoItem?.type || []
  cardSelect = infoItem?.select || []
  initPostion()
  console.log(position)
}, {
  immediate: true,
})

const card = (type: number) => {
  return cardSelect.find(item => item.type === type)
}

const edit = (type: number) => {
  if (!enabled)
    return

  id = type
  enabled = false
}
const cardClass = (width: number) => {
  const widthList = ['w32.6%', 'w65.8%', 'w99%']
  return `${widthList[width - 1]}`
}
const add = () => {
  if (getTotal(cardSelect) > 8) {
    mes.error('布局已经铺满,请先调整布局')
    return
  }
  cardSelect.find(card => card.type === id).width += 1
}

const sub = () => {
  cardSelect.find(card => card.type === id).width -= 1
}
const sure = () => {
  enabled = true
  id = 0
}
function move({ draggedContext, relatedContext }) {
  const { index, futureIndex } = draggedContext
  movingIndex = index
  fIndex = futureIndex
  return false // disable sort
}
function start() {
  copyList = [...cardSelect]
  console.log(copyList)
}
function end({ oldIndex, newIndex }: any) {
  // console.log(oldIndex)
  const card = copyList[movingIndex]
  const newCard = copyList[fIndex]

  if (card.width !== newCard.width)
    return

  copyList.splice(movingIndex, 1, newCard)
  copyList.splice(fIndex, 1, card)
  cardSelect = copyList
}
function save() {
  console.log(cardSelect)
  if (!enabled) {
    mes.error('请先保存编辑')
    return
  }

  const infoItem = types.find(item => item.value === type)
  infoItem!.select = cardSelect
  mes.success('保存成功')
}
</script>

<template>
  <div class="relative set-content flex w98% mx-auto mt-4" relative>
    <div w110>
      <div w110 h44 overflow-hidden>
        <img :src="borderBg" inset-0 absolute w110 h44 z="0">
        <div text="#00C7FA center base" relative z="1" font-bold mt9>
          产品检索
        </div>
        <div mt9>
          <n-select v-model:value="type" class="text-center w-80% m-auto mb-7.5" :options="types" />
        </div>
      </div>
      <div border="~ #00C7FA" class="left" mt4 overflow-auto>
        <CardItem
          v-for="item, index in infoList" :key="item.type" m3
          :item="{ span: item.span, title: item.title, type: item.type }"
          :style="{ opacity: (selectType.includes(item.type)) ? '1' : '0.4' }" @click="cardClick(item, index)"
        >
          <div text="center" h="100%" flex items-center justify-center size="large">
            <n-button v-if="selectType.includes(item.type)" strong secondary circle type="info">
              <template #icon>
                <n-icon>
                  <Add v-if="(cardSelect.findIndex(c => c.type === item.type) === -1)" text="#00C7FA" />
                  <div v-else>
                    -
                  </div>
                </n-icon>
              </template>
            </n-button>
          </div>
        </CardItem>
      </div>
    </div>
    <div w="100%" h="100%" class="right" ml4>
      <draggable
        v-model="cardSelect" :multi-drag="true" :swap="true" item-key="type" border="~ dashed #00C7FA"
        class="flex flex-wrap" v-bind="dragOptions" :disabled="!enabled"
        :component-data="{ name: 'flip-list', type: 'transition', tag: 'ul' }" :move="move" @end="end" @start="start"
      >
        <template #item="{ element }">
          <div
            border="  #00C7FA" m1 p1 box-border
            :class="[`${cardClass(element.width)}`, { 'border border-dashed': element.type === id }]" relative
          >
            <div v-show="element.type === id" absolute z="1" top="0" right="0" flex items-center justify-center>
              <div
                v-if="element.width < 3" w4 h4 text-center bg="#ffff" border="~" text="black" flex items-center
                justify-center mr2 cursor-pointer @click="add"
              >
                +
              </div>
              <div
                v-if="element.width > 1" w4 h4 bg="#ffff" text="black" border="~" flex items-center justify-center
                cursor-pointer mr2 @click="sub"
              >
                -
              </div>
              <n-button size="tiny" type="info" @click="sure">
                确定
              </n-button>
            </div>
            <div :key="element.type" :class="{ 'not-draggable': !enabled }">
              <CardItem
                class="list-group-item" cursor-pointer
                :item="{ span: card(element.type)?.width, title: card(element.type)?.title, type: element.type }"
                @dblclick="edit(card(element.type)!.type)"
              />
            </div>
          </div>
        </template>
      </draggable>
       <div flex justify-end mt-4>
        <n-button type="info" @click="save">
          确定
        </n-button>
      </div>
    </div>

  </div>

</template>

<style lang="less" scoped>
.set-content{
  .left{
    height: calc(100vh - 5.375rem - 1.75rem - 13.5rem);
  }
  .right{
    height: calc(100vh - 5.375rem - 1.75rem - 3rem);
    border: 1px dashed var(--color-primary);
  }
}
.flip-list-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}

.ghost {
  opacity: 0.3;

}

.list-group {
  min-height: 20px;
}

.list-group-item {
  cursor: move;
  height: calc((100vh - 13.5rem) / 3);
}

.list-group-item i {
  cursor: pointer;
}

.not-draggable {
  cursor: no-drop;
}

.active {
  border: 1px;
}
</style>
