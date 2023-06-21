<template lang="pug">
.container-fluid
    .container
        SideBar/
        slot/

</template>
<style lang="scss" scoped>
   .container-fluid{
    height: 100svh;
    position: relative;
    
    
    .container{
        border-radius: 5px;
        box-shadow: 1px 1px 10px 1px #e0e0e0;
        width: 70vw;
        height: 80vh;
        background: #ffffff;
        display: flex;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
   }
   @media (max-width:768px) {
    .container{
      display: flex;
      flex-direction: column;
    }
}
</style>

