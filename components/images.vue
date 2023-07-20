<script setup>
    defineProps({
        list: Array
    })
</script>

<template>
    <div class="images">
        <div class="container">
            <div class="images__box">
                <ul class="images__list">
                    <li 
                        class="item"
                        v-for="item, index of list"
                        :key="index"
                    >
                        <CardsCardPicture
                            :card="item"
                        />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss"> 
@import '@/assets/styles/components/images.scss';
</style>