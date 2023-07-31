<script setup>
    import { useMainStore } from "@/store/main";
    const mainStore = useMainStore()
    const route = useRoute()
    const { locale } = useI18n()

    const newbie = ref({})
    const getData = async (lang) => {
        let res = await mainStore.getOneNews(route.params.slug, lang)
        if (res.data.value) {
            newbie.value = res.data.value
            // console.log(newbie.value, 'newbie')
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
    <nuxt-layout>
        <div>
            <Bread 
                :breadTitle="newbie?.news?.title"
                :breadType="'news'"
            />
            <Article 
                :article="newbie?.news"
                :rand="newbie?.rand_news"
            />
            <Sponsors />
        </div>
    </nuxt-layout>
</template>

<style lang="scss">
</style>