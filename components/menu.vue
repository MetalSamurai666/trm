<script setup>
/* Imports */
    import { storeToRefs } from 'pinia';
    import { useMenuStore } from '@/store/menu';
    import { useMainStore } from "@/store/main";

    
    /* Consts */
    
    const mainStore = useMainStore()
    const menuStore = useMenuStore()
    const { menuState } = storeToRefs(menuStore)
    const { menus }  = storeToRefs(mainStore)
    const router = useRouter()

    const { locale, locales, setLocale } = useI18n()
    const availableLocales = computed(() => {
        return (locales.value)
    })

/* Getting CATegorieS🐈 */
     function changeRoute(slug, url) {
        console.log(slug, url);
        if (url.length > 0) {
            if (slug) {
                 router.push(`/${url}-${slug}`)
            } else {
                return false
            }
        } else if (url == 'cat') {
            return false
        } else {
            return false
        }
        // await router.push(`/${slug}`)
        menuStore.menuChange()
    }

    const benefitsv = ref(menus)
    const changeBenefit = ((id) => {
        benefitsv.value = benefitsv.value.map((status, index) => {
            if (index === id) {
                status.active = !status.active 
            } else {
                status.active = false
            }
            return status
        }) 
    })

/* Functions */
    function closeMenu() {
        menuStore.menuChange()
    }

</script>

<template>
    <div :class="menuState ? 'menu show' : 'menu'">
        <div class="menu__box">
            <div class="menu__top">
                <div class="menu__close">
                    <button @click="closeMenu">
                        <img src="/logos/close.svg">
                    </button>
                </div>
            </div>
            <div class="menu__mid">
                <ul class="menu__list">
                    <!-- :class="item.subs ? 'item listly' : 'item'" -->
                    <li 
                        v-for="item, index of benefitsv" :key="index"
                        :class="item?.active ? 'item active' : 'item'" 
                        >
                        <nuxt-link :class="item?.parent?.length > 0 ? 'item__link listly' : 'item__link'" 
                            @click="changeRoute(item?.slug, item?.url)"
                            
                        >
                            <span>{{ item?.title }}</span>
                        </nuxt-link>
                        <!-- <NuxtLink :class="item?.parent?.length > 0 ? 'item__link listly' : 'item__link'"
                            @click="changeRoute(item?.slug, item?.url)"
                            >
                            {{ item.title }}
                        </NuxtLink> -->

                        <span class="item__open"
                            v-if="item?.parent?.length > 0" 
                            @click="item?.parent ? changeBenefit(index) : null">
                            <img src="/logos/arrow-right.svg">
                        </span>

                        <ul class="item__list" v-if="item?.parent">
                            <li v-for="subItem, index of item?.parent" :key="index">
                                <NuxtLink 
                                    :to="`/${subItem?.url}${subItem?.slug ? '-' : ''}${'-',subItem?.slug ? subItem?.slug : ''}`"
                                    @click="closeMenu">
                                    {{ subItem?.title }}
                                </NuxtLink>
                            </li>
                        </ul>
                    </li>

                    <li class="item">
                        <nuxt-link class="item__link" to="/aloqa" @click="closeMenu">
                            <span>{{ $t('contacts') }}</span>
                        </nuxt-link>
                    </li>
                </ul>
            </div>
            <div class="menu__bot">
                <ul class="menu__more">
                    <div class="menu__lang">
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
                    <li class="item">
                        <div class="item__logo">
                            <img src="/logos/phone.svg">
                        </div>
                        <a href="tel:+998 71 342-65-75" class="item__title">
                            +998 71 342-65-75
                        </a>
                    </li>
                    <li class="item">
                        <div class="item__logo">
                            <img src="/logos/message.svg">
                        </div>
                        <a href="mailto:info@trm.uz" class="item__title">
                            info@trm.uz
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/menu.scss';
</style>