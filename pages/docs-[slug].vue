<script setup>

    import { useMainStore } from "@/store/main";
    const mainStore = useMainStore()
    const route = useRoute()
    const { locale } = useI18n()

    const docs = ref([])
    const getData = async (slug, lang) => {
        let res = await mainStore.getDocs(slug, lang)
        if (res.data.value) {
            docs.value = res.data.value
            console.log(docs.value, 'docs val')
        }
    }

    watch(
        () => locale.value,
        () => getData(route.params.slug, locale.value)
    )

    onMounted(() => {
        getData(route.params.slug, locale.value)
    })

</script>

<template>
    <NuxtLayout>
        <div class="page">
            <Bread 
                :breadTitle="$t('files')"
            />
            <fileList 
                :list="docs"
                :listType="'docs'"
            />
        </div>
    </NuxtLayout>
</template>

<style lang="scss">

</style>