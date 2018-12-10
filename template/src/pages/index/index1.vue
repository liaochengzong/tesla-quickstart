<template>
    <div class="container" @click="jump">
        <text class="text">text标签</text>
    </div>
</template>
<script>
import { navigator } from "tesla-native-js";
export default {
  data() {
    return {
    };
  },

  components: {},

  methods: {
    jump(){
    }
  },
  beforeCreate(){
    console.warn('Page--Index1 -->beforeCreate',this);
  },
  created () {
    console.warn('Page--Index1 -->created',this);
  },
  beforeMount () {
    console.warn('Page--Index1 -->beforeMount',this);
  },
  mounted () {
    console.warn('Page--Index1 -->mounted',this);
  },
  onLoad () {
    console.warn('Page--Index1 -->onLoad',this);
  },
  onShow () {
    console.warn('Page--Index1 -->onShow',this);
  },
  onReady () {
    console.warn('Page--Index1 -->onReady',this);
  },
  onHide () {
    console.warn('Page--Index1 -->onHide',this);
  },
  onUnload () {
    console.warn('Page--Index1 -->onUnload',this);
  },
};
</script>

<style scoped>
.container {
  flex: 1;
}

.text {
  text-align: center;
  color: #333;
  font-size: 24px;
  background: #e5e5e5;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 6px;
}
</style>
