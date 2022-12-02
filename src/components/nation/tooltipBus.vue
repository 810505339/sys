<script setup lang="ts">
interface IProps {
  city: string
}
const { city } = defineProps<IProps>()
const { changeShow } = inject<any>('changeShow')
const toggle = inject('toggle') // 获取到最上级组件提供toggle
let data = $ref<any[]>([])
let columns = $ref<any[]>([])
let sum = $ref<{
  [key: string]: number
}>({})
// 请求接口拿去数据 这里 就是默认city
const dataArr = {
  北京: {
    data: [
      { title: 'DD-01', city: '上海市', num: '56' },
      { title: 'DD-01', city: '上海市', num: '56' },
      { title: 'DD-01', city: '上海市', num: '56' },
    ],
    columns: [{
      key: 'title',
      className: 'col',
      title() {
        return h(
          'div',
          {
            class: 'title',
          },
          '厂家名称',
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
          '所在市',
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
          '设备数量',
        )
      },
      key: 'num',
      className: 'col',
    }],
    sum: {
      a: 56,
      b: 21,
      c: 31,
    },
  },
  内蒙古: {
    data: [
      { title: 'DD-02', city: '内蒙古', num: '12' },
      { title: 'DD-02', city: '内蒙古', num: '21' },
      { title: 'DD-02', city: '内蒙古', num: '21' },
    ],
    columns: [{
      key: 'title',
      className: 'col',
      title() {
        return h(
          'div',
          {
            class: 'title',
          },
          '厂家名称',
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
          '所在市',
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
          '设备数量',
        )
      },
      key: 'num',
      className: 'col',
    }],
    sum: {
      a: 108,
      b: 77,
      c: 99,
    },
  },
  唐山市: {
    data: [
      { title: 'DD-02', city: '内蒙古', num: '12' },
      { title: 'DD-02', city: '内蒙古', num: '21' },
      { title: 'DD-02', city: '内蒙古', num: '21' },
    ],
    columns: [{
      key: 'title',
      className: 'col',
      title() {
        return h(
          'div',
          {
            class: 'title',
          },
          '厂家名称',
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
          '所在市',
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
          '设备数量',
        )
      },
      key: 'num',
      className: 'col',
    }],
    sum: {
      a: 108,
      b: 77,
      c: 99,
    },
  },
}
watch(() => city, (nVal) => {
  data = dataArr[nVal as keyof typeof dataArr].data
  columns = dataArr[nVal as keyof typeof dataArr].columns
  sum = dataArr[nVal as keyof typeof dataArr].sum
})
</script>

<template>
  <div v-if="toggle" class="pb-10 border-[#00C7FA] bg-[rgba(2,21,45,0.96)]" border>
    <n-data-table
      :data="data" :columns="columns" :bordered="false" :pagination="false" :max-height="220"
      w="330px"
    />
    <div absolute text="rgba(255, 255, 255, 0.2);" text-3 bottom-3 right-1 cursor-pointer @click="changeShow">
      更多>
    </div>
  </div>

  <div v-else bg="#02152D" h32 w40 text="center #B5E0FC" font-bold relative box-border py1>
    <div py1>
      <span text="#00C7FA">厂家数量：</span>{{ sum.a }}
    </div>
    <div py1>
      <span text="#00C7FA">
        交付数量：
      </span>
      {{ sum.b }}
    </div>
    <div py1>
      <span text="#00C7FA">
        备附件数量：
      </span>
      {{ sum.c }}
    </div>
    <div absolute text="#00C7FA" bottom-1 right-1 cursor-pointer @click="changeShow">
      更多>
    </div>
  </div>
</template>

<style scoped>
:deep(.col) {
  color: #B5E0FC !important;
  background: #02152D;
  text-align: center;
}

:deep(.title) {
  width: 100%;
  text-align: center;
  color: #00C7FA;
}
</style>
