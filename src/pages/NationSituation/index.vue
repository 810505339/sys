<!--
 * @Author: yxx
 * @Date: 2022-10-24 09:05:03
 * @LastEditTime: 2022-12-02 23:03:50
 * @LastEditors: yxx
 * @Description:全国态势
 * @FilePath: \project20221116\src\pages\NationSituation\index.vue
-->
<script setup lang="ts">
// 产品信息data
const proInfo = [
    {
        title: 'DD',
        city: '中国运载火箭技术研究院',
        num: '10',
        dh: 'KZ20200101',
        bsm: '2110254789002',
        dw: '5685522101',
        sxm: '100245242',
        sjdw: '中国运载火箭技术研究院',
        swdw: 'XX',
        bh: 'KZBH20200101',
    },
    {
        title: '控制系统',
        city: '第五研究所',
        num: '56',
        dh: 'KZ20200101',
        bsm: '2110254789002',
        dw: '5685522101',
        sxm: '100245242',
        sjdw: '中国运载火箭技术研究院',
        swdw: 'XX',
        bh: 'KZBH20200101',
    },
    {
        title: '控制组合1',
        city: '第十二研究所',
        num: '185',
        dh: 'KZ20200101',
        bsm: '2110254789002',
        dw: '5685522101',
        sxm: '100245242',
        sjdw: '中国运载火箭技术研究院',
        swdw: 'XX',
        bh: 'KZBH20200101',
    },
    {
        title: '控制单机主',
        city: '第十六研究所',
        num: '320',
        dh: 'KZ20200101',
        bsm: '2110254789002',
        dw: '5685522101',
        sxm: '100245242',
        sjdw: '中国运载火箭技术研究院',
        swdw: 'XX',
        bh: 'KZBH20200101',
    },
    {
        title: '控制单机备',
        city: '第十二研究所',
        num: '100',
        dh: 'KZ20200101',
        bsm: '2110254789002',
        dw: '5685522101',
        sxm: '100245242',
        sjdw: '中国运载火箭技术研究院',
        swdw: 'XX',
        bh: 'KZBH20200101',
    },
    {
        title: '控制组合2',
        city: '第五研究所',
        num: '200',
        dh: 'KZ20200101',
        bsm: '2110254789002',
        dw: '5685522101',
        sxm: '100245242',
        sjdw: '中国运载火箭技术研究院',
        swdw: 'XX',
        bh: 'KZBH20200101',
    },
    {
        title: '控制单机主',
        city: '第十二研究所',
        num: '205',
        dh: 'KZ20200101',
        bsm: '2110254789002',
        dw: '5685522101',
        sxm: '100245242',
        sjdw: '中国运载火箭技术研究院',
        swdw: 'XX',
        bh: 'KZBH20200101',
    },
    {
        title: '控制单机备',
        city: '第十二研究所',
        num: '12',
        dh: 'KZ20200101',
        bsm: '2110254789002',
        dw: '5685522101',
        sxm: '100245242',
        sjdw: '中国运载火箭技术研究院',
        swdw: 'XX',
        bh: 'KZBH20200101',
    },
    {
        title: '伺服系统',
        city: '第十二研究所',
        num: '200',
        dh: 'KZ20200101',
        bsm: '2110254789002',
        dw: '5685522101',
        sxm: '100245242',
        sjdw: '中国运载火箭技术研究院',
        swdw: 'XX',
        bh: 'KZBH20200101',
    },
    {
        title: '伺服单机',
        city: '第十研究所',
        num: '280',
        dh: 'KZ20200101',
        bsm: '2110254789002',
        dw: '5685522101',
        sxm: '100245242',
        sjdw: '中国运载火箭技术研究院',
        swdw: 'XX',
        bh: 'KZBH20200101',
    },
    {
        title: '伺服机构2',
        city: '伺服机构2',
        num: '170',
        dh: 'KZ20200101',
        bsm: '2110254789002',
        dw: '5685522101',
        sxm: '100245242',
        sjdw: '中国运载火箭技术研究院',
        swdw: 'XX',
        bh: 'KZBH20200101',
    },
    {
        title: '伺服机构2',
        city: '第十二研究所',
        num: '56',
        dh: 'KZ20200101',
        bsm: '2110254789002',
        dw: '5685522101',
        sxm: '100245242',
        sjdw: '中国运载火箭技术研究院',
        swdw: 'XX',
        bh: 'KZBH20200101',
    },
    {
        title: '瞄准系统',
        city: '第二研究所',
        num: '280',
        dh: 'KZ20200101',
        bsm: '2110254789002',
        dw: '5685522101',
        sxm: '100245242',
        sjdw: '中国运载火箭技术研究院',
        swdw: 'XX',
        bh: 'KZBH20200101',
    },
    {
        title: '测发控系统',
        city: '第十三研究所',
        num: '170',
        dh: 'KZ20200101',
        bsm: '2110254789002',
        dw: '5685522101',
        sxm: '100245242',
        sjdw: '中国运载火箭技术研究院',
        swdw: 'XX',
        bh: 'KZBH20200101',
    },
];

