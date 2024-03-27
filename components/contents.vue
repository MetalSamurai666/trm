<script setup>
    import { useMainStore } from "@/store/main";
    import { getId } from '@/utils/videos.js'
    
    const mainStore = useMainStore()
    const { locale } = useI18n()

    const list = ref([])
    const getData = async (lang) => {
        let res = await mainStore.getNewsMain(lang)
        if (res.data.value) {
            list.value = res.data.value
            // console.log(list.value);
        }
    }

    const videos = ref([])
    const getVids = async (lang) => {
        let res = await mainStore.getVideos(lang)
        if (res.data.value) {
            videos.value = res.data.value.map(item => {
                item.link = getId(item?.url)
                return item
            })
            console.log(videos.value)
        }
    }

    watch(
        () => locale.value,
        () => getData(locale.value)
    )

    onMounted(() => {
        getData(locale.value)
        getVids()
    })
</script>

<template>
    <div class="contents">
        <div class="container">
            <div class="contents__box">
                <div class="contents__head">
                    <div class="contents__title">{{ $t('information_service') }}</div>
                </div>
                <div class="contents__body">
                    <div class="contents__left">
                        <CardsCard
                            class="big"
                            :card="list[0]"
                        />
                    </div>

                    <div class="contents__mid">
                        <ul class="contents__list">
                            <CardsCard
                                v-for="item, index of list.slice(1)"
                                :key="index"
                                :card="item"
                            />
                        </ul>
                    </div>
                    
                    <div class="contents__right">
                        <ul class="contents__video">
                            <div v-for="item of videos" :key="item?._id">
                                <div class="item" v-html="item?.link"></div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/contents.scss';
</style>