<script setup>
    const list = ref([
        {
            slug: 'file1',
            title: 'Oliy ta`lim muassasalarining bakalavriat yo`nalishlariga talabalarni qabul qilish uchun o`tkazilgan test sinovlarining ta`lim yo`nalishlari boyicha o`tish ballari',
            files: [
                {
                    title: 'Fayl 1',
                    slug: 'file1.json'
                },
                {
                    title: 'Fayl 2',
                    slug: 'file2.xml'
                },
                {
                    title: 'Fayl 3',
                    slug: 'file3.csv'
                },
                {
                    title: 'Fayl 3',
                    slug: 'file3.xls'
                },
            ]
        },
        {
            slug: 'file2',
            title: 'Oliy ta`lim muassasalariga qabul rejasi',
            files: [
                {
                    title: 'Fayl 1',
                    slug: 'file1.json'
                },
                {
                    title: 'Fayl 2',
                    slug: 'file2.xml'
                },
                {
                    title: 'Fayl 3',
                    slug: 'file3.csv'
                },
                {
                    title: 'Fayl 3',
                    slug: 'file3.xls'
                },
            ]
        },
        {
            slug: 'file3',
            title: 'Bilim va malakalarni baholash agentligi rahbariyati bilan bog`lanish ma`lumotlari va ularning qabul qilish vaqti',
            files: [
                {
                    title: 'Fayl 1',
                    slug: 'file1.json'
                },
                {
                    title: 'Fayl 2',
                    slug: 'file2.xml'
                },
                {
                    title: 'Fayl 3',
                    slug: 'file3.csv'
                },
                {
                    title: 'Fayl 3',
                    slug: 'file3.xls'
                },
            ]
        },
    ])
</script>

<template>
    <NuxtLayout>
        <div class="files">
            <Bread 
                :bread-title="'Fayllar'"
            />
            <fileList 
                :list="list"
            />
        </div>
    </NuxtLayout>
</template>

<style>

</style>