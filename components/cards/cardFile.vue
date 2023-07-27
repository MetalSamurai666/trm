<script setup>
    import { useMainStore } from "@/store/main"

    const mainStore = useMainStore()

    defineProps({
        card: Object
    })
</script>

<template>
    <div class="file">
        <div class="file__box">
            <div class="file__left">
                <div class="file__title">
                    <span>{{ card?.title }}</span>
                </div>
            </div>

            <div class="file__right">
                <ul class="file__btns">
                    <li 
                        v-for="item of card?.docs"
                        :key="item?.slug"
                        :class="
                            item?.name.split('.')?.slice(-1)[0] == 'json' ? 'item json' :
                            item?.name.split('.')?.slice(-1)[0] == 'xml' ? 'item xml' : 
                            item?.name.split('.')?.slice(-1)[0] == 'csv' ? 'item csv' : 
                            item?.name.split('.')?.slice(-1)[0] == 'xls' ? 'item xls' :
                            item?.name.split('.')?.slice(-1)[0] == 'xlsx' ? 'item xlsx' 
                        : 'item'"
                    >
                        <a :href="`${mainStore.url}/${item?.url}`">
                            <img :src="`/logos/${item?.url.split('.')?.slice(-1)}.svg`">
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/cards/cardFile.scss';
</style>