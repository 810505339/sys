<!--
 * @Author: yxx
 * @Date: 2022-10-24 09:05:03
 * @LastEditTime: 2022-11-28 22:10:08
 * @LastEditors: yxx
 * @Description:区域态势
 * @FilePath: \project20221116\src\pages\NationSituation\area.vue
-->
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { repeat } from 'seemly';
import { TreeOption, useMessage, DropdownOption } from 'naive-ui';
const userStore = useUserStore();
const style =
    userStore.themeColor[
        userStore.commonStyle as keyof typeof userStore.themeColor
    ];
const type = ref(''); //型号
const lot = ref(''); //批 发
const standAlone = ref(''); //单机
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
]);
const lots = ref([
    {
        label: '01批',
        value: 'song0',
    },
    {
        label: '01发',
        value: 'song1',
    },
    {
        label: '02批',
        value: 'song2',
    },
    {
        label: '02发',
        value: 'song3',
    },
    {
        label: '03批',
        value: 'song4',
    },
    {
        label: '03发',
        value: 'song5',
    },
]);
const chooseType = ref('xh');
function createData(level = 4, baseKey = ''): TreeOption[] | undefined {
    if (!level) return undefined;
    return repeat(6 - level, undefined).map((_, index) => {
        const key = '' + baseKey + level + index;
        return {
            label: createLabel(level),
            key,
            children: createData(level - 1, key),
        };
    });
}

function createLabel(level: number): string {
    if (level === 4) return '导弹（系统）';
    if (level === 3) return '控制系统（分系统）';
    if (level === 2) return '控制组件（子系统）';
    if (level === 1) return '控制组件Ⅰ（单机）';
    return '';
}
const cardType = ref({
    xh: {
        //型号
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
            },
            {
                title: '备品备件统计',
                span: 1,
                type: 9,
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
        //批
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
                title: '问题记录统计',
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
                echart: 'pie',
            },
        ],
    },
    dan: {
        //单机
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
                echart: 'radar',
            },

            {
                title: '产品关键参数信息',
                span: 2,
                type: 8,
            },
        ],
    },
    xt: {
        //子系统
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
            },
            {
                title: '定检维护信息',
                span: 1,
                type: 6,
            },
        ],
    },
});
// console.log(cardType.value[chooseType.value])

watch(
    () => type.value,
    () => {
        chooseType.value = 'xh';
    }
);
watch(
    () => lot.value,
    () => {
        chooseType.value = 'pi';
    }
);
watch(
    () => standAlone.value,
    () => {
        if (standAlone.value.indexOf('单机') > -1) {
            chooseType.value = 'dan';
        } else {
            chooseType.value = 'xt';
        }
    }
);
const lists = ref([
    {
        name: '产品名称：',
        value: '电子标签技术',
    },
    {
        name: '产品代号：',
        value: 'SRGH001',
    },
    {
        name: '当前状态：',
        value: '贮存',
    },
    {
        name: '贮存地点：',
        value: '宝钢2厂',
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
        value: '2020-11-30',
    },
]);
const lists1 = ref([
    {
        name: '产品名称：',
        value: '电子标签技术',
    },
    {
        name: '产品代号：',
        value: 'SRGH001',
    },
    {
        name: '设计单位：',
        value: '航天2院',
    },
    {
        name: '生产单位：',
        value: '包钢2分厂',
    },
    {
        name: '出厂编号：',
        value: 'ZDER-BG09',
    },
]);
const lefts = ref([
    {
        title: '维修',
        id: 1,
    },
    {
        title: '寿命',
        id: 2,
    },
]);
const active = ref(1);
const barChart = ref(null);
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
        key: 'length',
        align: 'center',
        ellipsis: {
            tooltip: true,
        },
    },
    {
        title: '数量',
        key: 'length',
        align: 'center',
        ellipsis: {
            tooltip: true,
        },
    },
    {
        title: '故障部位及现象',
        key: 'length',
        align: 'center',
        ellipsis: {
            tooltip: true,
        },
    },
    {
        title: '故障原因分析',
        key: 'length',
        align: 'center',
        ellipsis: {
            tooltip: true,
        },
    },
    {
        title: '修理情况及技术结论',
        key: 'length',
        align: 'center',
        ellipsis: {
            tooltip: true,
        },
    },
]);
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
        key: 'length',
        align: 'center',
        ellipsis: {
            tooltip: true,
        },
    },

]);


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
        key: 'length',
        align: 'center',
        ellipsis: {
            tooltip: true,
        },
    },
    {
        title: '校验检定倒计时',
        key: 'length',
        align: 'center',
        ellipsis: {
            tooltip: true,
        },
    },
]);
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
        key: 'length',
        align: 'center',
        ellipsis: {
            tooltip: true,
        },
    },
    {
        title: '定检倒计时',
        key: 'length',
        align: 'center',
        ellipsis: {
            tooltip: true,
        },
    },
]);
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
]);

