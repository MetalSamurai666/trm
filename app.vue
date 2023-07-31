<script setup>
  import { useMainStore } from "@/store/main";

  const mainStore = useMainStore()
  const { locale, t } = useI18n()

  const getData = async (val) => {
    await mainStore.getMenus(val)
    useSeoMeta({
      title: t('app_title_short')+' | '+t('app_title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: t('app_title_short')+' | '+t('app_title')
        }
      ]
    })
  }

  watch(
    () => locale.value,
    () => {
      getData(locale.value)
    }
  )

  onMounted(() => {
    
    getData(locale.value)
  })

</script>

<template>
  <meta name="theme-color" content="#1C4077" />
  <NuxtPage />
</template>
