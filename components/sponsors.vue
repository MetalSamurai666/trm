<script setup> 
    import { Splide, SplideSlide } from "@splidejs/vue-splide";

    import imgEmblem from '/logo.svg'
    import imgEdu from '/logos/sponsors/edu.png'
    import imgUzedu from '/logos/sponsors/uzedu.svg'
    import imgPiima from '/logos/sponsors/piima.svg'

    import { useMainStore } from "@/store/main";
    const mainStore = useMainStore()
    const { locale } = useI18n()

    const sponsors = ref([])
    const getData = async (lang) => {
        let res = await mainStore.getAllSponsors(lang)
        if (res.data.value) {
            sponsors.value = res.data.value
            // console.log(sponsors.value, 'sponsors')
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
                            1280: {
                                perPage: 4
                            },
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
                        v-for="item, index of sponsors" 
                        :key="index"
                    >
                        <div class="slide__box">
                            <div class="slide__logo">
                                <img :src="`${mainStore.url}/${item?.img}`">
                            </div>

                            <div class="slide__title">
                                <a target="_blank" :href="item?.link">{{ item?.title }}</a>
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