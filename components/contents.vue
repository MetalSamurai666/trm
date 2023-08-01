<script setup>

    import { useMainStore } from "@/store/main";
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

    watch(
        () => locale.value,
        () => getData(locale.value)
    )

    onMounted(() => {
        getData(locale.value)
    })
</script>

<template>
    <div class="contents">
        <div class="container">
            <div class="contents__box">
                <div class="contents__head">
                    <div class="contents__title">Axborot xizmati</div>
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
                            <li class="item">
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/-caqXHhEvWM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </li>
                            <li class="item">
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/8waPOxWiAjU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </li>
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