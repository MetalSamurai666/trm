<script setup>
    import { useMainStore } from "@/store/main";
    const mainStore = useMainStore()
    const { locale } = useI18n()

    const docs = ref([])
    const getData = async (lang) => {
        let res = await mainStore.getAllFiles(lang)
        if (res.data.value) {
            docs.value = res.data.value
            console.log(docs.value, 'docs')
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
    <NuxtLayout>
        <div class="files">
            <Bread 
                :bread-title="'Fayllar'"
            />
            <fileList 
                :list="docs"
            />
        </div>
    </NuxtLayout>
</template>

<style>

</style>