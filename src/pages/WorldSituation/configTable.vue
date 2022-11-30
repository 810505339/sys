<!--
 * @Author: yxx
 * @Date: 2022-10-24 09:05:03
 * @LastEditTime: 2022-11-24 09:30:38
 * @LastEditors: yxx
 * @Description:全球态势配置表格
 * @FilePath: \project20221116\src\pages\WorldSituation\configTable.vue
-->
<script setup lang="ts">
import { Search, TimeOutline } from '@vicons/ionicons5'
const userStore = useUserStore()
const formatted = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss')
const page = ref(2)

interface Song {
  no: number
  title: string
  length: string
}

const createColumns = ({
  play,
}: {
  play: (row: Song) => void
}): DataTableColumns<Song> => {
  return [
    {
      type: 'selection',
    },
    {
      title: '序号',
      key: 'no',
      align: 'center',
    },
    {
      title: '国家',
      key: 'title',
      align: 'center',
    },
    {
      title: '武器名称',
      key: 'length',
      align: 'center',
    },
    {
      title: '武器',
      key: 'length',
      align: 'center',
    },
    {
      title: '作战半径/射程范围（KM）',
      align: 'center',
      key: 'length',
    },
    {
      title: '重要等级',
      key: 'length',
      align: 'center',
    },
    {
      title: '部署地点',
      key: 'length',
      align: 'center',
    },
    {
      title: '数量',
      key: 'length',
      align: 'center',
    },
    {
      title: '部署时间',
      key: 'length',
      align: 'center',
    },
    {
      title: '操作',
      key: 'actions',
      render(row) {
        return [
          h(
            NButton,
            {
              strong: true,
              tertiary: true,
              size: 'small',
              type: 'info',
              onClick: () => edit(row),
            },
            { default: () => '编辑' },
          ),
          h(
            NButton,
            {
              strong: true,
              tertiary: true,
              size: 'small',
              type: 'error',
              onClick: () => del(row),
            },
            { default: () => '删除' },
          ),
        ]
      },
    },
  ]
}
// 删除
// const dialog = useDialog();
// console.log(useDialog());
const del = (row) => {
  const d = useDialog().success({
    title: '警告',
    content: '你确定？',
    positiveText: '确定',
    negativeText: '不确定',
    onPositiveClick: () => {
      d.loading = true
      // message.success('确定')
    },
    onNegativeClick: () => {
      // message.error('不确定')
    },
  })
  console.log(row)
}
// 编辑
const edit = (row) => {
  showModal.value = true
  console.log(row)
}
const data: Song[] = [
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
  { no: 3, title: 'Wonderwall', length: '4:18' },
  { no: 4, title: 'Don\'t Look Back in Anger', length: '4:48' },
  { no: 12, title: 'Champagne Supernova', length: '7:27' },
  { no: 3, title: 'Wonderwall', length: '4:18' },
  { no: 4, title: 'Don\'t Look Back in Anger', length: '4:48' },
  { no: 12, title: 'Champagne Supernova', length: '7:27' },
]
// 选中
const columns = createColumns({
  play(row: Song) {
    console.log(`Play ${row.title}`)
    // message.info(`Play ${row.title}`);
  },
})
const pagination = reactive({
  pageSize: 10,
  page: 1,
  itemCount: 100,
  onChange: (page: number) => {
    pagination.page = page
    // console.log(page)
  },
  // onUpdatePageSize: (pageSize: number) => {
  //     pagination.pageSize = pageSize;
  //     pagination.page = 1;
  //     console.log(pagination.pageSize)
  // },
})
const checkedRowKeysRef = ref<DataTableRowKey[]>([])
const rowKey = (row: RowData) => row.no
const handleCheck = (rowKeys: DataTableRowKey[]) => {
  checkedRowKeysRef.value = rowKeys
  console.log(checkedRowKeysRef.value)
}
const showModal = ref(false)
const title = ref('新增')
const model = ref({
  country: null, // 国家
  weaponName: null, // 武器名称
  weapon: null, // 武器
  range: null, // 作战半径/射程范围
  grade: null, // 重要等级
  place: null, // 部署地点
  number: null, // 数量
  time: null, // 部署时间
})
const countrys = ref([
  {
    label: '中',
    value: 'song0',
  },
  {
    label: '俄罗斯',
    value: 'song1',
  },
  {
    label: '美',
    value: 'song2',
  },
  {
    label: '英',
    value: 'song3',
  },
  {
    label: '法',
    value: 'song4',
  },
  {
    label: '其他',
    value: 'song5',
  },
])
const weaponNames = ref([
  {
    label: '中',
    value: 'song0',
  },
  {
    label: '俄罗斯',
    value: 'song1',
  },
  {
    label: '美',
    value: 'song2',
  },
  {
    label: '英',
    value: 'song3',
  },
  {
    label: '法',
    value: 'song4',
  },
  {
    label: '其他',
    value: 'song5',
  },
])
const weapons = ref([
  {
    label: '中',
    value: 'song0',
  },
  {
    label: '俄罗斯',
    value: 'song1',
  },
  {
    label: '美',
    value: 'song2',
  },
  {
    label: '英',
    value: 'song3',
  },
  {
    label: '法',
    value: 'song4',
  },
  {
    label: '其他',
    value: 'song5',
  },
])
const grades = ref([
  {
    label: '中',
    value: 'song0',
  },
  {
    label: '俄罗斯',
    value: 'song1',
  },
  {
    label: '美',
    value: 'song2',
  },
  {
    label: '英',
    value: 'song3',
  },
  {
    label: '法',
    value: 'song4',
  },
  {
    label: '其他',
    value: 'song5',
  },
])
const places = ref([
  {
    label: '中',
    value: 'song0',
  },
  {
    label: '俄罗斯',
    value: 'song1',
  },
  {
    label: '美',
    value: 'song2',
  },
  {
    label: '英',
    value: 'song3',
  },
  {
    label: '法',
    value: 'song4',
  },
  {
    label: '其他',
    value: 'song5',
  },
])
</script>

