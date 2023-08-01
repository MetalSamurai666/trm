<script setup>
    import { Splide, SplideSlide } from '@splidejs/vue-splide';
    import { useMainStore } from "@/store/main";
    const mainStore = useMainStore()
    const { locale } = useI18n()

    const list = ref([])
    const getData = async (lang) => {
        let res = await mainStore.getAllActivities(lang)
        if (res.data.value) {
            list.value = res.data.value
            console.log(list.value);
        }
    }

    watch(
        () => locale.value,
        () => getData(locale.value)
    )

    onMounted(() => {
        getData(locale.value)
    })
</script>

<template>
    <div class="activity">
        <div class="container">
            <div class="activity__box">
                <div class="activity__head">
                    <div class="activity__title">{{ $t('activity') }}</div>
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
                                v-for="item, index of list" 
                                :key="index"
                            >
                                <div class="slide__box">
                                    <div class="slide__logo">
                                        <img :src="`${mainStore.url}/${item?.img}`">
                                    </div>
                                    <nuxt-link :to="`activity-${item?.slug}`" class="slide__title">
                                        {{ item?.title }}
                                    </nuxt-link>
                                    <div class="slide__info" v-html="item?.content"></div>
                                </div>

                                <div class="slide__btn">
                                    <nuxt-link :to="`activity-${item?.slug}`" class="slide__title">
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