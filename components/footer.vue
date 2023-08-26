<script setup>
    import { storeToRefs } from "pinia";
    import { useMainStore } from "@/store/main";
    const { locale } = useI18n()
    const mainStore = useMainStore()
    const { socials }  = storeToRefs(mainStore)

    const cooLang = useCookie('cooLang')

    const list = ref([])
    const getData = async (lang) => {
        let res = await mainStore.getFooter(lang)
        if (res.data.value) {
            list.value = res.data.value
            // console.log(list.value);
        }
    }

    watch(
        () => locale.value,
        () => getData(locale.value)
    )

    onMounted(() => {
        getData(locale.value)
    })
</script>

<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__box">
                <!-- <div class="footer__top">
                    <nuxt-link class="footer__logo" to="/">
                        <img src="/images/emblem.png">
                        <span>O‘zbekiston Respublikasi Ta’limni rivojlantirish respublika ilmiy-metodik markazi</span>
                    </nuxt-link>
                </div> -->

                <div class="footer__mid">
                    <ul class="footer__list">
                        <li class="item contacts">
                            <div class="item__title">{{ $t('contacts') }}</div>

                            <ul class="item__list">
                                <li class="item__link">
                                    <div class="item__logo">
                                        <img src="/logos/location.svg">
                                    </div>
                                    <a href="https://goo.gl/maps/dh1SrkmANYUUK9146" class="item__info"><span>{{ $t('address') }}</span></a>
                                </li>
                                <!-- <li class="item__link">
                                    <div class="item__logo">
                                        <img src="/logos/phone.svg">
                                    </div>
                                    <div class="item__info">
                                        <a href="tel:+998 71 342-65-75"><span>+998 71 342-65-75</span></a>
                                        <a href="tel:+998 71 542-21-56"><span>+998 71 542-21-56</span></a>
                                    </div>
                                </li> -->
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
                            <nuxt-link class="item__title" 
                                :to="item?.url.length > 0 ? `/${item?.slug ? item?.url : ''}${item?.slug ? '-' : ''}${'-',item?.slug}` : null"
                            >
                                <span>{{ item?.title }}</span>
                            </nuxt-link>

                            <ul class="item__list">
                                <li class="item__link" v-for="subItem, index of item?.parent" :key="index">
                                    <!-- <nuxt-link :to="subItem?.slug">
                                        <span>{{ subItem?.title }}</span>
                                    </nuxt-link> -->
                                    <nuxt-link :to="`/${subItem?.url}${subItem?.slug ? '-' : ''}${'-',subItem?.slug}`">
                                        {{ subItem?.title }}
                                    </nuxt-link>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <ul class="footer__socials">
                        <li class="item"
                            v-for="item, index of socials"
                            :key="index"
                        >
                            <a target="_blank" :href="item?.value">
                                <img :src="`${mainStore.url}/${item?.file}`" :alt="item?.title">
                            </a>
                        </li>
                    </ul>
                </div>
                
                <!-- <a href="https://grandsoft.uz">GRANDSOFT.UZ</a> -->
                <div class="footer__bot">
                    <p class="footer__copyright">Copyright © 2023. {{ $t('copyright') }}</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss">
@import '@/assets/styles/components/footer.scss';
</style>