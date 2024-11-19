
<template>
    <form @submit.prevent="handleSubmit" class="flex-fill">
      
      <div class="mb-3">
        <label for="name" class="form-label">Full Name</label>
        <input type="text" id="name" class="form-control" v-model="name" required />
      </div>
  
    
      <div class="mb-3">
        <label for="email" class="form-label">Email Address</label>
        <input type="email" id="email" class="form-control" v-model="email" required />
      </div>
  
     
      <div class="mb-3">
        <label for="message" class="form-label">Your Message</label>
        <textarea id="message" class="form-control" rows="5" v-model="message" required></textarea>
      </div>
  
     
      <div class="d-grid gap-2">
        <button type="submit" class="btn btn-primary btn-lg">Send Message</button>
      </div>
    </form>
  </template>
  
  <script>
  export default {
    name: 'ContactForm',
    data() {
      return {
        name: '',
        email: '',
        message: '',
      };
    },
    methods: {
      handleSubmit() {
        if (this.name && this.email && this.message) {
          alert('Message Sent! Thank you for contacting us.');
          
          this.name = '';
          this.email = '';
          this.message = '';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  form {
    background-color: #26735b;
    padding: 25px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  form .form-label {
    font-weight: 600;
  }
  
  textarea {
    resize: vertical;
  }
  
  .btn-primary {
    background-color: #319b79;
    border-color: #319b79;
  }
  
  .btn-primary:hover {
    background-color: #268b64;
    border-color: #268b64;
  }
  </style>
  