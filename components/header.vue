<script setup>
    const nav = ref([
        {
            link: '/',
            title: 'Markaz',
            list: []
        },
        {
            link: '/',
            title: 'Faoliyat',
            list: []
        },
        {
            link: '/',
            title: 'Interaktiv xizmatlar',
            list: []
        },
        {
            link: '/',
            title: 'Hujjatlar',
            list: []
        },
        {
            link: '/',
            title: 'Hamkorlik',
            list: []
        },
        {
            link: '/',
            title: 'Axborot xizmati',
            list: []
        },
        {
            link: '/',
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

                        <div class="header__lang">
                            <button>
                                <span>O’z</span>
                                <img src="/logos/arrow-down.svg">
                            </button>
                        </div>
                    </div>
                    <div class="header__bot">
                        <ul class="header__nav">
                            <li v-for="item, index of nav" :key="index">
                                <nuxt-link :to="item.link">
                                    <span>{{ item.title }}</span>
                                    <img src="/logos/arrow-down.svg" v-if="item.list">
                                </nuxt-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="header__btn">
                    <button>
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