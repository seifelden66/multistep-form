<template lang="pug">
.container-fluid
    .container
        .side
            SideBar/    
        .div
            slot/

</template>
<style lang="scss" scoped>
.container-fluid {
  background: hsl(217, 100%, 97%);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .container {
    padding: 1em;
    display: flex;
    align-items: center;
    align-self: center;
    min-height: 70vh;
    margin-top: 5em;
    border-radius: 10px;
    width: 900px;
    
    background: white;
    .side {
      background-image: url(../assets//images/bg-sidebar-desktop.svg);
      height: 35em;
      width: 35%;
      border-radius: 10px;
    }
    .div {
      width: 100%;
      margin: 0 auto;
    }
  }
}
@media (max-width: 768px) {
  
  .container-fluid {
    z-index: 0;
    .container {
      
      .side {
        background-image: url(../assets//images/bg-sidebar-mobile.svg);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: absolute;
        height: 8em;
        top: 0;
        left: 0;
        width: 100%;
        border-radius: 0;
        z-index: -99;
      }
      .div{
        margin-top: -1em;
        z-index: 999;
      }
    }
  }
}
</style>
