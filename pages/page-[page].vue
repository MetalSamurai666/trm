<script setup>
    import { useMainStore } from "@/store/main";
    const mainStore = useMainStore()
    const route = useRoute()
    const { locale } = useI18n()

    const page = ref({})
    const getData = async (lang) => {
        let res = await mainStore.getOnePage(route.params.page, lang)
        if (res.data.value) {
            page.value = res.data.value
            console.log(page.value, 'page')
        }
    }

    const rand = ref([])
    const getRand = async (lang) => {
        let res = await mainStore.getNewsSlider(lang)
        if (res.data.value) {
            rand.value = res.data.value
            console.log(rand.value);
        }
    }

    watch(
        () => locale.value,
        () => getData(locale.value)
    )

    onMounted(() => {
        getData(locale.value)
        getRand(locale.value)
    })
</script>

<template>
    <nuxt-layout>
        <div class="page">
            <Bread 
                :breadTitle="page?.title"
            />
            <Article 
                :article="page"
                :rand="rand"
            />
            <Sponsors />
        </div>
    </nuxt-layout>
</template>

<style lang="scss">
</style>