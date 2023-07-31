<script setup>    
    defineProps({
        list: Array
    })
</script>

<template>
    <div class="fileList">
        <div class="container">
            <div class="fileList__box">
                <ul class="fileList__list">
                    <li 
                        v-for="item, index of list"
                        :key="index"
                    >
                        <CardsCardFile :card="item" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/fileList.scss';
</style>