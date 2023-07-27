<script setup>
    import { storeToRefs } from "pinia";
    import { useMenuStore } from "@/store/menu";
    import { useMainStore } from "@/store/main";

    const menuStore = useMenuStore()
    const mainStore = useMainStore()
    // const { cats }  = storeToRefs(mainStore)
    const cats = ref([])

    const nav = ref([
        {
            slug: '',
            title: 'markaz',
            list: [
                {
                    slug: 'page-center',
                    title: 'markaz haqida'
                },
                {
                    slug: 'staff',
                    title: 'Rahbariyat'
                },
                {
                    slug: 'page-tuzilma',
                    title: 'Tuzilma'
                },
            ]
        },
        {
            slug: 'page-activity',
            title: 'Faoliyat'
        },
        {
            slug: 'page-xalqaro-aloqalar',
            title: 'Xalqaro Aloqalar',
            list: [
                {
                    slug: 'page-xalqaro-hamkorlar',
                    title: 'Xalqaro Hamkorlar',
                },
                {
                    slug: 'page-hamkorlik-loyihalari',
                    title: 'Hamkorlik Loyihalari',
                },
                {
                    slug: 'page-xalqaro-ekspertlar',
                    title: 'Xalqaro Ekspertlar',
                },
            ]
        },
        {
            slug: '',
            title: 'Axborot xizmati',
            list: [
                {
                    slug: 'savol-va-javob',
                    title: 'Savol va javob'
                },
                {
                    slug: 'hujjatlar',
                    title: 'Ochiq ma`lumotlar'
                },
                {
                    slug: 'yangiliklar',
                    title: 'Yangiliklar'
                },
                {
                    slug: 'galereya',
                    title: 'Galereya'
                },
            ]
        },
        {
            slug: 'aloqa',
            title: 'Aloqa'
        }
    ])


    const { locale, locales, setLocale } = useI18n()
    const availableLocales = computed(() => {
        return (locales.value)
    })

/* Mobile Menu */
    function openMenu() {
        menuStore.menuChange()
    }

    const getData = async (lang) => {
        const res = await mainStore.getSuperCats(lang)
        if (res.data.value) {
            cats.value = res.data.value
            nav.value = [...nav.value, ...cats.value]
            console.log(cats.value)
        }
    }

    onMounted(() => {
        // getData(locale.value)
    })
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

                        <div class="header__lang">
                            <div class="item" 
                                v-for="lang in availableLocales"
                                :key="lang.code"
                            >
                                <button
                                    :class="lang.code == locale ? 'active' : ''"
                                    @click.prevent.stop="setLocale(lang.code)"
                                >
                                    <span>{{ lang.name }}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="header__bot">
                        <ul class="header__nav">
                            <!-- <li class="item" 
                                v-for="item, index of cats" 
                                :key="index"
                            >
                                <nuxt-link class="item__link" 
                                    :to="`/${item?.slug}`"
                                >
                                    <span>{{ item?.title }}</span>
                                    <img src="/logos/arrow-down.svg" v-if="item?.list">
                                </nuxt-link>

                                <div class="item__list">
                                    <ul class="list">
                                        <li class="list__item"
                                            v-for="subItem, index of item?.subs"
                                            :key="index"
                                        >
                                            <nuxt-link :to="subItem?.slug">
                                                {{ subItem?.title }}
                                            </nuxt-link>
                                        </li>
                                    </ul>
                                </div>
                            </li> -->
                            
                            <li class="item" 
                                v-for="item, index of nav" 
                                :key="index"
                            >
                                <nuxt-link class="item__link" 
                                    :to="item?.slug.length > 0 ? `/${item?.slug}` : null"
                                >
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