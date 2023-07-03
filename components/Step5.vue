<template lang="pug">
.contaner
    .top 
        img(src="iconthankyou.svg")
    .bot 
        h1(style="color: hsl(213, 96%, 18%); fontWeight:700") Thank you!
        p(style="color:hsl(231, 11%, 63%)") Thanks for confirming your subscription! We hhope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com
</template>

<script setup lang="ts">


</script>

<style scoped lang="scss">
.contaner{
    .top{
        
        margin: 1em auto;
        height: 5em;
        width: 5em;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .bot{
        h1{
            margin:.15em auto;
        }
        text-align: center;
        padding: .75em;
        margin: 1px auto;
        width: 90%;
    }
}
</style>