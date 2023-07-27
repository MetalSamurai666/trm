import { defineStore } from 'pinia'

export const useMainStore = defineStore('indexId', () => {
    const url = ref('https://trmapi.of-astora.uz')
    const cats = ref([])

    const getSuperCats = async (lang) => {
        return useFetch(url.value+`/api/category/all/?lang=${lang}`)
        .catch(er => console.log(er))
    }

    const getOneCat = (slug, lang) => {
        // console.log(slug, lang);
        return useFetch(url.value+`/api/category/get/${slug}/?lang=${lang}`)
        .catch(er => console.log(er))
    }

    const getAllPages = (lang) => {
        // console.log(lang);
        return useFetch(url.value+`/api/page/all/?lang=${lang}`)
        .catch(er => console.log(er))
    }
    
    const getOnePage = (slug, lang) => {
        console.log(slug, lang)
        return useFetch(url.value+`/api/page/one/${slug}/?lang=${lang}`)
        .catch(er => console.log(er))
    }

    const getAllWorkers = (lang) => {
        // console.log(lang);
        return useFetch(url.value+`/api/worker/all/?lang=${lang}`)
        .catch(er => console.log(er))
    }

    const getAllFiles = (lang) => {
        // console.log(lang)
        return useFetch(url.value+`/api/datas/all/?lang=${lang}`)
        .catch(er => console.log(er))
    }

    const getAllPics = (lang) => {
        // console.log(lang)
        return useFetch(url.value+`/api/galery/all/?lang=${lang}`)
        .catch(er => console.log(er))
    }

    const getOnePic = (id, lang) => {
        // console.log(id, lang)
        return useFetch(url.value+`/api/galery/one/${id}/?lang=${lang}`)
        .catch(er => console.log(er))
    }

    return {
        cats,
        url,
        getSuperCats,
        getOneCat,
        getAllPages,
        getOnePage,
        getAllWorkers,
        getAllFiles,
        getAllPics,
        getOnePic
    }
})