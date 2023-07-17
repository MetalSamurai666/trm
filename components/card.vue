<script setup>

    defineProps({
        card: Object
    })

</script>

<template>
    <li class="card">
        <div class="card__left">
            <nuxt-link :to="card?.slug" class="card__img">
                <img src="/images/mini-placeholder.jpg">
            </nuxt-link>
        </div>

        <div class="card__right">
            <div class="card__cat">{{ card?.cat }}</div>
            
            <nuxt-link :to="card?.slug" class="card__title">{{ card?.title }}</nuxt-link>
            
            <div class="card__date">{{ card?.date }}</div>
        </div>

    </li>
</template>

<style lang="scss">
@import '@/assets/styles/components/card.scss';
</style>