<script setup>
    import { Splide, SplideSlide } from '@splidejs/vue-splide'

    import { useMainStore } from "@/store/main";
    const mainStore = useMainStore()
    const { locale } = useI18n()

    const slider = ref([])
    const getData = async (lang) => {
        let res = await mainStore.getNewsSlider(lang)
        if (res.data.value) {
            slider.value = res.data.value
            // console.log(slider.value);
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
    <div class="welcome">
        <div class="container">
            <div class="welcome__box">
                <div class="welcome__slider">
                    <Splide 
                        :options="{ 
                            type: 'fade',
                            rewind: true,
                            pagination: false,
                            lazyLoad: true,
                            autoplay: true,
                            pauseOnFocus: false,
                            classes: {
                                arrows: 'splide__arrows slider-arrows',
                                arrow : 'splide__arrow slider-arrow',
                                prev  : 'splide__arrow--prev slider-prev',
                                next  : 'splide__arrow--next slider-next',

                                pagination: 'splide__pagination slider-pagination',
                                page      : 'splide__pagination__page slider-page',
                            },
                            breakpoints:{
                                500:{
                                    arrows: false,
                                    autoplay: true,
                                    interval: 2500,
                                    pauseOnHover: false,
                                    pauseOnFocus: false
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
                                <div class="slide__left">
                                    <div class="slide__top">
                                        <div class="slide__date">{{ item?.date.slice(0, 10) }}</div>
                                    </div>
                                    <div class="slide__mid">
                                        <div class="slide__title">{{ item?.title }}</div>
                                        <div class="slide__info" v-html="item?.content"></div>
                                    </div>
                                    <div class="slide__bot">
                                        <div class="slide__more">
                                            <nuxt-link :to="localePath(`/yangiliklar/${item?.slug}`)">{{ $t('more') }}</nuxt-link>
                                        </div>
                                        <div class="slide__all">
                                            <nuxt-link :to="localePath('/yangiliklar')">{{ $t('all_news') }}</nuxt-link>
                                        </div>
                                    </div>
                                </div>
                                <div class="slide__right">
                                    <div class="slide__img">
                                        <img 
                                            :data-splide-lazy="`${mainStore.url}/${item?.img}`"
                                            :src="`${mainStore.url}/${item?.img}`"
                                        />
                                    </div>
                                </div>
                            </div>
                        </SplideSlide>
                    </Splide>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/welcome.scss';
</style>