<script setup> 

</script>

<template>
    <div class="info">
        <div class="container">
            <div class="info__box">
                <div class="info__map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.005560375418!2d69.21781664118242!3d41.35223286671334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8d063257660d%3A0xcdc6f379c93c0d9e!2sOLIY%20TA&#39;LIMNI%20RIVOJLANTIRISH%20TADQIQOTLARI%20VA%20ILG&#39;OR%20TEXNOLOGIYALARNI%20TATBIQ%20ETISH%20MARKAZI!5e0!3m2!1sen!2s!4v1689582146676!5m2!1sen!2s" width="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div class="info__body">
                    <div class="info__left">
                        <div class="info__title">Aloqa</div>

                        <ul class="info__contacts">
                            <li class="item">
                                <div class="item__logo">
                                    <img src="/logos/phone.svg">
                                </div>

                                <div class="item__info">
                                    <a href="tel:+998 71 342-65-75">+998 71 342-65-75</a>
                                    <a href="tel:+998 71 542-21-56">+998 71 542-21-56</a>
                                </div>
                            </li>

                            <li class="item">
                                <div class="item__logo">
                                    <img src="/logos/message.svg">
                                </div>

                                <div class="item__info">
                                    <a href="mailto:info@trm.uz">info@trm.uz</a>
                                    <a href="mailto:support@trm.uz">support@trm.uz</a>
                                </div>
                            </li>
                            
                            <li class="item">
                                <div class="item__logo">
                                    <img src="/logos/location.svg">
                                </div>

                                <div class="item__info">
                                    <a href="#">Toshkent shahri, Amir temur ko’chasi 113 uy</a>
                                </div>
                            </li>

                            
                        </ul>
                    </div>

                    <div class="info__right">
                        <div class="info__title">Biz bilan bog`laning</div>

                        <ul class="info__inputs">
                            <li class="item">
                                <div class="item__title">Ism</div>
                                <div class="item__input">
                                    <input type="text">
                                </div>
                            </li>
                            <li class="item">
                                <div class="item__title">Familiya</div>
                                <div class="item__input">
                                    <input type="text">
                                </div>
                            </li>
                            <li class="item">
                                <div class="item__title">Telefon raqami</div>
                                <div class="item__input">
                                    <input type="tel">
                                </div>
                            </li>
                            <li class="item">
                                <div class="item__title">Elektron pochta</div>
                                <div class="item__input">
                                    <input type="email">
                                </div>
                            </li>
                            <li class="item big">
                                <div class="item__title">Xabar</div>
                                <div class="item__input">
                                    <textarea></textarea>
                                </div>
                            </li>
                        </ul>

                        <div class="info__send">
                            <button>Yuborish</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/info.scss';
</style>