const proCol = [
    {
        key: 'title',
        className: 'col',
        title() {
            return h(
                'div',
                {
                    class: 'title',
                },
                '产品名称'
            );
        },
        ellipsis: {
            tooltip: true,
        },
    },
    {
        title() {
            return h(
                'div',
                {
                    class: 'title',
                },
                '生产单位'
            );
        },
        key: 'city',
        className: 'col',
        ellipsis: {
            tooltip: true,
        },
    },
    {
        title() {
            return h(
                'div',
                {
                    class: 'title',
                },
                '数量'
            );
        },
        key: 'num',
        className: 'col',
        ellipsis: {
            tooltip: true,
        },
    },
];

const proCol1 = [
    {
        key: 'title',
        className: 'col',
        title() {
            return h(
                'div',
                {
                    class: 'title',
                },
                '产品名称'
            );
        },
        ellipsis: {
            tooltip: true,
        },
    },
    {
        title() {
            return h(
                'div',
                {
                    class: 'title',
                },
                '产品代号'
            );
        },
        key: 'dh',
        className: 'col',
        ellipsis: {
            tooltip: true,
        },
    },
    {
        title() {
            return h(
                'div',
                {
                    class: 'title',
                },
                '目录标识码'
            );
        },
        key: 'bsm',
        className: 'col',
        ellipsis: {
            tooltip: true,
        },
    },
    {
        title() {
            return h(
                'div',
                {
                    class: 'title',
                },
                '承制单位码'
            );
        },
        key: 'dw',
        className: 'col',
        ellipsis: {
            tooltip: true,
        },
    },
    {
        title() {
            return h(
                'div',
                {
                    class: 'title',
                },
                '生产序号码'
            );
        },
        key: 'sxm',
        className: 'col',
        ellipsis: {
            tooltip: true,
        },
    },
    {
        title() {
            return h(
                'div',
                {
                    class: 'title',
                },
                '设计单位'
            );
        },
        key: 'sjdw',
        className: 'col',
        ellipsis: {
            tooltip: true,
        },
    },
    {
        title() {
            return h(
                'div',
                {
                    class: 'title',
                },
                '生产单位'
            );
        },
        key: 'city',
        className: 'col',
        ellipsis: {
            tooltip: true,
        },
    },
    {
        title() {
            return h(
                'div',
                {
                    class: 'title',
                },
                '使用单位'
            );
        },
        key: 'swdw',
        className: 'col',
        ellipsis: {
            tooltip: true,
        },
    },
    {
        title() {
            return h(
                'div',
                {
                    class: 'title',
                },
                '出厂编号'
            );
        },
        key: 'bh',
        className: 'col',
        ellipsis: {
            tooltip: true,
        },
    },
    {
        title() {
            return h(
                'div',
                {
                    class: 'title',
                },
                '数量'
            );
        },
        key: 'num',
        className: 'col',
        ellipsis: {
            tooltip: true,
        },
    },
];

