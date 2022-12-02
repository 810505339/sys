<!--
 * @Author: yxx
 * @Date: 2022-10-24 09:05:03
 * @LastEditTime: 2022-12-02 11:10:44
 * @LastEditors: yxx
 * @Description:全球态势配置新增编辑
 * @FilePath: \project20221116\src\pages\WorldSituation\configDetail.vue
-->
<script setup lang="ts">
import { Search, TimeOutline } from '@vicons/ionicons5';
const userStore = useUserStore();
const formatted = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss');
const page = ref(2);

interface Song {
    no: number;
    title: string;
    length: string;
}

const createColumns = ({
    play,
}: {
    play: (row: Song) => void;
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
                        { default: () => '编辑' }
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
                        { default: () => '删除' }
                    ),
                ];
            },
        },
    ];
};
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
            d.loading = true;
            // message.success('确定')
        },
        onNegativeClick: () => {
            // message.error('不确定')
        },
    });
    console.log(row);
};
// 编辑
const edit = (row) => {
    showModal.value = true;
    console.log(row);
};
const data: Song[] = [
    { no: 3, title: 'Wonderwall', length: '4:18' },
    { no: 4, title: "Don't Look Back in Anger", length: '4:48' },
    { no: 12, title: 'Champagne Supernova', length: '7:27' },
    { no: 3, title: 'Wonderwall', length: '4:18' },
    { no: 4, title: "Don't Look Back in Anger", length: '4:48' },
    { no: 12, title: 'Champagne Supernova', length: '7:27' },
    { no: 3, title: 'Wonderwall', length: '4:18' },
    { no: 4, title: "Don't Look Back in Anger", length: '4:48' },
    { no: 12, title: 'Champagne Supernova', length: '7:27' },
    { no: 3, title: 'Wonderwall', length: '4:18' },
    { no: 4, title: "Don't Look Back in Anger", length: '4:48' },
    { no: 12, title: 'Champagne Supernova', length: '7:27' },
    { no: 3, title: 'Wonderwall', length: '4:18' },
    { no: 4, title: "Don't Look Back in Anger", length: '4:48' },
    { no: 12, title: 'Champagne Supernova', length: '7:27' },
    { no: 3, title: 'Wonderwall', length: '4:18' },
    { no: 4, title: "Don't Look Back in Anger", length: '4:48' },
    { no: 12, title: 'Champagne Supernova', length: '7:27' },
    { no: 3, title: 'Wonderwall', length: '4:18' },
    { no: 4, title: "Don't Look Back in Anger", length: '4:48' },
    { no: 12, title: 'Champagne Supernova', length: '7:27' },
];
// 选中
const columns = createColumns({
    play(row: Song) {
        console.log(`Play ${row.title}`);
        // message.info(`Play ${row.title}`);
    },
});
const pagination = reactive({
    pageSize: 10,
    page: 1,
    itemCount: 100,
    onChange: (page: number) => {
        pagination.page = page;
        // console.log(page)
    },
    // onUpdatePageSize: (pageSize: number) => {
    //     pagination.pageSize = pageSize;
    //     pagination.page = 1;
    //     console.log(pagination.pageSize)
    // },
});
const checkedRowKeysRef = ref<DataTableRowKey[]>([]);
const rowKey = (row: RowData) => row.no;
const handleCheck = (rowKeys: DataTableRowKey[]) => {
    checkedRowKeysRef.value = rowKeys;
    console.log(checkedRowKeysRef.value);
};
const showModal = ref(false);
const title = ref('新增');
const model = ref({
    country: null, // 国家
    weaponName: null, // 武器名称
    weapon: null, // 武器
    range: null, // 作战半径/射程范围
    grade: null, // 重要等级
    place: null, // 部署地点
    number: null, // 数量
    time: null, // 部署时间
});
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
]);
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
]);
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
]);
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
]);
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
]);
const router = useRouter();
</script>

<template>
    <div class="p-4">
        <div class="p-4 config-detail w-50% mx-auto">
            <n-form
                ref="formRef"
                :model="model"
                :rules="rules"
                label-placement="left"
                label-width="auto"
                require-mark-placement="right-hanging"
                size="small"
            >
                <n-form-item label="国家" path="country">
                    <n-select
                        v-model:value="model.country"
                        placeholder="请选择国家"
                        :options="countrys"
                    />
                </n-form-item>
                <n-form-item label="武器名称" path="weaponName">
                    <n-select
                        v-model:value="model.weaponName"
                        placeholder="请选择武器名称"
                        :options="weaponNames"
                    />
                </n-form-item>
                <n-form-item label="武器" path="weapon">
                    <n-select
                        v-model:value="model.weapon"
                        placeholder="请选择武器"
                        :options="weapons"
                    />
                </n-form-item>
                <n-form-item label="作战半径/射程范围" path="range">
                    <n-input-number
                        v-model:value="model.range"
                        placeholder="请输入"
                        :precision="2"
                    >
                        <template #suffix> KM </template>
                    </n-input-number>
                </n-form-item>
                <n-form-item label="重要等级" path="grade">
                    <n-select
                        v-model:value="model.grade"
                        placeholder="请选择重要等级"
                        :options="grades"
                    />
                </n-form-item>
                <n-form-item label="部署地点" path="place">
                    <n-select
                        v-model:value="model.place"
                        placeholder="请选择部署地点"
                        :options="places"
                    />
                </n-form-item>
                <n-form-item label="数量" path="number">
                    <n-input-number
                        v-model:value="model.number"
                        placeholder="请输入"
                        :min="1"
                    />
                </n-form-item>
                <n-form-item label="部署时间" path="time">
                    <n-date-picker
                        v-model:value="model.time"
                        placeholder="请选择部署时间"
                        type="date"
                    />
                </n-form-item>
            </n-form>
            <n-space flex justify="end">
                <n-button type="info" ghost @click="router.back()">
                    取消
                </n-button>
                <n-button type="info" @click="router.back()"> 确定 </n-button>
            </n-space>
        </div>
    </div>
</template>

<style lang="less">
.config-detail {
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


}
</style>
