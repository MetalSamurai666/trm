<script setup>
    const list = ref([
        {
            slug: '/asda/zdasdaxc',
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
        {
            slug: '/asd/zxc',
            cat: 'Ta’lim',
            img: '',
            title: 'o’quv-metodik komplekslarni ishlab chiqish va joriy etish',
            date: '6 aprel 2023 y.'
        },
        {
            slug: '/asd/zxc',
            cat: 'Ta’lim',
            img: '',
            title: 'o’quv-metodik komplekslarni ishlab chiqish va joriy etish',
            date: '6 aprel 2023 y.'
        },
        {
            slug: '/asd/zxc',
            cat: 'Ta’lim',
            img: '',
            title: 'o’quv-metodik komplekslarni ishlab chiqish va joriy etish',
            date: '6 aprel 2023 y.'
        },
        {
            slug: '/asd/zxc',
            cat: 'Ta’lim',
            img: '',
            title: 'o’quv-metodik komplekslarni ishlab chiqish va joriy etish',
            date: '6 aprel 2023 y.'
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
    <nuxt-layout>
        <div class="category">
            <Bread />
            <List 
                :list="list"
            />
            <Sponsors />
        </div>
    </nuxt-layout>
</template>

<style>

</style>