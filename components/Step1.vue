<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore()
import * as yup from 'yup';
const schema = yup.object({
  email: yup.string().required().email().label('Email address'),
  fullName: yup.string().required().label('Full name'),
  phoneNumber: yup.number().required().label('phone number')
})
const { defineComponentBinds, handleSubmit, resetForm, errors } = useForm({
  validationSchema: schema,
});

const fullName = defineComponentBinds('fullName');
const email = defineComponentBinds('email');
const phoneNumber = defineComponentBinds('phoneNumber');

const onSubmit = handleSubmit((values) => {
  if(values){
    counter.increment()
  }
});
</script>
<template lang="pug">
.contaner
    .up
      h1 personal info
      p please provide your name, email address , and phone number
    form(@submit="onSubmit")
      .sec
        label(for="fullName") Full Name
        InputText#fullName(v-bind="fullName" aria-describedby="fullName-help" :class="{ 'p-invalid': errors.fullName }")
        small#fullName-help.p-error
            | {{ errors.fullName }}
      .sec 
        label(for="email") Email Address
        InputText#email(v-bind="email" aria-describedby="email-help" type="email" :class="{ 'p-invalid': errors.email }")
        small#email-help.p-error
            | {{ errors.email }}
      .sec 
        label(for="phoneNumber") Phone Number
        InputText#phoneNumber(v-bind="phoneNumber" aria-describedby="phoneNumber-help" :class="{ 'p-invalid': errors.phoneNumber }" )
        small#phoneNumber-help.p-error
            | {{ errors.phoneNumber ? 'Invalid phone number.' : '' }}       
      button next step
      
</template>
<style scoped lang="scss">
.up{
    margin: 20px 0;
    h1{color:hsl(213, 96%, 18%)}
    p{color: hsl(231, 11%, 63%)}
  }
  
  form{
    .sec{
      label{
        color: hsl(213, 96%, 18%);
      }
    
      margin: 10px 0;
      display: flex;
      flex-direction: column;
      
    }
    button{
        background:#457b9d ;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 10px;
        cursor: pointer;
        float: right;
        margin-top: 15px;
    }
  }

</style>