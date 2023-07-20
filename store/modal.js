import { defineStore } from 'pinia'

export const useModalStore = defineStore('modalId', () => {
    const modalState = ref(false)
    const modalContent = ref({})

    function modalOpen(){
        modalState.value = true
    }
    function modalClose(){
        modalState.value = false
    }

    function modalChange(card) {
        modalContent.value = card
    }

        return { 
            modalState, 
            modalContent, 
            modalOpen, 
            modalClose, 
            modalChange 
        }
    }
)