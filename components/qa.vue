<script setup>
    defineProps({
        list: Array
    })

    // const answersv = ref(list)
    // const changeAnswer = ((id) => {
    //     answersv.value = answersv.value.map((status, index) => {
    //         if (index === id) {
    //             status.active = !status.active 
    //         } else {
    //             status.active = false
    //         }
    //         return status
    //     }) 
    // })

    const activated = ref()

    function openAnswer(index) {
        activated.value = index
    }
</script>

<template>
    <div class="qa">
        <div class="container">
            <div class="qa__box">
                <ul class="qa__list">
                    <li 
                        :class="activated == index ? 'item active' : 'item'"
                        v-for="item, index of list"
                        :key="index">
                        <div class="item__box">
                            <div class="item__top">
                                <div class="item__question">{{ item?.question }}</div>
                                <button class="item__arrow"  @click="openAnswer(index)">
                                    <img src="/logos/arrow-right.svg">
                                </button>
                            </div>

                            <div class="item__bot">
                                <div class="item__answer">{{ item?.answer }}</div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/qa.scss';
</style>