<script setup>    
    defineProps({
        list: Array,
        listType: String
    })
</script>

<template>
    <div class="fileList">
        <div class="container">
            <div class="fileList__box">
                <ul class="fileList__docs" v-if="listType == 'docs'">
                    <li 
                        v-for="item, index of list"
                        :key="index"
                    >   
                        <CardsCardDocs
                            :card="item"
                            :index="index"
                        />
                    </li>
                </ul>
                <ul class="fileList__list" v-else>
                    <li 
                        v-for="item, index of list"
                        :key="index"
                    >
                        <CardsCardFile 
                            :card="item" 
                        />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/fileList.scss';
</style>