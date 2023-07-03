<template lang="pug">
.contaner
  .top 
    h1(style="color: hsl(213, 96%, 18%)") Finishing up
    p(style="color:hsl(231, 11%, 63%)") Double-check everything is OK before confirming
  .middle(v-if="toggleSwitch.yearly")
    .item
        h5(style="color: hsl(213, 96%, 18%)") {{ toggleSwitch.selectedYearlyName }} 
        h5(style="color: hsl(213, 96%, 18%); fontWeight:600") ${{ toggleSwitch.selectedYearlyValue }}/yr
    .item(v-for="i in data.totalYearlyValue") 
        p(style="color:hsl(231, 11%, 63%)") {{i.name}}
        h5(style="color: hsl(213, 96%, 18%)") +${{ i.yearly }}/yr
    .item(style="backgroundColor: white" )
        p(style="color:hsl(231, 11%, 63%)") Total per year 
        h4(style="color: hsl(243, 100%, 62%); fontWeight:600") ${{ toggleSwitch.selectedYearlyValue +  data.TtotalYearlyValue }}/yr

  .middle(v-else)
    .item
      h5(style="color: hsl(213, 96%, 18%)") {{ toggleSwitch.selectedMonthlyName }} 
      h5(style="color: hsl(213, 96%, 18%); fontWeight:600") ${{ toggleSwitch.selectedMonthlyValue }}/yr
    .item(v-for="i in data.totalMonthlyValue")  
      p(style="color:hsl(231, 11%, 63%)") {{i.name}}
      h5(style="color: hsl(213, 96%, 18%)") +${{ i.month }}/yr
    .item(style="backgroundColor: white")
      p(style="color:hsl(231, 11%, 63%)") Total per year 
      h4(style="color: hsl(243, 100%, 62%); fontWeight:600") ${{ toggleSwitch.selectedMonthlyValue +  data.TtotalMonthlyValue }}/yr
  .bottom 
    button.btn2(@click="counter.decrement") 
        h5 Go back
    button.btn(@click="counter.increment") next step
</template>

<script setup lang="ts">
import { useSub } from "@/stores/sub";
import { useCounterStore } from "@/stores/counter";
import { useAddones } from "@/stores/addones";
const data = useAddones();
const counter = useCounterStore();
const toggleSwitch = useSub();
</script>

<style scoped lang="scss">
.contaner {
 margin-top: 2em;

  .middle {
    margin: 2em auto;
    background: hsl(217, 100%, 97%);
    .item {
      margin: 1em auto;
      padding: 1em;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .item2 {
      margin: 1em auto;
      padding: 1em;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
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
}
@media (max-width:768px) {
  
}
</style>
