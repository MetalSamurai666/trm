<script setup>
    import { useMainStore } from "@/store/main"

    const mainStore = useMainStore()

    defineProps({
        card: Object
    })

</script>

<template>
    <li class="card">
        <div class="card__left">
            
            <nuxt-link :to="localePath(`/yangiliklar/${card?.slug}`)" class="card__img">
                <img :src="`${mainStore.url}/${card?.img}`">
            </nuxt-link>
        </div>

        <div class="card__right">
            <nuxt-link :to="localePath(`/yangiliklar/${card?.slug}`)" class="card__title">{{ card?.title }}</nuxt-link>
            
            <div class="card__date">{{ card?.date.slice(0, 10) }}</div>
        </div>

    </li>
</template>

<style lang="scss">
@import '@/assets/styles/components/cards/card.scss';
</style>