<script setup>
    const big = ref({
        slug: '/asd/zxc',
        cat: 'E’lonlar',
        img: '',
        title: 'Finlyandiya taʼlim platformalaridan unumli foydalanish muhokama qilindi',
        date: '1 iyul 2023 y.'
    })

    const list = ref([
        {
            slug: '/asd/zxc',
            cat: 'E’lonlar',
            img: '',
            title: 'Ta’lim sifatini baholash va monitoring qilish',
            date: '1 iyul 2023 y.'
        },
        {
            slug: '/asd/zxc',
            cat: 'yangiliklar',
            img: '',
            title: 'finlyandiya taʼlim platformalaridan unumli foydalanish muhokama qilindi',
            date: '12 iyun 2023 y.'
        },
        {
            slug: '/asd/zxc',
            cat: 'Ta’lim',
            img: '',
            title: 'o’quv-metodik komplekslarni ishlab chiqish va joriy etish',
            date: '6 aprel 2023 y.'
        },
    ])
</script>

<template>
    <div class="contents">
        <div class="container">
            <div class="contents__box">
                <div class="contents__head">
                    <div class="contents__title">Axborot xizmati</div>
                </div>
                <div class="contents__body">
                    <div class="contents__left">
                        <Card
                            class="big"
                            :card="big"
                        />
                    </div>

                    <div class="contents__mid">
                        <ul class="contents__list">
                            <Card 
                                v-for="item, index of list"
                                :key="index"
                                :card="item"
                            />
                        </ul>
                    </div>
                    
                    <div class="contents__right">
                        <ul class="contents__video">
                            <li class="item">
                                <img src="/images/video-placeholder.jpg">
                            </li>
                            <li class="item">
                                <img src="/images/video-placeholder.jpg">
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/contents.scss';
</style>