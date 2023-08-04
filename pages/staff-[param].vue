<script setup>
    import { useMainStore } from "@/store/main";
    const mainStore = useMainStore()
    const { locale } = useI18n()
    const route = useRoute()

    const staff = ref([])
    const getData = async (param, lang) => {
        let res = await mainStore.getAllWorkers(param, lang)
        if (res.data.value) {
            staff.value = res.data.value
            console.log(staff.value);
        }
    }

    watch(
        () => locale.value,
        () => getData(route.params.param, locale.value)
    )

    onMounted(() => {
        getData(route.params.param, locale.value)
    })
</script>

<template>
    <NuxtLayout>
        <div class="page">
            <Bread 
                :bread-title="$t('staff')"
            />
            <StaffList
                :list="staff"
            />
        </div>
    </NuxtLayout>
</template>

<style lang="scss">

</style>