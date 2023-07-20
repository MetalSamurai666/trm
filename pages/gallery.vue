<script setup>

const list = ref([
    {
        title: 'Picture 1'
    },
    {
        title: 'Picture 2'
    },
    {
        title: 'Picture 3'
    },
    {
        title: 'Picture 4'
    },
    {
        title: 'Picture 5'
    },
    {
        title: 'Picture 6'
    },
    {
        title: 'Picture 7'
    },
    {
        title: 'Picture 8'
    },
    {
        title: 'Picture 9'
    },
    {
        title: 'Picture 10'
    },
    {
        title: 'Picture 11'
    },
    {
        title: 'Picture 12'
    },
])
</script>

<template>
    <NuxtLayout>
        <div class="gallery">
            <ImgModal />
            <Bread
                :breadTitle="'Galereya'"
            />
            <Images 
                :list="list"
            />
        </div>
    </NuxtLayout>
</template>

<style lang="scss">

</style>