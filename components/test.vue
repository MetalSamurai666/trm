<template>
    <div :class="testState ? 'test' : 'test closed'">
                <span>{{ $t('testing') }}</span>
                <button class="close" @click="close">
                    <img src="/logos/close.svg">
                </button>
    </div>
</template>

<script setup>
    const testState = ref(true)
    function close() {
        testState.value = !testState.value
    }
</script>

<style lang="scss">
    @import '@/assets/styles/main.scss';
    .test{
        background-color: #ffc400;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 20;
        padding: 7px 10px;
        transition: .2s linear;
        display: flex;
        align-items: center;
        font-size: 14px;
        .close{
            display: flex;
            margin-left: 15px;
            img{
                width: 15px;
                height: 15px;
                filter: invert(1);
            }
        }
        &.closed{
            top: -100px;
        }
    }
</style>