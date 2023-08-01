<script setup>
    import { useMainStore } from "@/store/main";

    const mainStore = useMainStore()

    defineProps({
        article: Object,
        rand: Array,
        img: Boolean
    })

</script>

<template>
    <div class="article">
        <div class="container">
            <div class="article__box">
                <div class="article__body" v-if="article?.content?.length > 0">
                    <div class="article__left">
                        <div :class="article?.title == 'Tuzilma' ? 'article__img no-height' : 'article__img'" v-if="img">
                            <img :src="`${mainStore.url}/${article?.img}`">
                        </div>

                        <div class="article__text" v-html="article?.content"></div>
                    </div>
                    <div class="article__right">
                        <div class="article__subtitle" v-if="rand.length > 0">{{ $t('other_news') }}</div>
                        <div class="article__subtitle" v-else>{{ $t('other_news_no') }}</div>
                        <ul class="article__more">
                            <CardsCard
                                v-for="item, index of rand"
                                :key="index"
                                :card="item"
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/article.scss';
</style>