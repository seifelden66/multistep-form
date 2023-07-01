<template lang="pug">
.bottom 
    button.btn2(@click="counter.decrement") 
        h5 Go back
    button.btn(@click="counter.increment") next step
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore()
</script>

<style scoped lang="scss">
.bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1em;
    .btn {
      background: #457b9d;
      color: white;
      border: none;
      border-radius: 5px;
      padding: 10px;
      cursor: pointer;
    }
    .btn2 {
      background: #9d454500;
      color: hsl(231, 11%, 63%);
      border: none;
      border-radius: 5px;
      padding: 10px;
      cursor: pointer;
    }
    
  }

</style>