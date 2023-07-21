<script setup>
    // import { storeToRefs } from 'pinia';
    import { useMenuStore } from '@/store/menu';
    // import { useMainStore } from '~/store/main';
    const menuStore = useMenuStore()
    // const mainStore = useMainStore()
    // const { cats }  = storeToRefs(mainStore)

/* Mobile Menu */
    function openMenu() {
        menuStore.menuChange()
    }

    const nav = ref([
        {
            slug: '',
            title: 'Markaz',
            list: [
                {
                    slug: 'zexc',
                    title: 'Finlyandiya taʼlim platformalaridan unumli foydalanish muhokama qilindi'
                },
                {
                    slug: 'zexc',
                    title: 'Finlyandiya taʼlim platformalaridan unumli foydalanish muhokama qilindi'
                },
                {
                    slug: 'zexc',
                    title: 'Finlyandiya taʼlim platformalaridan unumli foydalanish muhokama qilindi'
                },
            ]
        },
        {
            slug: '',
            title: 'Faoliyat',
            list: [
                {
                    slug: 'zexc',
                    title: 'Finlyandiya taʼlim platformalaridan unumli foydalanish muhokama qilindi'
                },
                {
                    slug: 'zexc',
                    title: 'Finlyandiya taʼlim platformalaridan unumli foydalanish muhokama qilindi'
                },
                {
                    slug: 'zexc',
                    title: 'Finlyandiya taʼlim platformalaridan unumli foydalanish muhokama qilindi'
                }
            ,]
        },
        {
            slug: '',
            title: 'Interaktiv xizmatlar',
            list: [
                {
                    slug: 'zexc',
                    title: 'Finlyandiya taʼlim platformalaridan unumli foydalanish muhokama qilindi'
                },
                {
                    slug: 'zexc',
                    title: 'Finlyandiya taʼlim platformalaridan unumli foydalanish muhokama qilindi'
                },
                {
                    slug: 'zexc',
                    title: 'Finlyandiya taʼlim platformalaridan unumli foydalanish muhokama qilindi'
                },
            ]
        },
        {
            slug: '',
            title: 'Hujjatlar',
            list: [ 
                {
                    slug: 'zexc',
                    title: 'Finlyandiya taʼlim platformalaridan unumli foydalanish muhokama qilindi'
                },
                {
                    slug: 'zexc',
                    title: 'Finlyandiya taʼlim platformalaridan unumli foydalanish muhokama qilindi'
                },
                {
                    slug: 'zexc',
                    title: 'Finlyandiya taʼlim platformalaridan unumli foydalanish muhokama qilindi'
                },
            ]
        },
        {
            slug: '',
            title: 'Hamkorlik',
            list: [ 
                {
                    slug: 'zexc',
                    title: 'Finlyandiya taʼlim platformalaridan unumli foydalanish muhokama qilindi'
                },
                {
                    slug: 'zexc',
                    title: 'Finlyandiya taʼlim platformalaridan unumli foydalanish muhokama qilindi'
                },
                {
                    slug: 'zexc',
                    title: 'Finlyandiya taʼlim platformalaridan unumli foydalanish muhokama qilindi'
                },
            ]
        },
        {
            slug: '',
            title: 'Axborot xizmati',
            list: [ 
                {
                    slug: 'questions',
                    title: 'Savollar'
                },
                {
                    slug: 'gallery',
                    title: 'Galereya'
                },
                {
                    slug: 'files',
                    title: 'Fayllar'
                },
            ]
        },
        {
            slug: 'contacts',
            title: 'Aloqa'
        }
    ])

</script>

<template>
    <header class="header">
        <div class="container">
            <div class="header__box">
                <div class="header__left">
                    <div class="header__logo">
                        <nuxt-link to="/">
                            <img src="/images/emblem.png">
                            <span>O‘zbekiston Respublikasi Ta’limni <br> rivojlantirish respublika <br> ilmiy-metodik markazi</span>
                        </nuxt-link>
                    </div>
                </div>
                <div class="header__right">
                    <div class="header__top">
                        <ul class="header__info header__list">
                            <li>
                                <a href="tel:+998712540815">
                                    <img src="/logos/phone.svg">
                                    <span>+998 71 254-08-15</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@trm.uz">
                                    <img src="/logos/message.svg">
                                    <span>info@trm.uz</span>
                                </a>
                            </li>
                        </ul>

                        <ul class="header__socials header__list">
                            <li>
                                <a href="#">
                                    <img src="/logos/socials/facebook.svg">
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="/logos/socials/instagram.svg">
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="/logos/socials/telegram.svg">
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="/logos/socials/twitter.svg">
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="/logos/socials/youtube.svg">
                                </a>
                            </li>
                        </ul>

                        <ul class="header__settings header__list">
                            <li>
                                <button>
                                    <img src="/logos/audio.svg">
                                </button>
                            </li>
                            <li>
                                <button>
                                    <img src="/logos/eye.svg">
                                </button>
                            </li>
                        </ul>

                        <!-- <div class="header__lang">
                            <button>
                                <span>O’z</span>
                                <img src="/logos/arrow-down.svg">
                            </button>
                        </div> -->
                    </div>
                    <div class="header__bot">
                        <ul class="header__nav">
                            <li class="item" v-for="item, index of nav" :key="index">
                                <nuxt-link class="item__link" :to="`/${item?.slug}`">
                                    <span>{{ item?.title }}</span>
                                    <img src="/logos/arrow-down.svg" v-if="item?.list">
                                </nuxt-link>

                                <div class="item__list">
                                    <ul class="list">
                                        <li class="list__item"
                                            v-for="subItem, index of item?.list"
                                            :key="index"
                                        >
                                            <nuxt-link :to="subItem?.slug">
                                                {{ subItem?.title }}
                                            </nuxt-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="header__btn">
                    <button @click="openMenu">
                        <img src="/logos/menu.svg">
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
@import '@/assets/styles/components/header.scss';
</style>