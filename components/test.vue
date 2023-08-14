<template>
    <div class="test">
        <div class="position-relative marquee-container d-none d-sm-block">
            <div class="marquee d-flex justify-content-around">
                <span>{{ $t('testing') }}</span>

            </div>
            <div class="marquee marquee2 d-flex justify-content-around">
                <span>{{ $t('testing') }}</span>

            </div>
        </div>
    </div>
</template>

<script setup> 

</script>

<style lang="scss">
    @import '@/assets/styles/main.scss';

    .marquee-container {
        height: 30px;
        overflow: hidden;
        line-height: 30px;
        position: relative;
        background-color: #ffc400;
        font-weight: 500;
        .marquee {
            top: 0;
            left: 100%;
            width: 100%;
            overflow: hidden;
            position: absolute;
            white-space: nowrap;
            animation: marquee 30s linear infinite;
        }

        .marquee2 {
            animation-delay: 15s;
        }
        b {
            padding-left: 10px;
        }
        }

        @keyframes marquee {
        0% {
            left: 100%;
        }
        100% {
            left: -100%
        }
    }
</style>