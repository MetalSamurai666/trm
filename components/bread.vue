<script setup>
    const route = useRoute()
</script>

<template>
    <div class="bread">
        <div class="container">
            <div class="bread__box">
                <div class="bread__title">Finlyandiya taʼlim platformalaridan unumli foydalanish muhokama qilindi</div>

                <ul class="bread__list">
                    <li class="item">
                        <nuxt-link to="/" class="item__link">
                            <span>Bosh sahifa</span>
                        </nuxt-link>
                        <div class="item__logo">
                            <img src="/logos/arrow-right.svg">
                        </div>
                    </li>

                    <li class="item">
                        <nuxt-link :to="route?.fullPath" class="item__link">
                            <span>Finlyandiya taʼlim platformalaridan unumli foydalanish muhokama qilindi</span>
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/bread.scss';
</style>