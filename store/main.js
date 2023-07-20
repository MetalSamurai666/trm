import { defineStore } from 'pinia'

export const useMainStore = defineStore('indexId', () => {
    const url = ref('https://trmapi.of-astora.uz')
    const cats = ref([])

    const getSuperCats = async (lang) => {
        const res = await useFetch(url.value+`/api/category/all/?lang=${lang}`)
        if (res.data.value) {
            cats.value = res.data.value
        }
    }

    const getOneCat = (slug, lang) => {
        // console.log(slug, lang);
        return useFetch(url.value+`/api/category/get/${slug}/?lang=${lang}`)
        .catch(er => console.log(er))
    }

    return {
        cats,
        url,
        getSuperCats,
        getOneCat
    }
})