<template lang="pug">
.sidebar
    aside
        .container 
            section(v-for="i in data")
                .left(:class="{ active: counter.count === i.id }")
                    .circle
                        p {{ i.id }}
                .right
                    .up 
                        p {{i.title}}
                    .btm 
                        h6 {{ i.content }}
                
           

</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore()
const data = [
  {
    title: "STEP 1",
    id: 1,
    content: "YOUR INF0",
  },
  {
    title: "STEP 2",
    id: 2,
    content: "SELECT PLAN",
  },
  {
    title: "STEP 3",
    id: 3,
    content: "ADD-ONS",
  },
  {
    title: "STEP 4",
    id: 4,
    content: "SUMMARY",
  },
  

];

;p--pl;;l 
</script>

<style scoped lang="scss">
.sidebar {
  margin: auto 5px;
  color: white;
  border-radius: 10px;
  background: url("../assets/images/bg-sidebar-desktop.svg");
  background-size: cover;
  width: 60%;
  height: 90%;
  background-repeat: no-repeat;

  
  aside {
    .container {
      section {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-top: 30px;
        .left {
          border-radius: 50%;
          height: 35px;
          width: 35px;
          border: 0.5px solid white;
          display: flex;
          align-items: center;
          justify-content: center;
          
        }
        .active{
          background: orange;
        }
        .right {
          line-height: 22px;
          p{
            color: hsl(231, 11%, 63%);
            font-weight: 300;
        }
        }
      }
    }
  }
}
@media (max-width:768px) {
  .container{
    section{
      
      .left{
        display: flex;
        flex-direction: row;
      }
      .right{
        display: none;
      }
    }
  }
}
</style>
