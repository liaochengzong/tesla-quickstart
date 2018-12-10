<template>
  <div class="wrapper" >
    <text class="card">{{text}}</text>
    <slot>
    </slot>
    <slot name="label1">
    </slot>
  </div>
</template>

<script>
export default {
  data(){
    return {
      text1:'12321321'
    }
  },
  props:{
    text:{type:String,default:"默认"}
  },

  beforeCreate(){
    console.warn('Component--Card -->beforeCreate',this);
  },
  created () {
    console.warn('Component--Card -->created',this);
    console.warn('Component--Card -->created',this.text);
  },
  beforeMount () {
    console.warn('Component--Card -->beforeMount',this);
  },
  mounted () {
    console.warn('Component--Card -->mounted',this);
    console.warn('Component--Card -->mounted',this.text);
  },
  onLoad () {
    console.warn('Component--Card -->onLoad',this);
  },
  onShow () {
    console.warn('Component--Card -->onShow',this);
  },
  onReady () {
    console.warn('Component--Card -->onReady',this);
  },
  onHide () {
    console.warn('Component--Card -->onHide',this);
  },
  onUnload () {
    console.warn('Component--Card -->onUnload',this);
  },

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
