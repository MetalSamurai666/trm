<script setup>
    defineProps({
        card: Object,
        index: Number
    })
</script>

<template>
    <div class="doc">
        <div class="doc__box">
            <div class="doc__left">
                <div class="doc__index">№ {{ index <= 9 ? `0`+(index+1) : index+1}}</div>
            </div>
            <div class="doc__mid">
                    <a class="doc__title" target="_blank" :href="card?.link">{{ card?.title }}</a>
            </div>
            <div class="doc__right">
                <div class="doc__date">{{ card?.date.slice(0, 10) }}</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/cards/cardDoc.scss';
</style>