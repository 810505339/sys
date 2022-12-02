<!--
 * @Author: yxx
 * @Date: 2022-11-28 10:44:29
 * @LastEditTime: 2022-12-02 23:04:31
 * @LastEditors: yxx
 * @Description:
 * @FilePath: \project20221116\src\components\nation\navBox.vue
-->
<script setup lang="ts">
import borderBg from '~/assets/images/nationSituation/border.png';
interface IProps {
    title: string;
    isMore?: boolean;
    modalData?: Array;
    modalCol?: Object;
}
const { isMore = true } = defineProps<IProps>();

const emit = defineEmits(['moreClick']);

const handleUpdateShow = (show: boolean) => {
    emit('moreClick');
};
</script>

<template>
    <div class="nav-box" relative w-full h="100%" box-border>
        <img :src="borderBg" w-full h="100%" absolute />
        <div relative box-border h="100%">
            <div text-base flex justify-between font-xs pt8 px-7>
                <span class="text-lg font-bold">{{ title }}</span>
                <div
                    v-if="!title"
                    class="text-color1"
                    bottom-5
                    right-5
                    cursor-pointer
                    @click="emit('moreClick')"
                >
                    更多>
                </div>

                <n-tooltip
                    placement="bottom"
                    trigger="click"
                    @update:show="handleUpdateShow"
                >
                    <template #trigger>
                        <div
                            v-if="isMore"
                            class="text-color1"
                            bottom-5
                            right-5
                            cursor-pointer
                        >
                            更多>
                        </div>
                    </template>

                    <n-card
                        w="60vw"
                        bordered
                        size="huge"
                        role="dialog"
                        aria-modal="true"
                    >
                        <n-input-group>
                            <div w="50%" class="text-color" font-bold text-5>
                                {{ title }}
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
                            :max-height="'30vh'"
                            w="100%"
                        />
                        <div></div>
                    </n-card>
                </n-tooltip>
            </div>
            <slot />
        </div>
    </div>
</template>
<style lang="less" scoped>
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
.nav-box {
    height: calc((100vh - 10.5rem) / 2);
}

.n-popover {
    .n-card {
        background: transparent;
        &.n-card--bordered {
            border: 1px solid #00c7fa !important;
        }
    }
}
</style>
<style lang="less">
.n-tooltip {
    background-color: #02152d!important;
}
</style>
