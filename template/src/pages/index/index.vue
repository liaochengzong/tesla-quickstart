<template>
    <div class="container" @click="jump">
        <text class="text">text标签</text>
        <card text="组件传值">
           <text >默认的内容</text>
           <text slot="label1">指定slot 传入的内容</text>
        </card>
    </div>
</template>
<script>
import { navigator } from "tesla-native-js";
import card from '@/components/card'
export default {
  data() {
    return {
      info:'组件使用及slot标签使用示例'
    };
  },
  config: {
    navigationBarTitleText: '页面生命周期测试'
  },
  components: {
    card
  },
  methods: {
    jump(){
     wx.navigateTo({ url:"./index1" })
    }
  },
  beforeCreate(){
    console.warn('Page--Index -->beforeCreate',this);
  },
  created () {
    console.warn('Page--Index -->created',this);
  },
  beforeMount () {
    console.warn('Page--Index -->beforeMount',this);
  },
  mounted () {
    console.warn('Page--Index -->mounted',this);
  },
  onLoad () {
    console.warn('Page--Index -->onLoad',this);
  },
  onShow () {
    console.warn('Page--Index -->onShow',this);
  },
  onReady () {
    console.warn('Page--Index -->onReady',this);
  },
  onHide () {
    console.warn('Page--Index -->onHide',this);
  },
  onUnload () {
    console.warn('Page--Index -->onUnload',this);
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
