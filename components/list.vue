<script setup>
    import Paginate from 'vuejs-paginate-next';    

    defineProps({
        list: Array
    })

    function clickCallback(pageNum) {
        console.log(pageNum);
    }

    const pageCount = ref(
    )
    
</script>

<template>
    <div class="list">
        <div class="container">
            <div class="list__box">
                <ul class="list__list">
                    <CardsCard
                        class="big listly"
                        v-for="item, index of list"
                        :key="index"
                        :card="item"
                    />
                </ul>

                <!-- <div class="list__pagination">
                    <paginate
                        :page-count="10"
                        :page-range="3"
                        :margin-pages="2"
                        :click-handler="clickCallback"
                        :prev-text="'Prev'"
                        :next-text="'Next'"
                        :container-class="'pagination'"
                        :page-class="'page-item'"
                    >
                    </paginate>
                </div> -->
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/list.scss';
</style>