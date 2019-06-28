<script>
	export default {
		
		onLaunch: function() {
			console.log('App Launch')
			
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*清除浮动*/
	.clearfix{
		zoom:1;
		&:after,&:before{
			content: "";
			display: table;
		}
		&:after{
			clear:both;
		}
	}
	/*去除默认滚动条*/
	::-webkit-scrollbar {width: 0;height: 0;color: transparent;}
	/* 文字溢出虚点显示 */
	.ell { overflow : hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;word-break: break-all;}
	.ell2{display:-webkit-box; overflow:hidden; text-overflow: ellipsis;word-break: break-all;-webkit-line-clamp:2;-webkit-box-orient:vertical;}
	.ell3{display:-webkit-box; overflow:hidden; text-overflow: ellipsis;word-break: break-all;-webkit-line-clamp:3;-webkit-box-orient:vertical;}
</style>
