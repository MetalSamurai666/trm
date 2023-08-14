<script setup> 

</script>

<template>
    <div class="info">
        <div class="container">
            <div class="info__box">
                <div class="info__map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d749.1029092131345!2d69.2493549!3d41.3216615!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba3fee10e49%3A0x733f91debee5d62c!2sTa%CA%BClimni%20Rivojlantirish%20markazi!5e0!3m2!1sru!2s!4v1691389146617!5m2!1sru!2s" width="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div class="info__body">
                    <div class="info__left">
                        <div class="info__title">Aloqa</div>

                        <ul class="info__contacts">
                            <!-- <li class="item">
                                <div class="item__logo">
                                    <img src="/logos/phone.svg">
                                </div>

                                <div class="item__info">
                                    <a href="tel:+998 71 342-65-75">+998 71 342-65-75</a>
                                    <a href="tel:+998 71 542-21-56">+998 71 542-21-56</a>
                                </div>
                            </li> -->

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
                                    <a href="https://goo.gl/maps/dfV8AivYVXdCuBe89">Toshkent shahri, Navoiy ko‘chasi, 30-uy</a>
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