// 生产单位data
const spareInfo = [
    {
        title: 'DD',
        city: '中国运载火箭技术研究院',
        num: '100个',
        dh: 'KZ20200101',
        bsm: '2110254789002',
        dw: '5685522101',
        sxm: '100245242',
        sjdw: '中国运载火箭技术研究院',
        swdw: 'XX',
        bh: 'KZBH20200101',
    },
    {
        title: '控制系统',
        city: '第五研究所',
        num: '300个',
        dh: 'KZ20200101',
        bsm: '2110254789002',
        dw: '5685522101',
        sxm: '100245242',
        sjdw: '中国运载火箭技术研究院',
        swdw: 'XX',
        bh: 'KZBH20200101',
    },
    {
        title: '控制组合1',
        city: '第十二研究所',
        num: '1000个',
        dh: 'KZ20200101',
        bsm: '2110254789002',
        dw: '5685522101',
        sxm: '100245242',
        sjdw: '中国运载火箭技术研究院',
        swdw: 'XX',
        bh: 'KZBH20200101',
    },
    {
        title: '控制单机主',
        city: '第十六研究所',
        num: '150个',
        dh: 'KZ20200101',
        bsm: '2110254789002',
        dw: '5685522101',
        sxm: '100245242',
        sjdw: '中国运载火箭技术研究院',
        swdw: 'XX',
        bh: 'KZBH20200101',
    },
    {
        title: '控制单机备',
        city: '第十二研究所',
        num: '200个',
        dh: 'KZ20200101',
        bsm: '2110254789002',
        dw: '5685522101',
        sxm: '100245242',
        sjdw: '中国运载火箭技术研究院',
        swdw: 'XX',
        bh: 'KZBH20200101',
    },
    {
        title: '控制组合2',
        city: '第五研究所',
        num: '200个',
        dh: 'KZ20200101',
        bsm: '2110254789002',
        dw: '5685522101',
        sxm: '100245242',
        sjdw: '中国运载火箭技术研究院',
        swdw: 'XX',
        bh: 'KZBH20200101',
    },
    {
        title: '控制单机主',
        city: '第十二研究所',
        num: '205个',
        dh: 'KZ20200101',
        bsm: '2110254789002',
        dw: '5685522101',
        sxm: '100245242',
        sjdw: '中国运载火箭技术研究院',
        swdw: 'XX',
        bh: 'KZBH20200101',
    },
    {
        title: '控制单机备',
        city: '第十二研究所',
        num: '12个',
        dh: 'KZ20200101',
        bsm: '2110254789002',
        dw: '5685522101',
        sxm: '100245242',
        sjdw: '中国运载火箭技术研究院',
        swdw: 'XX',
        bh: 'KZBH20200101',
    },
    {
        title: '伺服系统',
        city: '第十二研究所',
        num: '200个',
        dh: 'KZ20200101',
        bsm: '2110254789002',
        dw: '5685522101',
        sxm: '100245242',
        sjdw: '中国运载火箭技术研究院',
        swdw: 'XX',
        bh: 'KZBH20200101',
    },
    {
        title: '伺服单机',
        city: '第十研究所',
        num: '280个',
        dh: 'KZ20200101',
        bsm: '2110254789002',
        dw: '5685522101',
        sxm: '100245242',
        sjdw: '中国运载火箭技术研究院',
        swdw: 'XX',
        bh: 'KZBH20200101',
    },
    {
        title: '伺服机构2',
        city: '伺服机构2',
        num: '170个',
        dh: 'KZ20200101',
        bsm: '2110254789002',
        dw: '5685522101',
        sxm: '100245242',
        sjdw: '中国运载火箭技术研究院',
        swdw: 'XX',
        bh: 'KZBH20200101',
    },
    {
        title: '伺服机构2',
        city: '第十二研究所',
        num: '56个',
        dh: 'KZ20200101',
        bsm: '2110254789002',
        dw: '5685522101',
        sxm: '100245242',
        sjdw: '中国运载火箭技术研究院',
        swdw: 'XX',
        bh: 'KZBH20200101',
    },
    {
        title: '瞄准系统',
        city: '第二研究所',
        num: '280个',
        dh: 'KZ20200101',
        bsm: '2110254789002',
        dw: '5685522101',
        sxm: '100245242',
        sjdw: '中国运载火箭技术研究院',
        swdw: 'XX',
        bh: 'KZBH20200101',
    },
    {
        title: '测发控系统',
        city: '第十三研究所',
        num: '170个',
        dh: 'KZ20200101',
        bsm: '2110254789002',
        dw: '5685522101',
        sxm: '100245242',
        sjdw: '中国运载火箭技术研究院',
        swdw: 'XX',
        bh: 'KZBH20200101',
    },
];

const spareCol = [
    {
        key: 'city',
        className: 'col',
        title() {
            return h(
                'div',
                {
                    class: 'title',
                },
                '生产单位'
            );
        },
        ellipsis: {
            tooltip: true,
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
                '数量'
            );
        },
        key: 'num',
        className: 'col',
        ellipsis: {
            tooltip: true,
        },
    },
];
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
];

