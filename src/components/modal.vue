<script>
export default {
  name: 'Modal',
  props: {
    id: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: '',
      validator: (value) => ['', 'sm', 'lg', 'xl'].includes(value)
    },
    centered: {
      type: Boolean,
      default: true
    },
    staticBackdrop: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
  <div :id="id" class="modal fade custom-modal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true"
    :data-bs-backdrop="staticBackdrop ? 'static' : true" data-bs-keyboard="false">
    <div :class="['modal-dialog', size ? `modal-${size}` : '', centered ? 'modal-dialog-centered' : '']">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" :id="`${id}Label`">
            <!-- Use named slot for title -->
            <slot name="title">Modal Title</slot>
          </h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <!-- Use named slot for body -->
          <slot name="body">Modal content goes here</slot>
          <!-- Default slot as fallback -->
          <slot></slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">
            <button type="button" class="btn btn-outline-light" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-accent">Save changes</button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Dark theme styling for modal */
.custom-modal .modal-content {
  background-color: #1e1e1e;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  color: #e0e0e0;
}

.custom-modal .modal-header {
  background-color: #1a1a1a;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px 10px 0 0;
  padding: 1rem 1.5rem;
}

.custom-modal .modal-header .modal-title {
  color: #e0e0e0;
  font-weight: 600;
}

.custom-modal .modal-body {
  background-color: #1e1e1e;
  color: #a0a0a0;
  padding: 1.5rem;
}

.custom-modal .modal-footer {
  background-color: #1a1a1a;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0 0 10px 10px;
  padding: 1rem 1.5rem;
}

/* Button styles to match theme */
.custom-modal .btn-accent {
  background-color: #10b981;
  border-color: #10b981;
  color: #000;
  transition: all 0.3s ease;
}

.custom-modal .btn-accent:hover {
  background-color: #059669;
  border-color: #059669;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(16, 185, 129, 0.3);
}

.custom-modal .btn-outline-light {
  color: #e0e0e0;
  border-color: rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.custom-modal .btn-outline-light:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: #ffffff;
}

/* Animation enhancements */
.modal.fade .modal-dialog {
  transition: transform 0.3s ease-out, opacity 0.3s ease;
  transform: translateY(-20px);
  opacity: 0;
}

.modal.show .modal-dialog {
  transform: translateY(0);
  opacity: 1;
}

/* Backdrop styling */
.modal-backdrop {
  background-color: #000;
}

.modal-backdrop.show {
  opacity: 0.7;
}
</style>