const dataTable: Song[] = [
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
watch(
    () => active.value,
    () => {
        console.log(barChart.value);
        // barChart.value.renderCharts();
    }
);
export default defineComponent({
    setup() {
        // const message = useMessage()
        const showDropdownRef = ref(false);
        const optionsRef = ref<DropdownOption[]>([]);
        const xRef = ref(0);
        const yRef = ref(0);
        return {
            style,
            type,
            lot,
            lots,
            standAlone,
            types,
            cardType,
            chooseType,
            lists,
            lists1,
            lefts,
            active,
            barChart,
            columns,
            columns1,
            columns5,
            columns6,
            columns9,
            dataTable,
            data: createData(),
            defaultExpandedKeys: ref(['40', '41']),
            showDropdown: showDropdownRef,
            x: xRef,
            y: yRef,
            options: optionsRef,
            handleSelect: () => {
                showDropdownRef.value = false;
            },
            handleClickoutside: () => {
                showDropdownRef.value = false;
            },
            nodeProps: ({ option }: { option: TreeOption }) => {
                return {
                    onClick() {
                        // console.log(option.label);
                        standAlone.value = option.label;
                        // message.info('[Click] ' + option.label)
                    },
                    onContextmenu(e: MouseEvent): void {
                        optionsRef.value = [option];
                        showDropdownRef.value = true;
                        xRef.value = e.clientX;
                        yRef.value = e.clientY;
                        console.log(e.clientX, e.clientY);
                        e.preventDefault();
                    },
                };
            },
        };
    },
});
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
                    <div class="text-center text-4 mb-9.5 font-bold">
                        产品检索
                    </div>
                    <n-select
                        class="text-center w-80% m-auto mb-7.5"
                        v-model:value="type"
                        :options="types"
                    />
                    <n-select
                        class="text-center w-80% m-auto mb-10"
                        v-model:value="lot"
                        :options="lots"
                    />
                    <div
                        class="h-5 mb-5 bg-contain bg-center bg-no-repeat"
                        :style="`background-image:url(${style.bgImages.title}) `"
                    ></div>
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
                            :options="(options as any)"
                            :x="x"
                            :y="y"
                            @select="handleSelect"
                            @clickoutside="handleClickoutside"
                        />
                    </div>
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
                            <ListItem :lists="lists" v-if="item.type == 1" />
                            <ListItem :lists="lists1" v-if="item.type == 2" />
                            <div class="flex-1 h-full" v-if="item.type == 3">
                                <RadarChart v-if="item.echart == 'radar'" />
                                <LineChart v-if="item.echart == 'line'" />
                            </div>
                            <div class="flex h-full" v-if="item.type == 7">
                                <div class="left-ul mr-6">
                                    <div
                                        class="px-2.5 w-9 py-4"
                                        :class="{ in: item.id == active }"
                                        v-for="(item, index) in lefts"
                                        :key="index"
                                        @click="active = item.id"
                                    >
                                        {{ item.title }}
                                    </div>
                                </div>
                                <div class="flex-1 h-full">
                                    <BarChart
                                        v-if="item.echart == 'bar'"
                                        ref="barChart"
                                    />
                                    <PieChart
                                        v-if="item.echart == 'pie'"
                                        ref="pieChart"
                                    />
                                </div>
                            </div>
                            <template v-if="item.type == 8">
                                <n-select class="w-40 mb-2" :options="types" />
                                <div class="w-full h-80%">
                                    <LineChart ref="barChart" />
                                </div>
                            </template>
                            <template v-if="item.type == 4">
                                <n-data-table
                                    :max-height="'calc((100vh - 38rem) / 3)'"
                                    :data="dataTable"
                                    :columns="item.span==1?columns1:columns"
                                    :bordered="false"
                                    :remote="true"
                                />
                            </template>
                            <template v-if="item.type == 5">
                                <n-data-table
                                    :max-height="'calc((100vh - 38rem) / 3)'"
                                    :data="dataTable"
                                    :columns="columns5"
                                    :bordered="false"
                                    :remote="true"
                                />
                            </template>
                            <template v-if="item.type == 6">
                                <n-data-table
                                    :max-height="'calc((100vh - 38rem) / 3)'"
                                    :data="dataTable"
                                    :columns="columns6"
                                    :bordered="false"
                                    :remote="true"
                                />
                            </template>
                            <template v-if="item.type == 9">
                                <n-data-table
                                    :max-height="'calc((100vh - 38rem) / 3)'"
                                    :data="dataTable"
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

<style lang="less" >
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
        background: no-repeat top/100%;
        background-size: 100% 100%;
        color: var(--color-primary);
        padding: 2.5rem;
    }
    .n-base-selection__state-border {
        background: url(~/assets/images/nationSituation/top.png) no-repeat
            center/cover;
    }
    .border-1 {
        height: calc(100vh - 27rem);
        overflow: auto;
    }
    .left-ul {
        display: inline-block;
        > div {
            background: var(--color-tb1);
            border: 2px solid var(--color-primary);
            &.in {
                background: var(--color-bg3);
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
            color: var(--color-primary);
        }
        .n-scrollbar,
        .n-data-table-td {
            padding-left: 0;
            padding-right: 0;
            background-color: transparent;
            // color: #bdcfd8;
            // border-color: var(--color-bg1);
        }
    }
}
</style>
