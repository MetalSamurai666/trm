<script setup>
    import { storeToRefs } from "pinia";
    import { useMainStore } from "~/store/main";
    const mainStore = useMainStore()
    const { locale } = useI18n()
    
    const list = ref([])
    
    const getData = async (lang) => {
        let res = await mainStore.getAllNews(lang)
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
    <nuxt-layout>
        <div class="category">
            <Bread 
                :breadTitle="$t('news')"
            />
            <List 
                :list="list"
            />
            <Sponsors />
        </div>
    </nuxt-layout>
</template>

<style>

</style>