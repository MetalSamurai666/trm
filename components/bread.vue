<script setup>
    const route = useRoute()

    defineProps({
        breadTitle: String,
        breadType: String
    })
</script>

<template>
    <div class="bread">
        <div class="container">
            <div class="bread__box">
                <div class="bread__title">{{ breadTitle }}</div>

                <ul class="bread__list">
                    <li class="item">
                        <nuxt-link to="/" class="item__link">
                            <span>{{ $t('main') }}</span>
                        </nuxt-link>
                        <div class="item__logo">
                            <img src="/logos/arrow-right.svg">
                        </div>
                    </li>

                    <li class="item" v-if="breadType == 'news'">
                        <nuxt-link to="/yangiliklar" class="item__link">
                            <span>{{ $t('news') }}</span>
                        </nuxt-link>
                        <div class="item__logo">
                            <img src="/logos/arrow-right.svg">
                        </div>
                    </li>

                    <li class="item">
                        <nuxt-link :to="route?.fullPath" class="item__link">
                            <span>{{ breadTitle }}</span>
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/bread.scss';
</style>