<script setup> 
    defineProps({
        card: Object
    })
</script>

<template>
    <div class="hamburger">
        <div class="hamburger__box">
            <div class="hamburger__top">
                <div class="hamburger__question">{{ card?.question }}</div>
                <button>
                    <img src="/logos/arrow-right.svg">
                </button>
            </div>

            <div class="hamburger__bot">
                <div class="hamburger__answer">{{ card?.answer }}</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/cards/cardHamburger.scss';
</style>