<script setup>
    import { Splide, SplideSlide } from '@splidejs/vue-splide'

    const slider = ref([
        {
            link: '/',
            cat: 'yangiliklar',
            date: '12/03/2069 10:32',
            title: 'Finlyandiya taʼlim platformalaridan unumli foydalanish muhokama qilindi',
            info: 'O’zbekiston Respublikasi Ta’limni rivojlantirish respublika ilmiy-metodik markaz tomonidan taqdim qilinadigan davlat interfaol xizmatlari to’g’risidagi ma’lumotlar.',
        },
        {
            link: '/',
            cat: 'xizmatlar',
            date: '02/04/2007 02:18',
            title: 'Finlyandiya taʼlim platformalaridan unumli foydalanish muhokama qilindi',
            info: 'Joriy yilning 20-dekabr kuni Taʼlim sifatini nazorat qilish davlat inspeksiyasida Edtech Finland kompaniyasi vakillari bilan uchrashuv boʻlib oʻtdi.',
        },
        {
            link: '/',
            cat: 'faoliyat',
            date: '10/08/2077 02:39',
            title: 'O’quv-metodik komplekslarni ishlab chiqish va joriy etish',
            info: 'O’zbekiston Respublikasi Ta’limni rivojlantirish respublika ilmiy-metodik markaz tomonidan taqdim qilinadigan davlat interfaol xizmatlari to’g’risidagi ma’lumotlar.',
        },
    ])
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
                                        <div class="slide__cat">{{ item.cat }}</div>
                                        <div class="slide__date">{{ item.date }}</div>
                                    </div>
                                    <div class="slide__mid">
                                        <div class="slide__title">{{ item.title }}</div>
                                        <div class="slide__info">{{ item.info }}</div>
                                    </div>
                                    <div class="slide__bot">
                                        <div class="slide__more">
                                            <nuxt-link :to="item.link">Batafsil</nuxt-link>
                                        </div>
                                        <div class="slide__all">
                                            <nuxt-link to="/">Barcha yangiliklar</nuxt-link>
                                        </div>
                                    </div>
                                </div>
                                <div class="slide__right">
                                    <div class="slide__img">
                                        <img 
                                            :data-splide-lazy="`https://picsum.photos/id/6${index}/550`"
                                            :src="`https://picsum.photos/id/6${index}/550`"
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