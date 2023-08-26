import { defineStore } from 'pinia'

export const useMainStore = defineStore('indexId', () => {
    const url = ref('https://trmapi.of-astora.uz')
    const menus = ref([])
    const socials = ref([])

    const getMenus = async (lang) => {
        // console.log(lang)
        const res = await useFetch(url.value+`/api/menus/?lang=${lang}`)
        if (res.data.value) {
            menus.value = res.data.value
            // console.log(menus.value, 'menu');
        }
    }

    const getSocials = async () => {
        const res = await useFetch(url.value+`/api/socials/`)
        if (res.data.value) {
            socials.value = res.data.value
            // console.log(socials.value, 'socials');
        }
    }

    const getAllActivities = (lang) => {
        // console.log(lang, 'act');
        return useFetch(url.value+`/api/activity/?lang=${lang}`)
        .catch(er => console.log(er))
    }

    const getOneActivity = (slug, lang) => {
        // console.log(slug, lang);
        return useFetch(url.value+`/api/activity/${slug}/?lang=${lang}`)
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
        // console.log(slug, lang)
        return useFetch(url.value+`/api/page/one/${slug}/?lang=${lang}`)
        .catch(er => console.log(er))
    }

    const getAllWorkers = (type, lang) => {
        // console.log(type, lang);
        return useFetch(url.value+`/api/worker/${type}/?lang=${lang}`)
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

    const getAllSponsors = (lang) => {
        // console.log(lang)
        return useFetch(url.value+`/api/sponsors/?lang=${lang}`)
        .catch(er => console.log(er))
    }

    const getFooter = (lang) => {
        // console.log(lang)
        return useFetch(url.value+`/api/footer/?lang=${lang}`)
        .catch(er => console.log(er))
    }

    const getDocs = (slug, lang) => {
        // console.log(slug, lang, 'docs')
        return useFetch(url.value+`/api/docs/${slug}/?lang=${lang}`)
        .catch(er => console.log(er))
    }


    return {
        menus,
        socials,
        url,
        getMenus,
        getAllActivities,
        getOneActivity,
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
        getAllSponsors,
        getFooter,
        getSocials,
        getDocs
    }
})