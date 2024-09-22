import {createI18n} from "vue-i18n";
import en from "@/i18n/en.js";
import ko from "@/i18n/ko.js";

const messages = {
    en,
    ko
}

const i18n = createI18n({
    locale: 'ko',
    fallbackLocale: 'en',
    messages
})

export default i18n