<template>
	<div id="sup">
    	<div id="sup_ul">
    	<ul class="lf">
        	<li class="sup_ft_li">{{cat}}</li>
        	<li v-for="condition in conditions">
        		<a href="JavaScript:void(0)">{{condition.text}}</a>
        	</li>
        
    	</ul>
    	<ul class="lf">
        	<li class="sup_ft_li">{{fresh}}</li>
        	<li v-for="help in helps">
        		<a href="JavaScript:void(0)">{{help.text}}</a>
        	</li>
    	</ul>
    	<ul class="lf">
        	<li class="sup_ft_li">{{pay_way}}</li>
        	<li v-for="pay in pays">
        		<a href="JavaScript:void(0)">{{pay.text}}</a>
        	</li>
    	</ul>
    	<ul class="lf">
        	<li class="sup_ft_li">{{sup_shop}}</li>
        	<li v-for="sup in sups">
        		<a href="JavaScript:void(0)">{{sup.text}}</a>
        	</li>
    	</ul>
    	</div>
    	<div id="sup_img">
        	<img src="/static/img/shuncai/index/sup.png">
    	</div>
    	<div class="clear"></div>
	</div>
</template>

<script>
export default {
  data () {
    return {
      cat: '天猫保障',
      conditions: [
        {text: '7天无理由退货'},
        {text: '100%正品保障'},
        {text: '提供发票'}
      ],
      fresh: '新手帮助',
      helps: [
        {text: '免费注册'},
        {text: '开通支付宝'},
        {text: '支付宝充值'},
        {text: '帮助中心'}
      ],
      pay_way: '支付方式',
      pays: [
        {text: '支付宝快捷支付'},
        {text: '货到付款'},
        {text: '网上银行支付'}
      ],
      sup_shop: '商家支持',
      sups: [
        {text: '商家入驻'},
        {text: '商家中心'},
        {text: '商家成长'},
        {text: '天猫规则'}
      ]
    }
  }
}
</script>

<style>
</style>