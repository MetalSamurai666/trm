<script setup>
    import { useMainStore } from "@/store/main"

    const mainStore = useMainStore()

    defineProps({
        worker: Object
    })
</script>

<template>
    <div class="worker">
        <div class="worker__box">
            <div class="worker__left">
                <div class="worker__img">
                    <img :src="`${mainStore.url}/${worker?.img}`">
                </div>
            </div>

            <div class="worker__right">
                <div class="worker__top">
                    <div class="worker__name">{{ worker?.fullname }}</div>
                </div>

                <div class="worker__mid">
                    <div class="worker__level">{{ worker?.level }}</div>
                </div>
                
                <div class="worker__bot">                    
                    <div class="worker__time">{{ worker?.work_time }}</div>

                    <ul class="worker__contacts">
                        <li class="item">
                            <div class="item__logo">
                                <img src="/logos/phone.svg" alt="">
                            </div>
                            <a :href="`tel:${worker?.phone}`">{{ worker?.phone }}</a>
                        </li>
                        <li class="item">
                            <div class="item__logo">
                                <img src="/logos/phone.svg" alt="">
                            </div>
                            <a :href="`tel:${worker?.office_phone}`">{{ worker?.office_phone }}</a>
                        </li>
                        <li class="item">
                            <div class="item__logo">
                                <img src="/logos/message.svg" alt="">
                            </div>
                            <a :href="`mailto:${worker?.mail}`">{{ worker?.mail }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/cards/cardWorker.scss';
</style>