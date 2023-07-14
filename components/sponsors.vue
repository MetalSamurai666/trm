<script setup> 
import { Splide, SplideSlide } from "@splidejs/vue-splide";

    const slider = ref([
        {
            slug: '/',
            title: 'O‘zbekiston Respublikasi Hukumat portali'
        },
        {
            slug: '/',
            title: 'O‘zbekiston Respublikasi Hukumat portali'
        },
        {
            slug: '/',
            title: 'O‘zbekiston Respublikasi Hukumat portali'
        },
        {
            slug: '/',
            title: 'O‘zbekiston Respublikasi Hukumat portali'
        },
        {
            slug: '/',
            title: 'O‘zbekiston Respublikasi Hukumat portali'
        },
        {
            slug: '/',
            title: 'O‘zbekiston Respublikasi Hukumat portali'
        },
        {
            slug: '/',
            title: 'O‘zbekiston Respublikasi Hukumat portali'
        },
        {
            slug: '/',
            title: 'O‘zbekiston Respublikasi Hukumat portali'
        },
    ])
</script>

<template>
    <div class="sponsors">
        <div class="sponsors__box">
            <div class="sponsors__slider">
                <Splide 
                    :options="{ 
                        type: 'loop',
                        rewind: true,
                        pagination: false,
                        arrows: false,
                        perPage: 5.5,
                        perMove: 1,
                        gap: 20,
                        autoplay: true,
                        interval: 3000,
                        breakpoints: {
                            500: {
                                perPage: 1.5,
                                gap: 10
                            }
                        }
                    }"
                        class="slider splide"
                >
                    <SplideSlide 
                        class="splide__slide slide" 
                        v-for="item, index of slider" 
                        :key="index"
                    >
                        <div class="slide__box">
                            <div class="slide__logo">
                                <img src="/images/emblem.png" alt="">
                            </div>

                            <div class="slide__title">
                                <a :href="item?.slug">{{ item?.title }}</a>
                            </div>
                        </div>
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/sponsors.scss';
</style>