//产品状态data
const stateInfo = [
    {
        title: 'DD',
        city: '贮存',
        time1: '20年',
        time2: '20年',
        time3: '20年',
        time4: '6个月',
    },
    {
        title: '控制系统',
        city: '值班',
        time1: '10年',
        time2: '20年',
        time3: '20年',
        time4: '6个月',
    },
    {
        title: '控制组合1',
        city: '贮存',
        time1: '5年',
        time2: '20年',
        time3: '20年',
        time4: '6个月',
    },
    {
        title: '控制单机主',
        city: '贮存',
        time1: '3年',
        time2: '20年',
        time3: '20年',
        time4: '6个月',
    },
    {
        title: '控制单机备',
        city: '贮存  ',
        time1: '3年',
        time2: '20年',
        time3: '20年',
        time4: '6个月',
    },
    {
        title: '控制组合2',
        city: '值班',
        time1: '3年',
        time2: '20年',
        time3: '20年',
        time4: '6个月',
    },
    {
        title: '控制单机主',
        city: '值班',
        time1: '5年',
        time2: '20年',
        time3: '20年',
        time4: '6个月',
    },
    {
        title: '控制单机备',
        city: '值班',
        time1: '20年',
        time2: '20年',
        time3: '20年',
        time4: '6个月',
    },
    {
        title: '伺服系统',
        city: '值班',
        time1: '5年',
        time2: '20年',
        time3: '20年',
        time4: '6个月',
    },
    {
        title: '伺服单机',
        city: '值班',
        time1: '10年',
        time2: '20年',
        time3: '20年',
        time4: '6个月',
    },
    {
        title: '伺服机构2',
        city: '值班',
        time1: '5年',
        time2: '20年',
        time3: '20年',
        time4: '6个月',
    },
    {
        title: '伺服机构2',
        city: '贮存',
        time1: '3年',
        time2: '20年',
        time3: '20年',
        time4: '6个月',
    },
    {
        title: '瞄准系统',
        city: '贮存',
        time1: '10年',
        time2: '20年',
        time3: '20年',
        time4: '6个月',
    },
    {
        title: '测发控系统',
        city: '贮存',
        time1: '20年',
        time2: '20年',
        time3: '20年',
        time4: '6个月',
    },
];

