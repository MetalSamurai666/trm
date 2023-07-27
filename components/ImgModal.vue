<script setup>
    import { storeToRefs } from "pinia";

    import { useMainStore } from "@/store/main";
    import { useModalStore } from "@/store/modal";
    const mainStore = useMainStore()
    const modalStore = useModalStore()

    const { modalState } = storeToRefs(modalStore)
    const { modalContent } = storeToRefs(modalStore)
</script>

<template>
    <div :class="modalState ? 'modal active' : 'modal'">
        <div class="modal__bg" @click="modalStore.modalClose"></div>
        <div class="modal__box">
            <img class="modal__img" :src="`${mainStore.url}/${modalContent?.img}`">
            <span class="modal__title">{{ modalContent?.title }}</span>
            <button class="modal__close" @click="modalStore.modalClose">
                <img src="/logos/close.svg">
            </button>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/imgModal.scss';
</style>