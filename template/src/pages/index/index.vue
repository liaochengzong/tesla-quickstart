<template>
    <div class="container">
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
  },

  created() {
    console.log("tslmp---->11", "created");
  },
  mounted() {
    console.log("tslmp---->11", "mounted");
  }
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
