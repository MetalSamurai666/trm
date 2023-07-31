import { defineStore } from 'pinia'

export const useMainStore = defineStore('indexId', () => {
    const url = ref('https://trmapi.of-astora.uz')
    const menus = ref([])

    const getMenus = async (lang) => {
        const res = await useFetch(url.value+`/api/menus/?lang=${lang}`)
        if (res.data.value) {
            menus.value = res.data.value
            // console.log(menus.value);
        }
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
        // console.log(slug, lang)
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

    const getAllQuestions = (lang) => {
        // console.log(lang)
        return useFetch(url.value+`/api/questions/?lang=${lang}`)
        .catch(er => console.log(er))
    }

    const getAllNews = (lang) => {
        // console.log(lang)
        return useFetch(url.value+`/api/news/latest/?lang=${lang}`)
        .catch(er => console.log(er))
    }

    const getOneNews = (slug, lang) => {
        // console.log(lang)
        return useFetch(url.value+`/api/news/get/${slug}/?lang=${lang}`)
        .catch(er => console.log(er))
    }

    const getNewsSlider = (lang) => {
        // console.log(lang)
        return useFetch(url.value+`/api/news/slider/?lang=${lang}`)
        .catch(er => console.log(er))
    }

    const getNewsMain = (lang) => {
        // console.log(lang)
        return useFetch(url.value+`/api/news/main/?lang=${lang}`)
        .catch(er => console.log(er))
    }

    const getFooter = (lang) => {
        // console.log(lang)
        return useFetch(url.value+`/api/footer/?lang=${lang}`)
        .catch(er => console.log(er))
    }

    const getSocials = () => {
        return useFetch(url.value+`/api/socials/`)
        .catch(er => console.log(er))
    }


    return {
        menus,
        url,
        getMenus,
        getOneCat,
        getAllPages,
        getOnePage,
        getAllWorkers,
        getAllFiles,
        getAllPics,
        getOnePic,
        getAllQuestions,
        getAllNews,
        getOneNews,
        getNewsSlider,
        getNewsMain,
        getFooter,
        getSocials
    }
})