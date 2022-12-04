<!--
 * @Author: yxx
 * @Date: 2022-10-24 09:05:03
 * @LastEditTime: 2022-12-03 17:09:32
 * @LastEditors: yxx
 * @Description:卡片---li
 * @FilePath: \project20221116\src\components\listItem.vue
-->
<script setup lang="ts">
const userStore = useUserStore();
const style =
    userStore.themeColor[
        userStore.commonStyle as keyof typeof userStore.themeColor
    ];
const props = withDefaults(
    defineProps<{
        lists?: Array;
        type?: Number;
    }>(),
    {}
);
</script>

<template>
    <div class="ul">
        <div v-for="(item, index) in lists" :key="index" class="li">
            <span font-bold>{{ item.name }}</span>
            {{ item.value }}
        </div>
    </div>
</template>

<style lang="less" scoped>
.ul {
    height: 100%;
    overflow: auto;
    .li {
        // color: var(--color-text1);
        margin-bottom: 1rem;
        &::before {
            content: '';
            display: inline-block;
            width: 0.4rem;
            height: 0.4rem;
            background-color: var(--color-primary1);
            border-radius: 50%;
            margin-right: 0.6rem;
        }
        span {
            color: var(--color-primary1);
        }
    }
}
</style>
