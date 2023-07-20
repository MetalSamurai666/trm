<script setup>
    const list = ref([
        {
            slug: '/',
            cat: 'E`lonlar',
            img: '',
            title: 'Ta’lim sifatini baholash va monitoring qilish',
            date: '1 iyul 2023 y.'
        },
        {
            slug: '/',
            cat: 'yangiliklar',
            img: '',
            title: 'finlyandiya taʼlim platformalaridan unumli foydalanish muhokama qilindi',
            date: '12 iyun 2023 y.'
        },
        {
            slug: '/',
            cat: 'Ta`lim',
            img: '',
            title: 'o’quv-metodik komplekslarni ishlab chiqish va joriy etish',
            date: '6 aprel 2023 y.'
        },
        {
            slug: '/',
            cat: 'E`lonlar',
            img: '',
            title: 'Ta’lim sifatini baholash va monitoring qilish',
            date: '1 iyul 2023 y.'
        },
        {
            slug: '/',
            cat: 'yangiliklar',
            img: '',
            title: 'finlyandiya taʼlim platformalaridan unumli foydalanish muhokama qilindi',
            date: '12 iyun 2023 y.'
        },
        {
            slug: '/',
            cat: 'Ta`lim',
            img: '',
            title: 'o’quv-metodik komplekslarni ishlab chiqish va joriy etish',
            date: '6 aprel 2023 y.'
        },
    ])
</script>

<template>
    <div class="article">
        <div class="container">
            <div class="article__box">
                <div class="article__img">
                    <img src="/images/content.png">
                </div>

                <div class="article__body">
                    <div class="article__left">
                        <div class="article__text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et purus justo. Mauris tempus nec magna varius sollicitudin. Donec vitae purus vel mi pulvinar tincidunt. Fusce vel laoreet mi, quis vehicula ante. Pellentesque euismod leo felis, sit amet vulputate eros condimentum quis. Integer vel sagittis urna. Mauris tellus ex, euismod vel erat eget, convallis dictum enim. Donec augue urna, feugiat vel est at, aliquet pharetra felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent faucibus imperdiet lorem, sed condimentum enim convallis ut. Praesent at suscipit felis. Maecenas vel tristique enim. Praesent tincidunt, tortor viverra bibendum aliquet, urna nunc aliquam massa, vel gravida enim felis ut est. Aenean porta ipsum mauris, vitae porttitor arcu dignissim non. Vivamus vel augue tortor. Vivamus placerat a quam vel tincidunt.
                            <br> <br>
                            Morbi volutpat leo elit, non hendrerit velit cursus ut. Nunc bibendum, quam a laoreet elementum, sapien sapien vehicula leo, sit amet ultricies arcu nisl et urna. Nulla pulvinar vel nisi sed volutpat. Vestibulum venenatis dolor id augue congue rutrum. Vivamus nunc turpis, congue id nisl vel, interdum suscipit ante. Quisque sit amet tincidunt quam. Nullam sapien diam, volutpat ac enim non, vehicula condimentum odio. Praesent felis leo, semper quis dignissim non, convallis a lectus. Aenean fermentum fermentum massa, sit amet interdum metus condimentum eget. Suspendisse potenti. Fusce lorem arcu, blandit eget mollis vel, sodales ac neque. Phasellus interdum odio a odio condimentum interdum. Sed at rhoncus nibh. 
                            <br> <br>
                            Ut in hendrerit metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla porttitor, augue in hendrerit pharetra, diam risus pretium nisi, sed scelerisque neque arcu sit amet velit.
                            Etiam eu nulla ornare, viverra sem id, facilisis tortor. Aenean elementum imperdiet risus, sit amet suscipit ipsum mattis et. Nulla a arcu ipsum. Donec sagittis lacus ut tristique luctus. Vivamus malesuada hendrerit ligula aliquam mollis. Integer lorem magna, eleifend vel urna ut, scelerisque commodo elit. Fusce interdum nulla ac ex fermentum semper. Pellentesque et fermentum justo. Phasellus at diam tristique, viverra justo vitae, suscipit magna. Vestibulum quis lacinia quam, eu lacinia nibh. Proin id aliquet tortor. Donec et vehicula turpis, in egestas nunc.
                            <br> <br>
                            Vivamus eleifend sem eu nisl porttitor, eu tincidunt tellus vehicula. Proin egestas turpis non ex iaculis ultrices. Ut fermentum velit vitae enim posuere gravida. Duis in ipsum id velit consequat iaculis a quis libero. Mauris hendrerit dolor id mi condimentum tempor eu eget ante. Quisque tincidunt purus orci, sed maximus libero congue id. Ut tincidunt ante id pretium auctor. Donec sagittis viverra mi eu ornare. Etiam fermentum urna nec pellentesque dictum. Nam dolor odio, lacinia ut scelerisque at, eleifend nec mauris. Aliquam vitae sodales arcu. Curabitur consectetur mi non eros pretium, vitae auctor libero convallis. Fusce quam felis, mattis sed ultrices sit amet, feugiat vel enim. Phasellus laoreet risus nec tortor auctor ultricies. Aliquam ante erat, accumsan eu tincidunt sed, efficitur non neque.
                            <br> <br>
                            Nam elementum aliquam odio at sollicitudin. Duis vitae velit efficitur, ornare urna sit amet, cursus nulla. Vestibulum pulvinar orci id lacinia bibendum. Nullam pellentesque turpis a nibh tempus, at ullamcorper nisl ornare. Vestibulum fringilla nisi magna, non iaculis eros pulvinar eget. In congue neque mi, eget ornare nisi elementum eget. Praesent et nibh sollicitudin, aliquam elit at, feugiat tellus. Donec commodo arcu arcu, non porta justo lacinia at. Proin tincidunt arcu leo, et sollicitudin ex pretium nec. Cras congue feugiat porta. Duis luctus dictum turpis, eu ornare risus elementum a.</p>
                        </div>
                    </div>
                    <div class="article__right">
                        <ul class="article__more">
                            <CardsCard
                                v-for="item, index of list"
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