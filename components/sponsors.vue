<script setup> 
import { Splide, SplideSlide } from "@splidejs/vue-splide";

import imgEmblem from '@/public/images/emblem.png'
import imgEdu from '@/public/logos/sponsors/edu.png'
import imgUzedu from '@/public/logos/sponsors/uzedu.svg'
import imgPiima from '@/public/logos/sponsors/piima.svg'

    const slider = ref([
        {
            img: imgEdu,
            slug: 'https://edu.uz/uz',
            title: 'O‘zbekiston Respublikasi oliy ta‘lim, fan va innovatsiyalar vazirligi'
        },
        {
            img: imgUzedu,
            slug: 'https://uzedu.uz/uz',
            title: 'Maktabgacha va maktab ta‘limi vazirligi'
        },
        {
            img: imgEmblem,
            slug: 'https://president.uz/',
            title: 'O‘zbekiston Respublikasi prezidenti'
        },
        {
            img: imgEmblem,
            slug: 'https://gov.uz/',
            title: 'O‘zbekiston Respublikasi Hukumat portali'
        },
        {
            img: imgPiima,
            slug: 'https://piima.uz/',
            title: 'Ixtisoslashtirilgan ta‘lim muassasalari agentligi'
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
                                <img :src="item?.img" alt="">
                            </div>

                            <div class="slide__title">
                                <a target="_blank"  :href="item?.slug">{{ item?.title }}</a>
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