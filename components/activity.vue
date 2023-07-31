<script setup>
    import { Splide, SplideSlide } from '@splidejs/vue-splide';

    const slider = ref([
        {   
            slug: 'asd',
            logo: 'education',
            title: 'O’quv-metodik komplekslarni ishlab chiqish va joriy etish',
            info: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor'
        },
        {   
            slug: 'asd',
            logo: 'bookmark',
            title: 'Ta’lim sifatini baholash va monitoring qilish',
            info: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor'
        },
        {   
            slug: 'asd',
            logo: 'book',
            title: 'Pedagogik texnologiyalar',
            info: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor'
        },
    ])
</script>

<template>
    <div class="activity">
        <div class="container">
            <div class="activity__box">
                <div class="activity__head">
                    <div class="activity__title">faoliyat</div>
                </div>

                <div class="activity__body">
                    <div class="activity__slider">
                        <Splide 
                            :options="{ 
                                type: 'loop',
                                // rewind: true,
                                perPage: 3.5,
                                perMove: 1,
                                gap: 20,
                                arrows: false,
                                pagination: false,
                                classes: {
                                    arrows: 'splide__arrows slider-arrows',
                                    arrow : 'splide__arrow slider-arrow',
                                    prev  : 'splide__arrow--prev slider-prev',
                                    next  : 'splide__arrow--next slider-next',

                                    pagination: 'splide__pagination slider-pagination',
                                    page      : 'splide__pagination__page slider-page',
                                },
                                breakpoints: {
                                    500: {
                                        perPage: 1,
                                        gap: 10,
                                        pagination: true,
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
                                        <img :src="`/logos/${item?.logo}.svg`" alt="">
                                    </div>
                                    <nuxt-link :to="item?.slug" class="slide__title">
                                        {{ item?.title }}
                                    </nuxt-link>
                                    <div class="slide__info">{{ item?.info }}</div>
                                </div>

                                <div class="slide__btn">
                                    <nuxt-link :to="item?.slug">
                                        <img src="/logos/arrow-left.svg">
                                    </nuxt-link>
                                </div>
                            </SplideSlide>
                        </Splide>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/activity.scss';
</style>