<script>
 /** wx入口
     * 
     */
export default {
  beforeCreate(){
    console.warn('App -->beforeCreate',this);
  },
  created () {
    console.warn('App -->created',this);
  },
  beforeMount () {
    console.warn('App -->beforeMount',this);
  },
  mounted () {
    console.warn('App -->mounted',this);
  },
  beforeUpdate () {
    console.warn('App -->beforeUpdate',this);
  },
  updated () {
    console.warn('App -->updated',this);
  },
  activated () {
    console.warn('App -->activated',this);
  },
  deactivated () {
    console.warn('App -->deactivated',this);
  },
  beforeDestroy () {
    console.warn('App -->beforeDestroy',this);
  },
  destroyed () {
    console.warn('App -->destroyed',this);
  },
  onLaunch(){
    console.warn('App 初始化-->onLaunch',this);
  },
  onShow(){
     console.warn('App 当小程序启动，或从后台进入前台显示-->onShow',this);
  },
  onHide(){
    console.warn('App 当小程序从前台进入后台-->onHide',this);
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
