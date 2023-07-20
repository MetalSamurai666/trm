<script setup>
    import { useModalStore } from '@/store/modal';
    const modalStore = useModalStore()

    defineProps({
        card: Object
    })


    function openModal(card){
        modalStore.modalOpen()
        modalStore.modalChange(card)
    }
</script>

<template>
    <div class="picture">
        <div class="picture__box" @click="openModal(card)">
            <img class="picture__img" src="/images/content.png">
            <div class="picture__title">
                <span>{{ card?.title }}</span>
            </div>
        </div>
    </div>
</template>


<style lang="scss">
@import '@/assets/styles/components/cards/cardPicture.scss';
</style>