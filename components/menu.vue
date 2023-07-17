<script setup>
/* Imports */
    import { storeToRefs } from 'pinia'
    import { useMenuStore } from '~/store/menu';

/* Consts */

    const menuStore = useMenuStore()
    const { menuState } = storeToRefs(menuStore)

/* Getting CATegorieS🐈 */
    const cats = ref([
        {
            slug: '/',
            title: 'Markaz',
            subs: [
                {
                    slug: '/',
                    title: 'Markaz 1'
                }
            ]
        },
        {
            slug: '/',
            title: 'Faoliyat',
            subs: [
                {
                    slug: '/',
                    title: 'Faoliyat 1'
                }
            ]
        },
        {
            slug: '/',
            title: 'Interaktiv xizmatlar',
            subs: [
                {
                    slug: '/',
                    title: 'Interaktiv xizmatlar 1'
                }
            ]
        },
        {
            slug: '/',
            title: 'Hujjarlar',
            subs: [
                {
                    slug: '/',
                    title: 'Hujjarlar 1'
                }
            ]
        },
        {
            slug: '/',
            title: 'Hamkorlik',
            subs: [
                {
                    slug: '/',
                    title: 'Hamkorlik 1'
                }
            ]
        },
        {
            slug: '/',
            title: 'Axborot xizmati',
            subs: [
                {
                    slug: '/',
                    title: 'Axborot xizmati 1'
                }
            ]
        },
        {
            slug: '/',
            title: 'Aloqa',
            subs: []
        },

    ])
    // const getData = async (val) => {
    //     let res = await mainStore.getCats(val)
    //     if (res.data.value) {
    //         cats.value = res.data.value
    //         // console.log(cats.value);
    //     } else {
    //         console.log('no cats');
    //     }
    // }

    const benefitsv = ref(cats)
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
                        <NuxtLink :class="item?.subs.length > 0 ? 'item__link listly' : 'item__link'"
                            @click="changeRoute(item?.slug)"
                            >
                            {{ item.title }}
                        </NuxtLink>

                        <span class="item__open"
                            v-if="item?.subs.length > 0" 
                            @click="item?.subs ? changeBenefit(index) : null">
                            <img src="/logos/arrow-right.svg">
                        </span>

                        <ul class="item__list" v-if="item?.subs">
                            <li v-for="subItem, index of item?.subs" :key="index">
                                <NuxtLink 
                                    :to="subItem?.slug" 
                                    @click="closeMenu">
                                    {{ subItem?.title }}
                                </NuxtLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="menu__bot">
                <ul class="menu__more">
                    <!-- <li class="item">
                        <div class="item__logo">
                            <img src="@/assets/logo/basic/globe.svg">
                        </div>
                        <div class="menu__lang">
                            <div class="item" 
                                v-for="lang in availableLocales"
                                :key="lang.code"
                            >
                                <button
                                    :class="lang.code == locale ? 'active' : ''"
                                    @click.prevent.stop="setLocale(lang.code), changeLang(lang.code)"
                                >
                                    <span>{{ lang.name }}</span>
                                </button>
                            </div>
                        </div>
                    </li> -->
                    <!-- <li class="item">
                        <div class="item__logo">
                            <img src="@/assets/logo/basic/calendar.svg">
                        </div>
                        <span class="item__title">13/06/2023</span>
                    </li> -->
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