<template>
  <div class="wrapper" >
    <text class="card">{{text}}</text>
    <slot name="label">
         <text class="card">这个是默认的slot内容</text>
    </slot>
    <slot name="label1">
         <text class="card">这个是传入slot内容</text>
    </slot>
  </div>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style>
.card {
    font-size: 41px;
}
.wrapper{
    display: flex;
    flex-direction: column;

}
</style>
