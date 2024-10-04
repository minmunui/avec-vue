<!-- ModalWrapper.vue -->
<template>
  <div>
    <button type="button" class="btn btn-primary" @click="openModal">
      모달 열기
    </button>

    <div class="modal fade" ref="modal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalLabel">모달 제목</h5>
            <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            모달 내용
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeModal">닫기</button>
            <button type="button" class="btn btn-primary">저장</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap';

export default {
  name: 'ModalWrapper',
  props: {

  },
  methods: {
    openModal() {
      this.modalInstance = new Modal(this.$refs.modal);
      this.modalInstance.show();
    },
    closeModal() {
      this.modalInstance.hide();
    }
  },
  beforeUnmount() {
    if (this.modalInstance) {
      this.modalInstance.dispose();
    }
  }
};
</script>
