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
                :breadTitle="page?.title"
            />
            <Article 
                :article="page"
            />
            <Sponsors />
        </div>
    </nuxt-layout>
</template>

<style lang="scss">
</style>