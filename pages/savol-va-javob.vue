<script setup>
    import { useMainStore } from "@/store/main";
    const mainStore = useMainStore()
    const { locale } = useI18n()

    const list = ref([])
    const getData = async (lang) => {
        let res = await mainStore.getAllQuestions(lang)
        if (res.data.value) {
            list.value = res.data.value
            console.log(list.value, 'list')
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
        <div class="page">
            <Bread 
                :bread-title="$t('faq')"
            />
            <Qa 
                :list="list"
            />
        </div>
    </NuxtLayout>
</template>

<style>

</style>