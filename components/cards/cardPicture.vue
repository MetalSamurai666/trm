<script setup>
    import { useModalStore } from '@/store/modal';
    import { useMainStore } from '@/store/main';
    const modalStore = useModalStore()
    const mainStore = useMainStore()
    const { locale } = useI18n()

    defineProps({
        card: Object
    })

    const modalPic = ref([])
    

    function openModal(card){
        modalStore.modalOpen()
        modalStore.modalChange(card)
    }

    const getData = async (id, lang) => {
        let res = await mainStore.getOnePic(id, lang)
        if (res.data.value) {
            modalPic.value = res.data.value
            openModal(modalPic.value)
            // console.log(modalPic.value, 'modalPic')
        }
    }
</script>

<template>
    <div class="picture">
        <div class="picture__box" @click="getData(card?._id, locale)">
            <img class="picture__img" 
                :src="`${mainStore.url}/${card?.img}`">
            <div class="picture__title">
                <span>{{ card?.title }}</span>
            </div>
        </div>
    </div>
</template>


<style lang="scss">
@import '@/assets/styles/components/cards/cardPicture.scss';
</style>