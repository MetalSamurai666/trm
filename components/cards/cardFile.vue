<script setup>
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
                        v-for="item of card?.files"
                        :key="item?.slug"
                        :class="
                            item.slug.split('.').slice(-1) == 'json' ? 'item json' :
                            item?.slug.split('.')?.slice(-1) == 'xml' ? 'item xml': 
                            item?.slug.split('.')?.slice(-1) == 'csv' ? 'item csv': 
                            item?.slug.split('.')?.slice(-1) == 'xls' ? 'item xls' 
                        : 'item'"
                    >
                        <a :href="item?.slug">
                            <img :src="`/logos/${item?.slug.split('.')?.slice(-1)}.svg`">
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