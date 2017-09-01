<template>
<footer id="footer">
        <div class="links">            
			<a href="JavaScript:void(0)" v-for="footer_link in footer_links">{{footer_link.text}}</a>
        </div>
        <div id="copyright">
            <a href="JavaScript:void(0)">相关证件编号[20XX]0XX00-0XXXXXX0号 </a> Copyright © 20XX-20XX SHUNCAIZHUBAO.com 版权所有
        </div>
</footer>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      footer_link: '',
      footer_links: [
        {text: '关于我们|'},
        {text: '联系我们|'},
        {text: '人才招聘|'},
        {text: '商家入驻|'},
        {text: '广告服务|'},
        {text: '友情链接|'},
        {text: '销售联盟'}
      ]
    }
  }
}
</script>

<style scoped>
	 @import '../../../style/basic.css';
	 @import '../../../style/del.css';
	 @import '../../../style/media.css';
</style>