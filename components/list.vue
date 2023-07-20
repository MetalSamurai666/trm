<script setup>
    defineProps({
        list: Array
    })
</script>

<template>
    <div class="list">
        <div class="container">
            <div class="list__box">
                <ul class="list__list">
                    <CardsCard
                        class="big listly"
                        v-for="item, index of list"
                        :key="index"
                        :card="item"
                    />
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/list.scss';
</style>