<!--
 * @Author: yxx
 * @Date: 2022-10-24 09:05:03
 * @LastEditTime: 2022-12-02 15:19:53
 * @LastEditors: yxx
 * @Description:首页头
 * @FilePath: \project20221116\src\components\indexHeader.vue
-->
<script setup lang="ts">
const userStore = useUserStore();
const style =
    userStore.themeColor[
        userStore.commonStyle as keyof typeof userStore.themeColor
    ];
</script>

<template>
    <div
        class="h-23 index-header flex px-9 bg-contain bg-center"
        :style="`background-image:url(${style.bgImages.indexHeaderBg}) `"
    >
        <div class="w-100 mt-5">欢迎您来到综保信息系统！</div>
        <div class="text-8 leading-23 flex-1 text-center font-bold">
            XXX综保信息系统
        </div>
        <div class="w-100 text-right mt-5">
            <n-icon class="text-4 text-color">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 12 12"
                >
                    <g fill="none">
                        <path
                            d="M6 1a2 2 0 1 0 0 4a2 2 0 0 0 0-4zm2.5 5h-5A1.5 1.5 0 0 0 2 7.5c0 1.116.459 2.01 1.212 2.615C3.953 10.71 4.947 11 6 11c1.053 0 2.047-.29 2.788-.885C9.54 9.51 10 8.616 10 7.5A1.5 1.5 0 0 0 8.5 6z"
                            fill="currentColor"
                        />
                    </g>
                </svg>
            </n-icon>
            <span class="mr-10 ml-2">用户名：superadmin</span>
            <span class="button"> 型号 </span>
            <n-icon class="text-4 ml-5 text-color">
                <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    enable-background="new 0 0 512 512"
                    xml:space="preserve"
                >
                    <g>
                        <g>
                            <g>
                                <path
                                    d="M192,277.4h189.7l-43.6,44.7L368,352l96-96l-96-96l-31,29.9l44.7,44.7H192V277.4z"
                                />
                            </g>
                        </g>
                        <g>
                            <path
                                d="M255.7,421.3c-44.1,0-85.5-17.2-116.7-48.4c-31.2-31.2-48.3-72.7-48.3-116.9c0-44.1,17.2-85.7,48.3-116.9
			c31.2-31.2,72.6-48.4,116.7-48.4c44,0,85.3,17.1,116.5,48.2l30.3-30.3c-8.5-8.4-17.8-16.2-27.7-23.2C339.7,61,298.6,48,255.7,48
			C141.2,48,48,141.3,48,256s93.2,208,207.7,208c42.9,0,84-13,119-37.5c10-7,19.2-14.7,27.7-23.2l-30.2-30.2
			C341.1,404.2,299.7,421.3,255.7,421.3z"
                            />
                            <rect
                                x="447.4"
                                y="255.4"
                                transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 583.767 753.7971)"
                                width="1.2"
                                height="1.2"
                            />
                        </g>
                    </g>
                </svg>
            </n-icon>
            <span class="mx-3">退出</span>
        </div>
    </div>
</template>

<style lang="less" scoped>
.index-header {
    .button {
        display: inline-block;
        width: 4.5rem;
        height: 1.5rem;
        background: url(~/assets/images/sy13.png) no-repeat center/contain;
        color: #fff;
        font-size: 0.8rem;
        text-align: center;
        cursor: pointer;
    }
}
</style>
