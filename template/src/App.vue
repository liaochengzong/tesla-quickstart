<script>
 /** wx入口
     * 
     */
export default {
created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    console.log('app created and cache logs by setStorageSync')
  }
}
</script>
<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
</style>
