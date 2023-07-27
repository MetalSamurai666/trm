<script setup>
    import { useMainStore } from "@/store/main";
    const mainStore = useMainStore()
    const { locale } = useI18n()

    const gallery = ref([])
    const getData = async (lang) => {
        let res = await mainStore.getAllPics(lang)
        if (res.data.value) {
            gallery.value = res.data.value
            // console.log(gallery.value, 'gallery')
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
        <div class="gallery">
            <ImgModal />
            <Bread
                :bread-title="'Galereya'"
            />
            <Images 
                :list="gallery"
            />
        </div>
    </NuxtLayout>
</template>

<style lang="scss">

</style>