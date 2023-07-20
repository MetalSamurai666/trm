<script setup>
  import { useMainStore } from "@/store/main";

  const mainStore = useMainStore()
  // const { locale } = useI18n()

  const getData = async (val) => {
    await mainStore.getSuperCats(val)
  }

  onMounted(() => {
    document.title = 'TRM'
    getData('uz')
  })

</script>

<template>
  <meta name="theme-color" content="#1C4077" />
  <NuxtPage />
</template>
