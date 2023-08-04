<script setup>
    import { useMainStore } from "@/store/main"

    const route = useRoute()
    const mainStore = useMainStore()

    defineProps({
        worker: Object
    })

    const showDesc = ref(false)
    function openDescription() {
        showDesc.value = !showDesc.value
    }
</script>

<template>
    <div :class="route.params.param == 'manage' ? 'worker manage' : ''">
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
                    <div class="worker__time">
                        <img src="/logos/clock.svg" alt="">
                        <span>{{ worker?.work_time }}</span>
                    </div>

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

                <div :class="worker?.description ? 'worker__more' : 'worker__more disabled'" v-if="route.params.param == 'manage'">
                    <button :class="showDesc ? 'item show' : 'item'" @click="openDescription">
                        <div class="item__title">{{ $t('more') }}</div>
                        <div :class="showDesc ? 'item__logo show' : 'item__logo'"><img src="/logos/arrow-right.svg"></div>
                    </button>
                    
                    <div :class="showDesc ? 'worker__description show' : 'worker__description'"
                        v-if="worker?.description?.length > 0" 
                        v-html="worker?.description">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/cards/cardWorker.scss';
</style>