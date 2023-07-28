<script setup>
    import { storeToRefs } from "pinia";
    import { useMainStore } from "~/store/main";
    const mainStore = useMainStore()
    const { locale } = useI18n()

    const route = useRoute()
    
    const cat = ref({})
    
    const getData = async (lang) => {
        let res = await mainStore.getOneCat(route.params.cat, lang)
        if (res.data.value) {
            cat.value = res.data.value
            console.log(cat.value);
        }
    }

    onMounted(() => {
        getData(locale.value)
    })
    
    const list = ref([
        {
            slug: '/zdasdaxc',
            cat: 'E’lonlar',
            img: '',
            title: 'Ta’lim sifatini baholash va monitoring qilish',
            date: '1 iyul 2023 y.'
        },
        {
            slug: '/asd/zxc',
            cat: 'yangiliklar',
            img: '',
            title: 'finlyandiya taʼlim platformalaridan unumli foydalanish muhokama qilindi',
            date: '12 iyun 2023 y.'
        },
        {
            slug: '/asd/zxc',
            cat: 'Ta’lim',
            img: '',
            title: 'o’quv-metodik komplekslarni ishlab chiqish va joriy etish',
            date: '6 aprel 2023 y.'
        },
        {
            slug: '/asd/zxc',
            cat: 'Ta’lim',
            img: '',
            title: 'o’quv-metodik komplekslarni ishlab chiqish va joriy etish',
            date: '6 aprel 2023 y.'
        },
        {
            slug: '/asd/zxc',
            cat: 'Ta’lim',
            img: '',
            title: 'o’quv-metodik komplekslarni ishlab chiqish va joriy etish',
            date: '6 aprel 2023 y.'
        },
        {
            slug: '/asd/zxc',
            cat: 'Ta’lim',
            img: '',
            title: 'o’quv-metodik komplekslarni ishlab chiqish va joriy etish',
            date: '6 aprel 2023 y.'
        },
        {
            slug: '/asd/zxc',
            cat: 'Ta’lim',
            img: '',
            title: 'o’quv-metodik komplekslarni ishlab chiqish va joriy etish',
            date: '6 aprel 2023 y.'
        },
        {
            slug: '/asd/zxc',
            cat: 'Ta’lim',
            img: '',
            title: 'o’quv-metodik komplekslarni ishlab chiqish va joriy etish',
            date: '6 aprel 2023 y.'
        },
    ])
</script>

<template>
    <nuxt-layout>
        <div class="category">
            <Bread 
                :breadTitle="'Markaz'"
            />
            <List 
                :list="list"
            />
            <Sponsors />
        </div>
    </nuxt-layout>
</template>

<style>

</style>