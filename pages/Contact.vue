
<template>
    <div class="container my-5">
      <h2 class="text-center mb-4">Contact</h2>
      <div class="row justify-content-between align-items-stretch">
     
        <div class="col-md-5 d-flex flex-column order-md-1 order-2 mt-4 mt-md-0">
          <ContactInfo />
        </div>
  
   
        <div class="col-md-6 d-flex flex-column order-md-2 order-1">
          <ContactForm />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ContactInfo from '@/components/ContactInfo.vue';
  import ContactForm from '@/components/ContactForm.vue';
  
  export default {
    name: 'Contact',
    components: {
      ContactInfo,
      ContactForm,
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 900px;
  }
  
  h2 {
    color: #ffffff;
    font-weight: bold;
  }
  
  .d-flex {
    display: flex;
  }
  
  .flex-fill {
    flex: 1;
  }
  
  .row {
    display: flex;
    flex-wrap: wrap;
  }
  
  @media (max-width: 768px) {
    .row {
      flex-direction: column;
    }
    .mt-4 {
      margin-top: 1.5rem;
    }
  }
  
  @media (max-width: 576px) {
    h2 {
      font-size: 1.5rem;
    }
  }
  </style>
  