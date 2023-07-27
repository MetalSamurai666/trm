<script setup>
    import { useMainStore } from "@/store/main";

    const mainStore = useMainStore()

    defineProps({
        article: Object
    })

    const list = ref([
        {
            slug: '/',
            cat: 'E`lonlar',
            img: '',
            title: 'Ta’lim sifatini baholash va monitoring qilish',
            date: '1 iyul 2023 y.'
        },
        {
            slug: '/',
            cat: 'yangiliklar',
            img: '',
            title: 'finlyandiya taʼlim platformalaridan unumli foydalanish muhokama qilindi',
            date: '12 iyun 2023 y.'
        },
        {
            slug: '/',
            cat: 'Ta`lim',
            img: '',
            title: 'o’quv-metodik komplekslarni ishlab chiqish va joriy etish',
            date: '6 aprel 2023 y.'
        },
        {
            slug: '/',
            cat: 'E`lonlar',
            img: '',
            title: 'Ta’lim sifatini baholash va monitoring qilish',
            date: '1 iyul 2023 y.'
        },
        {
            slug: '/',
            cat: 'yangiliklar',
            img: '',
            title: 'finlyandiya taʼlim platformalaridan unumli foydalanish muhokama qilindi',
            date: '12 iyun 2023 y.'
        },
        {
            slug: '/',
            cat: 'Ta`lim',
            img: '',
            title: 'o’quv-metodik komplekslarni ishlab chiqish va joriy etish',
            date: '6 aprel 2023 y.'
        },
    ])
</script>

<template>
    <div class="article">
        <div class="container">
            <div class="article__box">
                <div :class="article?.title == 'Tuzilma' ? 'article__img no-height' : 'article__img'">
                    <img :src="`${mainStore.url}/${article?.img}`">
                </div>

                <div class="article__body" v-if="article?.content?.length > 0">
                    <div class="article__left">
                        <div class="article__text" v-html="article?.content"></div>
                    </div>
                    <div class="article__right">
                        <ul class="article__more">
                            <CardsCard
                                v-for="item, index of list"
                                :key="index"
                                :card="item"
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/article.scss';
</style>