const stateCol = [
    {
        key: 'title',
        className: 'col',
        title() {
            return h(
                'div',
                {
                    class: 'title',
                },
                '产品名称'
            );
        },
        ellipsis: {
            tooltip: true,
        },
    },
    {
        title() {
            return h(
                'div',
                {
                    class: 'title',
                },
                '现有状态'
            );
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
];

const stateCol1 = [
    {
        key: 'title',
        className: 'col',
        title() {
            return h(
                'div',
                {
                    class: 'title',
                },
                '产品名称'
            );
        },
        ellipsis: {
            tooltip: true,
        },
    },
    {
        title() {
            return h(
                'div',
                {
                    class: 'title',
                },
                '现有状态'
            );
        },
        key: 'city',
        className: 'col',
        ellipsis: {
            tooltip: true,
        },
    },
    {
        title() {
            return h(
                'div',
                {
                    class: 'title',
                },
                '产品寿命倒计时'
            );
        },
        key: 'time1',
        className: 'col',
        ellipsis: {
            tooltip: true,
        },
    },
    {
        title() {
            return h(
                'div',
                {
                    class: 'title',
                },
                '定检维护倒计时'
            );
        },
        key: 'time2',
        className: 'col',
        ellipsis: {
            tooltip: true,
        },
    },
    {
        title() {
            return h(
                'div',
                {
                    class: 'title',
                },
                '校验检定倒计时'
            );
        },
        key: 'time3',
        className: 'col',
        ellipsis: {
            tooltip: true,
        },
    },
    {
        title() {
            return h(
                'div',
                {
                    class: 'title',
                },
                '维修倒计时'
            );
        },
        key: 'time4',
        className: 'col',
        ellipsis: {
            tooltip: true,
        },
    },
];
// 问题记录data
const qualityInfo = [
    {
        title: 'DD',
        city: '一般',
        time1: '启动无效',
        time2: '未知',
        time3: '20年',
        time4: '6个月',
    },
    {
        title: '控制系统',
        city: '一般',
        time1: '启动无效',
        time2: '未知',
        time3: '20年',
        time4: '6个月',
    },
    {
        title: '控制组合1',
        city: '一般',
        time1: '启动无效',
        time2: '未知',
        time3: '20年',
        time4: '6个月',
    },
    {
        title: '控制单机主',
        city: '一般',
        time1: '启动无效',
        time2: '未知',
        time3: '20年',
        time4: '6个月',
    },
    {
        title: '控制单机备',
        city: '一般  ',
        time1: '启动无效',
        time2: '未知',
        time3: '20年',
        time4: '6个月',
    },
    {
        title: '控制组合2',
        city: '一般',
        time1: '启动无效',
        time2: '未知',
        time3: '20年',
        time4: '6个月',
    },
    {
        title: '控制单机主',
        city: '一般',
        time1: '启动无效',
        time2: '未知',
        time3: '20年',
        time4: '6个月',
    },
    {
        title: '控制单机备',
        city: '一般',
        time1: '启动无效',
        time2: '未知',
        time3: '20年',
        time4: '6个月',
    },
    {
        title: '伺服系统',
        city: '一般',
        time1: '启动无效',
        time2: '未知',
        time3: '20年',
        time4: '6个月',
    },
    {
        title: '伺服单机',
        city: '一般',
        time1: '启动无效',
        time2: '未知',
        time3: '20年',
        time4: '6个月',
    },
    {
        title: '伺服机构2',
        city: '一般',
        time1: '启动无效',
        time2: '未知',
        time3: '20年',
        time4: '6个月',
    },
    {
        title: '伺服机构2',
        city: '一般',
        time1: '启动无效',
        time2: '未知',
        time3: '20年',
        time4: '6个月',
    },
    {
        title: '瞄准系统',
        city: '一般',
        time1: '启动无效',
        time2: '未知',
        time3: '20年',
        time4: '6个月',
    },
    {
        title: '测发控系统',
        city: '一般',
        time1: '启动无效',
        time2: '未知',
        time3: '20年',
        time4: '6个月',
    },
];

const qualityCol = [
    {
        key: 'title',
        className: 'col',
        title() {
            return h(
                'div',
                {
                    class: 'title',
                },
                '产品名称'
            );
        },
        ellipsis: {
            tooltip: true,
        },
    },
    {
        title() {
            return h(
                'div',
                {
                    class: 'title',
                },
                '问题性质'
            );
        },
        key: 'city',
        className: 'col',
        ellipsis: {
            tooltip: true,
        },
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
];
const qualityCol1 = [
    {
        key: 'title',
        className: 'col',
        title() {
            return h(
                'div',
                {
                    class: 'title',
                },
                '产品名称'
            );
        },
        ellipsis: {
            tooltip: true,
        },
    },
    {
        title() {
            return h(
                'div',
                {
                    class: 'title',
                },
                '问题性质'
            );
        },
        key: 'city',
        className: 'col',
        ellipsis: {
            tooltip: true,
        },
    },
    {
        title() {
            return h(
                'div',
                {
                    class: 'title',
                },
                '故障部位及现象'
            );
        },
        key: 'time1',
        className: 'col',
        ellipsis: {
            tooltip: true,
        },
    },
    {
        title() {
            return h(
                'div',
                {
                    class: 'title',
                },
                '故障原因分析'
            );
        },
        key: 'time2',
        className: 'col',
        ellipsis: {
            tooltip: true,
        },
    },
];
const mapInfo = [
    { title: '56', city: '21', num: '31' },
    { title: '56', city: '21', num: '31' },
    { title: '56', city: '21', num: '31' },
];

const mapCol = [
    {
        key: 'title',
        className: 'col',
        title() {
            return h(
                'div',
                {
                    class: 'title',
                },
                '厂家数量'
            );
        },
    },
    {
        title() {
            return h(
                'div',
                {
                    class: 'title',
                },
                '交付数量'
            );
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
                '备附件数量'
            );
        },
        key: 'num',
        className: 'col',
    },
];

const btns = ['承研单位', '使用单位'];
let Selected = $ref('承研单位');
let show = $ref(false);

let dataType = $ref('');
const modalData = $computed(() => {
    let list = [] as any[];
    switch (dataType) {
        case 'info':
            list = proInfo;
            break;
        case 'pro':
            list = spareInfo;
            break;
        case 'map':
            list = mapInfo;
            break;
        case 'state':
            list = stateInfo;
            break;
        case 'quality':
            list = qualityInfo;
            break;
        default:
            break;
    }
    return list;
});
const modalCol = $computed(() => {
    let list = [] as any[];
    switch (dataType) {
        case 'info':
            list = proCol1;
            break;
        case 'pro':
            list = spareCol;
            break;
        case 'map':
            list = mapCol;
            break;
        case 'state':
            list = stateCol1;
            break;
        case 'quality':
            list = qualityCol1;
            break;
        default:
            break;
    }
    return list;
});

const active = computed(() => {
    return Selected === '承研单位';
});

const toggle = (btn: string) => {
    Selected = btn;
};
const title1 = ref('');
const moreClick = (type: string, title: string) => {
    if (!title) {
        show = true;
    }
    dataType = type;
    title1.value = title;
};

provide('toggle', active); // 全局注入provide
provide('changeShow', {
    changeShow() {
        show = true;
        dataType = 'map';
    },
});
</script>

<template>
    <div
        class="relative flex w-100% mx-auto mt-4"
        justify-between
        items-start
        px5
    >
        <div w="20%">
            <NavBox
                title="产品信息"
                :modalData="modalData"
                :modalCol="modalCol"
                @moreClick="moreClick('info', '产品信息')"
            >
                <div flex items-center justify-center mt5>
                    <n-data-table
                        :data="proInfo"
                        :columns="proCol"
                        :bordered="false"
                        :pagination="false"
                        :max-height="'calc((100vh - 31rem) / 2)'"
                        w="85%"
                    />
                </div>
            </NavBox>
            <NavBox
                title="生产单位"
                :modalData="modalData"
                :modalCol="modalCol"
                mt5
                @moreClick="moreClick('pro', '生产单位')"
            >
                <div flex items-center justify-center mt5>
                    <n-data-table
                        :data="spareInfo"
                        :columns="spareCol"
                        :bordered="false"
                        :pagination="false"
                        :max-height="'calc((100vh - 31rem) / 2)'"
                        w="85%"
                    />
                </div>
            </NavBox>
        </div>
        <div w="60%">
            <div text="#00FFFF" flex justify-center>
                <div
                    v-for="(btn, index) in btns"
                    :key="index"
                    text-base
                    border="~ #00FFFF"
                    box-border="~"
                    px="3"
                    py="1"
                    cursor-pointer="~"
                    :class="[
                        Selected === btn ? 'active' : '',
                        index ? 'rounded-r-md' : 'rounded-l-md',
                    ]"
                    @click="toggle(btn)"
                >
                    {{ btn }}
                </div>
            </div>
            <Map />
        </div>
        <div w="20%">
            <NavBox
                title="产品状态"
                :modalData="modalData"
                :modalCol="modalCol"
                @moreClick="moreClick('state', '产品状态')"
            >
                <div flex items-center justify-center mt5>
                    <n-data-table
                        :data="stateInfo"
                        :columns="stateCol"
                        :bordered="false"
                        :pagination="false"
                        :max-height="'calc((100vh - 31rem) / 2)'"
                        w="85%"
                    />
                </div>
                <!-- <div class="w-80% h-80% m-auto" flex items-center justify-center>
          <BarChart />
        </div> -->
            </NavBox>
            <NavBox
                title="问题记录"
                :modalData="modalData"
                :modalCol="modalCol"
                mt5
                @moreClick="moreClick('quality', '问题记录')"
            >
                <div flex items-center justify-center mt5>
                    <n-data-table
                        :data="qualityInfo"
                        :columns="qualityCol"
                        :bordered="false"
                        :pagination="false"
                        :max-height="'calc((100vh - 31rem) / 2)'"
                        w="85%"
                    />
                </div>
            </NavBox>
        </div>
    </div>
    <n-modal v-model:show="show">
        <n-card w="9/12" bordered size="huge" role="dialog" aria-modal="true">
            <n-input-group>
                <div w="50%" class="text-color" font-bold text-5>
                    <!-- {{ title1 }} -->
                </div>
                <n-input
                    :style="{ width: '50%' }"
                    placeholder="请输入要查询内容"
                />
                <n-button type="info"> 搜索 </n-button>
            </n-input-group>
            <n-data-table
                mt10
                :data="modalData"
                :columns="modalCol"
                :bordered="false"
                :pagination="false"
                :max-height="'50vh'"
                w="100%"
            />
            <div></div>
        </n-card>
    </n-modal>
</template>

<style lang="css" scoped>
:deep(.col) {
    color: #fff !important;
    background: #02152d;
    text-align: center;
}

:deep(.title) {
    width: 100%;
    text-align: center;
    color: var(--color-primary1);
    font-weight: bold;
}

:deep(.n-data-table) {
    border-top: none;
}

.active {
    background: var(--color-primary1);
    font-weight: bold;
    color: #02152d;
    font-size: 1.125rem;
}

.n-card.n-modal {
    background-color: #02152d !important;
}

.n-card.n-card--bordered {
    border: 1px solid #00c7fa !important;
}

:deep(.n-button::active) {
    background-color: #00c7fa !important;
}
</style>
