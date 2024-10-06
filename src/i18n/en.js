/*
i18n 원칙
아래와 같이 작성합니다.
hello_world = "Hello world",

특정 페이지에서 독특하게 사용되어야 할 경우, 해당 컴포넌트의 이름을 기록합니다.
HelloWorld_hello_world = "Hello world!!!",
 */
import TopNav from '@/views/home/TopNav.vue'
import WelcomeSection from '@/views/home/landing/WelcomeSection.vue'

export default {
    ...TopNav.i18nEn,
    ...WelcomeSection.i18nEn
}