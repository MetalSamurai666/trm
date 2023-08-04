<script setup>
  import { useMainStore } from "@/store/main";

  const mainStore = useMainStore()
  const { locale, t } = useI18n()

  const getData = async (val) => {
    await mainStore.getMenus(val)
    useSeoMeta({
      title: t('app_title_short')+' | '+t('app_title').split('<br>').join(''),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: t('app_title_short')+' | '+t('app_title')
        }
      ]
    })
  }

  const getSocials = async () => {
    await mainStore.getSocials()
  }

  watch(
    () => locale.value,
    () => {
      getData(locale.value)
    }
  )

  onMounted(() => {
    getData(locale.value)
    getSocials()
  })

</script>

<template>
  <div class="app">
    <meta name="theme-color" content="#1C4077" />
    <NuxtPage />
  </div>
</template>


<style lang="scss">
  .app{
    display: flex;
    flex-direction: column;
  }
</style>