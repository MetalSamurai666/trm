<script setup>
    import { useMainStore } from "@/store/main";
    const mainStore = useMainStore()
    const { locale } = useI18n()

    const staff = ref([])
    const getData = async (lang) => {
        let res = await mainStore.getAllWorkers(lang)
        if (res.data.value) {
            staff.value = res.data.value
            console.log(staff.value, 'staff')
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
        <div class="staff">
            <Bread 
                :bread-title="'Rahbariyat'"
            />
            <StaffList
                :list="staff"
            />
        </div>
    </NuxtLayout>
</template>

<style lang="scss">

</style>