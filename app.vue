<script setup>
  import { useMainStore } from "@/store/main";

  const mainStore = useMainStore()
  const { locale } = useI18n()

  const getData = async (val) => {
    await mainStore.getMenus(val)
  }

  watch(
    () => locale.value,
    () => {
      getData(locale.value)
    }
  )

  onMounted(() => {
    document.title = 'TRM'
    getData(locale.value)
  })

</script>

<template>
  <meta name="theme-color" content="#1C4077" />
  <NuxtPage />
</template>
