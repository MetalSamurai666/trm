<script setup>
    import { storeToRefs } from "pinia";
    import { useMenuStore } from '@/store/menu.js';
    import { useMainStore } from "@/store/main";

    const menuStore = useMenuStore()
    const mainStore = useMainStore()
    const { menus }  = storeToRefs(mainStore)
    const { socials }  = storeToRefs(mainStore)

    const { locale, locales, setLocale } = useI18n()
    const availableLocales = computed(() => {
        return (locales.value)
    })

    const localeCookie = useCookie('localeCookie')
    function setDefaultLocale(lang){
        setLocale(lang)
        localeCookie.value = lang
    }

/* Mobile Menu */
    function openMenu() {
        menuStore.menuChange()
    }

</script>

<template>
    <header class="header">
        <div class="container">
            <div class="header__box">
                <div class="header__left">
                    <div class="header__logo">
                        <nuxt-link to="/">
                            <img src="/logo.svg">
                            <span v-html="$t('app_title')"></span>
                        </nuxt-link>
                    </div>
                </div>
                <div class="header__right">
                    <div class="header__top">
                        <ul class="header__info header__list">
                            <!-- <li>
                                <a href="tel:+998712540815">
                                    <img src="/logos/phone.svg">
                                    <span>+998 71 254-08-15</span>
                                </a>
                            </li> -->
                            <li>
                                <a href="mailto:info@trm.uz">
                                    <img src="/logos/message.svg">
                                    <span>info@trm.uz</span>
                                </a>
                            </li>
                        </ul>

                        <ul class="header__socials header__list">
                            <li v-for="item, index of socials" :key="index">
                                <a target="_blank" :href="item?.value">
                                    <img :src="`${mainStore.url}/${item?.file}`" :alt="item?.title">
                                </a>
                            </li>
                        </ul>

                        <!-- <ul class="header__settings header__list">
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
                        </ul> -->

                        <div class="header__lang">
                            <div class="item" 
                                v-for="lang in availableLocales"
                                :key="lang.code"
                            >
                                <button
                                    :class="lang.code == locale ? 'active' : ''"
                                    @click.prevent.stop="setDefaultLocale(lang.code)"
                                >
                                    <span>{{ lang.name }}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="header__bot">
                        <ul class="header__nav">
                            <li class="item" 
                                v-for="item, index of menus" 
                                :key="index"
                            >
                                <nuxt-link class="item__link" 
                                    :to="item?.url?.length > 0 ? `/${item?.slug ? item?.url : ''}${item?.slug ? '-' : ''}${'-',item?.slug}` : item?.url === 'cat' ? '' : ''"
                                >
                                    <span>{{ item?.title }}</span>
                                    <img src="/logos/arrow-down.svg" v-if="item?.parent?.length > 0">
                                </nuxt-link>

                                <div class="item__list">
                                    <ul class="list">
                                        <li class="list__item"
                                            v-for="subItem, index of item?.parent"
                                            :key="index"
                                        >
                                            <nuxt-link :to="`/${subItem?.url}${subItem?.slug ? '-' : ''}${'-',subItem?.slug ? subItem?.slug : ''}`">
                                                {{ subItem?.title }}
                                            </nuxt-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="item">
                                <nuxt-link class="item__link" to="aloqa">
                                    <span>{{ $t('contacts') }}</span>
                                </nuxt-link>
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