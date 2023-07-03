<template lang="pug">
.container-fluid
  .div1(v-if="counter.count === 1")
    Step1/

  div(v-if="counter.count === 2")
    Step2/
  div(v-if="counter.count === 3")
    Step3/
    
  div(v-if="counter.count === 4")
    Step4/
  
  div(v-if="counter.count === 5")
    Step5/
    
    

 
 
  
</template>

<script setup lang="ts">

import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore()

</script>

<style scoped lang="scss">
.container-fluid{
  display: flex;
  justify-content: center;
 
}

</style>