<template>
  <div class="p-4">
    <div class="flex mx-auto">
      <div class="w-20 mr-4">
        aaaa
      </div>
      <div class="p-4 flex-1 config-table">
        <n-icon :component="TimeOutline" />
        当前时间：{{ formatted }}
        <div class="bg-color1 mt-4.5 px-6 py-4">
          <div class="flex justify-between">
            <n-space align="center">
              <n-button type="info" @click="showModal = true">
                新增
              </n-button>
              <!-- <n-button type="info"> 编辑 </n-button> -->
              <n-button type="error" ghost color="#FF0000">
                删除
              </n-button>
            </n-space>
            <n-space>
              <n-input placeholder="请输入您要查询的信息">
                <template #suffix>
                  <n-icon :component="Search" />
                </template>
              </n-input>
              <n-button type="info">
                搜索
              </n-button>
            </n-space>
          </div>
          <n-data-table
            class="mt-4" :columns="columns" :data="data" :pagination="pagination"
            :row-key="rowKey" max-height="calc(100vh - 26.5rem )" :bordered="false"
            :remote="true" @update:checked-row-keys="handleCheck"
          />
        </div>
      </div>
    </div>
    <n-modal v-model:show="showModal" class="config-modal">
      <n-card style="width: 600px" :title="title" :bordered="false" size="huge" role="dialog" aria-modal="true">
        <n-form
          ref="formRef" :model="model" :rules="rules" label-placement="left" label-width="auto"
          require-mark-placement="right-hanging" size="small"
        >
          <n-form-item label="国家" path="country">
            <n-select v-model:value="model.country" placeholder="请选择国家" :options="countrys" />
          </n-form-item>
          <n-form-item label="武器名称" path="weaponName">
            <n-select v-model:value="model.weaponName" placeholder="请选择武器名称" :options="weaponNames" />
          </n-form-item>
          <n-form-item label="武器" path="weapon">
            <n-select v-model:value="model.weapon" placeholder="请选择武器" :options="weapons" />
          </n-form-item>
          <n-form-item label="作战半径/射程范围" path="range">
            <n-input-number v-model:value="model.range" placeholder="请输入" :precision="2">
              <template #suffix>
                KM
              </template>
            </n-input-number>
          </n-form-item>
          <n-form-item label="重要等级" path="grade">
            <n-select v-model:value="model.grade" placeholder="请选择重要等级" :options="grades" />
          </n-form-item>
          <n-form-item label="部署地点" path="place">
            <n-select v-model:value="model.place" placeholder="请选择部署地点" :options="places" />
          </n-form-item>
          <n-form-item label="数量" path="number">
            <n-input-number v-model:value="model.number" placeholder="请输入" :min="1" />
          </n-form-item>
          <n-form-item label="部署时间" path="time">
            <n-date-picker v-model:value="model.time" placeholder="请选择部署时间" type="date" />
          </n-form-item>
        </n-form>
        <template #footer>
          <div class="flex justify-end">
            <n-space>
              <n-button type="info" ghost @click="showModal = false">
                取消
              </n-button>
              <n-button type="info">
                确定
              </n-button>
            </n-space>
          </div>
        </template>
      </n-card>
    </n-modal>
    <!-- <n-dialog-provider>
          <content />
        </n-dialog-provider> -->
  </div>
