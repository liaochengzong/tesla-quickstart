<template>
    <div class="app-wrapper">
        <keep-alive>
            <router-view class="r-box" v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view   class="r-box" v-if="!$route.meta.keepAlive"></router-view>

        <div class="loading" v-if="isShow">
            <div class="loading-content">
                <image  class="loading-image"  src="https://img.alicdn.com/tfs/TB1Ep_9NVXXXXb8XVXXXXXXXXXX-74-74.gif"/>
                <p class="loading-text">{{loadingTitle}}</p>
            </div>
        </div>
    </div>
</template>
<style scoped>
.app-wrapper {
  background-color: #f4f4f4;
}
.r-box {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.loading {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.loading-content {
  border-radius: 20px;
  background-color: #000000;
  opacity: 0.6;
  padding: 40px 60px;
  align-items: center;
}
.loading-image {
  width: 60px;
  height: 60px;
}
.loading-text {
  color: white;
  font-size: 28px;
  margin-top: 20px;
}
</style>

<script>
import { modal } from "tesla-native-js";
export default {
  data() {
    return {
      isShow: false,
      loadingTitle: "正在加载"
    };
  },
  components: {},
  created() {
    modal.setLoadingCallBack(
      function(boo, OBJECT) {
        this.isShow = boo;
        if (boo) {
          this.loadingTitle = OBJECT.title;
        }
      }.bind(this)
    );
  },
  methods: {}
};
</script>