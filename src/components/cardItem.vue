<!--
 * @Author: yxx
 * @Date: 2022-10-24 09:05:03
 * @LastEditTime: 2022-12-02 14:49:33
 * @LastEditors: yxx
 * @Description:卡片
 * @FilePath: \project20221116\src\components\cardItem.vue
-->
<script setup lang="ts">
import icon0 from '~/assets/images/nationSituation/icon0.png';
import icon1 from '~/assets/images/nationSituation/icon1.png';
import icon2 from '~/assets/images/nationSituation/icon2.png';
import icon3 from '~/assets/images/nationSituation/icon3.png';
import icon4 from '~/assets/images/nationSituation/icon4.png';
import icon5 from '~/assets/images/nationSituation/icon5.png';
import icon6 from '~/assets/images/nationSituation/icon6.png';
import icon7 from '~/assets/images/nationSituation/icon7.png';
import icon8 from '~/assets/images/nationSituation/icon8.png';
import icon9 from '~/assets/images/nationSituation/icon9.png';
import icon10 from '~/assets/images/nationSituation/icon10.png';

const icons = ref([
    icon0,
    icon1,
    icon2,
    icon3,
    icon4,
    icon5,
    icon6,
    icon7,
    icon8,
    icon9,
    icon10,
]);

withDefaults(
    defineProps<{
        item?: Object;
    }>(),
    {}
);
const userStore = useUserStore();
const style =
    userStore.themeColor[
        userStore.commonStyle as keyof typeof userStore.themeColor
    ];
</script>

<template>
    <div
        class="card-item pt-2.5 px-8 pb-5"
        :style="`background-image:url(${style.bgImages[`bg${item.span}`]}) `"
    >
        <div
            class="
                title
                h-10
                leading-10
                text-center text-white
                font-bold
                text-4
            "
            :style="`background-image:url(${style.bgImages.top}) `"
        >
            <img w-4 align-middle :src="icons[item.type]" alt="" />
            {{ item.title }}
        </div>
        <div class="card-info py-5">
            <slot />
        </div>
    </div>
</template>

<style lang="less" scoped>
.card-item {
    height: calc((100vh - 10.1rem) / 3);
    background: no-repeat center/100%;
    background-size: 100% 100%;

    .title {
        background: no-repeat center/contain;
    }

    .card-info {
        height: calc((100% - 2rem));
    }
}
</style>
