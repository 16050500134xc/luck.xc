<template>
	<view>
		<!-- 弹出层 -->
		<view class="uni-banner" style="background:#FFFFFF;" v-if="bannerShow">
			<view style="justify-content:flex-end;">
				<view style="justify-content:flex-end; text-align:right; padding:20upx;" @tap="closeBanner">
					<text class="uni-icon uni-icon-close"></text>
				</view>
			</view>
			<view>
				<image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" style="width:100%;" mode="widthFix"></image>
			</view>
			<view style="padding:50upx 0; padding-bottom:68upx;">
				<button type='warn' open-type="getUserInfo" @getuserinfo="mpGetUserInfo" style="background:#ea514d; margin:0 80upx;">授权登录</button>
			</view>
		</view>
		<view class="uni-mask" v-if="bannerShow"></view>
		<!-- 弹出层 -->
	</view>
</template>
<script>
    //保存登陆态
    const SESSION_KEY = 'denglutai'
	const CODE = "code"
	export default {
		data() {
			return {
				provider:'',
				bannerShow: false
			}
		},
		created() {
			uni.getProvider({
				service: 'oauth',
				success:(res)=>{
					this.provider = res.provider[0]
				}
			})
			let session = uni.getStorageSync(SESSION_KEY)
			let code = uni.getStorageSync(CODE)
			//如果存在session，已经登陆
			if (code) {
				//检测当前用户登录态是否有效
				var that = this
				uni.checkSession({
					success: function() {
						that.bannerShow = false;
					},
					fail: function() {
						uni.removeStorageSync(SESSION_KEY);
						that.bannerShow = true;
					},
				});
			} else {
				this.bannerShow = true;
			}
		},
		onBackPress() { //app,h5 按返回键触发
			if (this.bannerShow) {
				uni.reLaunch({
					url: '/pages/index/index'
				});
			}
		},
		methods: {
			closeBanner: function() {
				uni.reLaunch({
					url: '/pages/index/index'
				});
			},
			async mpGetUserInfo(result) {
				if(result.detail.userInfo){
					let [error,res] = await uni.login({
					  provider:this.provider,
					});
					let code = res.code
					uni.setStorageSync(CODE,code)
					let [getUserInfoError,getUserInfores] = await uni.getUserInfo({
						provider: this.provider,
					})
					uni.setStorageSync("userInfo",getUserInfores.userInfo)
					console.log(getUserInfores.userInfo);
					this.bannerShow = false;
				}
				// if (result.detail.errMsg === 'getUserInfo:ok') {
				// //小程序返回登陆态，code等，后续需要调用自己的api处理
				// 	uni.setStorageSync(SESSION_KEY,result.authResult)
				// 	//that.bannerShow = false;
				// } else {
				// 	uni.showModal({
				// 		title: '请授权后查看'
				// 	});
				// }
			}
		}
	}
</script>

<style>
	/* 遮罩层 */
	.uni-mask {
		background: rgba(0, 0, 0, 0.6);
		position: fixed;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		z-index: 9998;
	}

	/* 弹出层形式的广告 */
	.uni-banner {
		width: 80%;
		position: fixed;
		left: 50%;
		top: 50%;
		background: #FFF;
		border-radius: 10upx;
		z-index: 9999;
		transform: translate(-50%, -50%);
	}
</style>
