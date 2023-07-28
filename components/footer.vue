<script setup>

    const list = ref([
        {
            title: 'Markaz',
            slug: '/',
            list: [
                {
                    title: 'Markaz haqida',
                    slug: '/'
                },
                {
                    title: 'Rahbariyat',
                    slug: '/'
                },
                {
                    title: 'Boshqarma va bo’lim boshliqlari',
                    slug: '/'
                },
                {
                    title: 'Tuzilma',
                    slug: '/'
                },
                {
                    title: 'Muvofiqlashtiruvchi va maslahat organlari',
                    slug: '/'
                },
                {
                    title: 'Rekvizitlar',
                    slug: '/'
                },
            ]
        },
        {
            title: 'Faoliyat',
            slug: '/',
            list: [
                {
                    title: 'O`quv-metodik komplekslarni ishlab chiqish va joriy etish',
                    slug: '/'
                },
                {
                    title: 'Ta`lim sifatini baholash va monitoring qilish',
                    slug: '/'
                },
                {
                    title: 'Pedagogik texnologiyalar',
                    slug: '/'
                },
            ]
        },
        {
            title: 'Axborot xizmati',
            slug: '/',
            list: [
                {
                    title: 'Yangiliklar',
                    slug: '/'
                },
                {
                    title: 'E`lonlar',
                    slug: '/'
                },
                {
                    title: 'Press-relizlar',
                    slug: '/'
                },
                {
                    title: 'Ma`ruzalar',
                    slug: '/'
                },
                {
                    title: 'Tahliliy hisobotlar ',
                    slug: '/'
                },
            ]
        },
    ])

</script>

<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__box">
                <div class="footer__top">
                    <nuxt-link class="footer__logo" to="/">
                        <img src="/images/emblem.png">
                        <span>O‘zbekiston Respublikasi Ta’limni rivojlantirish respublika ilmiy-metodik markazi</span>
                    </nuxt-link>
                </div>

                <div class="footer__mid">
                    <ul class="footer__list">
                        <li class="item contacts">
                            <div class="item__title">{{ $t('contacts') }}</div>

                            <ul class="item__list">
                                <li class="item__link">
                                    <div class="item__logo">
                                        <img src="/logos/location.svg">
                                    </div>
                                    <a href="/"><span>Toshkent shahri, Amir temur ko’chasi 113 uy</span></a>
                                </li>
                                <li class="item__link">
                                    <div class="item__logo">
                                        <img src="/logos/phone.svg">
                                    </div>
                                    <div class="item__info">
                                        <a href="tel:+998 71 342-65-75"><span>+998 71 342-65-75</span></a>
                                        <a href="tel:+998 71 542-21-56"><span>+998 71 542-21-56</span></a>
                                    </div>
                                </li>
                                <li class="item__link">
                                    <div class="item__logo">
                                        <img src="/logos/message.svg">
                                    </div>
                                    <div class="item__info">
                                        <a href="mailto:info@trm.uz"><span>info@trm.uz</span></a>
                                        <a href="mailto:support@trm.uz"><span>support@trm.uz</span></a>
                                    </div>
                                </li>
                            </ul>
                        </li>

                        <li class="item" v-for="item, index of list" :key="index">
                            <nuxt-link class="item__title" :to="item?.slug">{{ item?.title }}</nuxt-link>

                            <ul class="item__list">
                                <li class="item__link" v-for="subItem, index of item?.list" :key="index">
                                    <nuxt-link :to="subItem?.slug">
                                        <span>{{ subItem?.title }}</span>
                                    </nuxt-link>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <ul class="footer__socials">
                        <li class="item">
                            <a href="/">
                                <img src="/logos/socials/facebook.svg">
                            </a>
                        </li>
                        <li class="item">
                            <a href="/">
                                <img src="/logos/socials/instagram.svg">
                            </a>
                        </li>
                        <li class="item">
                            <a href="/">
                                <img src="/logos/socials/telegram.svg">
                            </a>
                        </li>
                        <li class="item">
                            <a href="/">
                                <img src="/logos/socials/twitter.svg">
                            </a>
                        </li>
                        <li class="item">
                            <a href="/">
                                <img src="/logos/socials/youtube.svg">
                            </a>
                        </li>
                    </ul>
                </div>
                
                <div class="footer__bot">
                    <p class="footer__copyright">Copyright © 2023. Materialdan to‘liq yoki qisman, trm.uz manbasi ko‘rsatilishi shart. Saytni tayyorladi - GRANDSOFT.UZ</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss">
@import '@/assets/styles/components/footer.scss';
</style>