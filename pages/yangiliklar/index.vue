<script setup>
    import { storeToRefs } from "pinia";
    import { VueAwesomePaginate } from "vue-awesome-paginate";
    import { useMainStore } from "~/store/main";
    
    const mainStore = useMainStore()
    const { locale } = useI18n()
    
    const list = ref([])

    const currentPage = ref(1)
    
    const getData = async (next, lang) => {
        // console.log(next, lang)
        let res = await mainStore.getAllNews(next, lang)
        if (res.data.value) {
            list.value = res.data.value
            // console.log(list.value)
        }
    }

    watch(
        () => locale.value,
        () => getData(locale.value)
    )

    const onClickHandler = (next) => {
        getData(next, locale.value)
        window.scrollTo({ top: 70, behavior: 'smooth' })
    }

    onMounted(() => {
        getData(1, locale.value)
    })
    
</script>

<template>
    <nuxt-layout>
        <div class="page">
            <Bread 
                :breadTitle="$t('news')"
            />
            <List 
                :list="list?.news"
            />

            <div class="container">
                <vue-awesome-paginate
                    :total-items="list?.count"
                    :items-per-page="9"
                    :max-pages-shown="4"
                    v-model="currentPage"
                    :on-click="onClickHandler"
                    style="margin-top: 20px;"
                >
                    <template #prev-button>
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="black"
                                width="8"
                                height="8"
                                viewBox="0 0 24 24"
                            >
                                <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
                            </svg>
                        </span>
                    </template>

                    <template #next-button>
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="black"
                                width="8"
                                height="8"
                                viewBox="0 0 24 24"
                            >
                                <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
                            </svg>
                        </span>
                    </template>
                </vue-awesome-paginate>
            </div>

            <Sponsors />
        </div>
    </nuxt-layout>
</template>

<style>

</style>