import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDarkTheme = defineStore('darkTheme', () => {
    const dark = ref(false)
    function setDarkTheme() {
        dark.value = true
    }

    function setLightTheme() {
        dark.value = false
    }

    return { setDarkTheme, setLightTheme }
})