</template>

<style lang="less">
.config-modal {
    color: #fff !important;

    &.n-card.n-modal {
        background-color: var(--color-bg1);

        .n-card-header__main {
            color: #fff;
        }
    }

    .n-form-item {
        .n-form-item-label {
            color: #fff;
        }
    }

    .n-base-selection-input__content {
        color: #fff !important;
    }

    .n-select,
    .n-select.n-select--focus,
    .n-base-selection__border {
        background-color: transparent;
        // color: var(--color-tb);
    }

    .n-select {
        .n-base-selection-label {
            background-color: var(--color-bg2);
        }
    }

    .n-select,
    .n-select:hover,
    .n-select.n-select--focus {

        .n-base-selection__border,
        .n-select__state-border {
            border-color: transparent;
            box-shadow: none;
        }
    }

    .n-base-selection:hover,
    .n-base-selection:not(.n-base-selection--disabled):hover .n-base-selection__state-border {
        border-color: transparent;
        box-shadow: none;
    }

    .n-modal-container .n-scrollbar {
        background-color: var(--color-bg2);
        color: #fff;

        .n-base-select-option--pending {
            background-color: var(--color-tb1);

            &:hover {
                background-color: transparent;
            }

            &::before {
                content: '';
                background-color: transparent;
            }
        }

        .n-base-select-option__content {
            color: #fff;
        }

        .n-base-select-option--selected {
            background-color: var(--color-tb1);
            color: #fff;

            &::before {
                background-color: transparent;
            }
        }
    }
}

.config-table,
.config-modal {
    border: 1px solid #163858;

    .n-input,
    .n-input.n-input--focus {
        background-color: var(--color-bg2);
        // color: var(--color-tb);
    }

    .n-input {
        input {
            color: #fff;
        }
    }

    .n-input,
    .n-input:hover,
    .n-input.n-input--focus {

        .n-input__border,
        .n-input__state-border {
            border-color: transparent;
            box-shadow: none;
        }
    }

    .n-data-table {
        background-color: var(--color-bg1);
        border-top: 1px solid var(--color-tb);

        .n-data-table-th {
            background-color: var(--color-bg1);
            color: var(--color-text);
            border-color: var(--color-bg1);
        }

        .n-data-table-td {
            background-color: var(--color-tb);
            color: #bdcfd8;
            border-color: var(--color-bg1);
        }

        .n-data-table-tr:not(.n-data-table-tr--summary):hover .n-data-table-td {
            background-color: var(--color-tb1);
        }

        &.n-data-table--bottom-bordered .n-data-table-td.n-data-table-td--last-row {
            border-color: var(--color-bg1);
        }

        .n-data-table__pagination {
            justify-content: center;
            margin-top: 20px;
        }

        .n-checkbox {
            &.n-checkbox--inside-table .n-checkbox-box {
                background-color: #284662;
            }

            &.n-checkbox--checked .n-checkbox-box {
                background-color: #0c7df5;
            }

            .n-checkbox-box .n-checkbox-box__border {
                border: 1px solid #41637c;
            }
        }

        .n-pagination {
            .n-pagination-item {
                background: var(--color-tb);
                border-color: #41637c;
                color: #41637c;

                &:not(.n-pagination-item--disabled).n-pagination-item--active {
                    background-color: #0c7df5;
                    color: #fff;
                }

                &.n-pagination-item--disabled.n-pagination-item--button {
                    background: var(--color-tb);
                    border-color: #41637c;
                    opacity: 0.5;
                }
            }

            .n-pagination-item:not(.n-pagination-item--disabled):hover.n-pagination-item--button,
            .n-pagination-item:hover {
                background: var(--color-tb);
                border-color: #41637c;
                color: #0c7df5;
            }
        }
    }
}
</style>
