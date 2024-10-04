/*
i18n 원칙
아래와 같이 작성합니다.
hello_world: "안녕 세상아",

특정 페이지에서 독특하게 사용되어야 할 경우, 해당 컴포넌트의 이름을 기록합니다.
HelloWorld_hello_world = "반갑다 세상아",
 */
import TopNav from '@/views/home/TopNav.vue'

export default {
    ...TopNav.i18nKo
}