<script setup>
    defineProps({
        list: Array
    })
</script>

<template>
    <div class="staffList">
        <div class="container">
            <div class="staffList__box">
                <ul class="staffList__list">
                    <li class="item"
                        v-for="item, index of list"
                        :key="index"
                    >
                        <CardsCardWorker 
                            :worker="item"
                        />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/staffList.scss';
</style>