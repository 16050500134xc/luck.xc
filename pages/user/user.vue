<template>
	<view>
		<view class="user_head">
			<view class="user_avatar">
				<image :src="userInfo.avatarUrl" mode="aspectFit"></image>
				<text>{{userInfo.nickName}}</text>
			</view>
			<view class="user_order">
				<view class="user_my_order">
					我的订单
				</view>
				<view class="uesr_menu_order">
					<view class="uesr_item_order" v-for="(item,index) in userMenu" :key="index">
						<view class="user_item_img">
							<image :src="item.url" mode="aspectFit" :style="{width:item.width+'px',height:item.height+'px'}"></image>
						</view>
						<text>{{item.name}}</text>
					</view>
				</view>
				<view class="user_menu_con" v-for="(item,index) in userCarte" :id="item.id" @click="clickCarte" :key="index">
					<view class="user_menu_left">
						<image :src="item.url" mode="aspectFit" :style="{width:item.width+'px',height:item.height+'px'}"></image>
						<text>{{item.name}}</text>
					</view>
					<view class="user_menu_right"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		
		data() {
			return {
				userInfo:{},
				userMenu:[
					{url:"/static/images/user_icon/icon_user_1.png",width:uni.upx2px(58),height:uni.upx2px(65),name:"待付款"},
					{url:"/static/images/user_icon/icon_user_2.png",width:uni.upx2px(76),height:uni.upx2px(60),name:"待发货"},
					{url:"/static/images/user_icon/icon_user_3.png",width:uni.upx2px(66),height:uni.upx2px(60),name:"待收货"},
					{url:"/static/images/user_icon/icon_user_4.png",width:uni.upx2px(72),height:uni.upx2px(62),name:"退款/售后"}
				],
				userCarte:[
					{url:"/static/images/user_icon/icon_user_5.png",width:uni.upx2px(43),height:uni.upx2px(42),name:"我的收藏",id:1},
					{url:"/static/images/user_icon/icon_user_6.png",width:uni.upx2px(45),height:uni.upx2px(33),name:"领取优惠券",id:2},
					{url:"/static/images/user_icon/icon_user_7.png",width:uni.upx2px(37),height:uni.upx2px(44),name:"我的优惠券",id:3},
					{url:"/static/images/user_icon/icon_user_8.png",width:uni.upx2px(31),height:uni.upx2px(42),name:"我的地址",id:4}
				],
				address:null
			};
		},
		onLoad(){
			const userInfo = uni.getStorageSync("userInfo")
			this.userInfo = userInfo
		},
		methods:{
			clickCarte(e){
				let {id} = e.currentTarget
				let that = this
				switch(Number(id)){
					case 1:
						console.log(id)
						break;
					case 2:
						console.log(id)
						break;
					case 3:
						console.log(id)
						break;
					case 4:
						// #ifdef MP-WEIXIN
						uni.chooseAddress({
							success(res){
								that.address = res
							}
						})
						// #endif
						break;
				}
			}
		}
	}
</script>

<style lang="scss">
	.user_head{
		width: 100%;
		height: 430upx;
		background: url("http://chuantu.xyz/t6/702/1561707566x1033347913.png") no-repeat;
		background-size:100% 430upx;
		.user_avatar{
			display: flex;
			flex-direction: column;
			text-align: center;
			color: #fff;
			font-size: 26upx;
			&>image{
				width: 155upx;
				height: 155upx;
				border-radius:50% ;
				margin: 35upx auto 20upx;
			}
		}
		.user_order{
			width: 700upx;
			height: 262upx;
			background: #fff;
			border-radius:10upx 10upx 0 0;
			margin:20upx auto ;
			.user_my_order{
				width: 650upx;
				height: 78upx;
				line-height: 78upx;
				border-bottom: 1upx solid #d2d2d2;
				margin: 0 auto;
				font-size: 26upx;
			}
			.uesr_menu_order{
				display: flex;
				justify-content: space-between;
				width: 650upx;
				margin: 0 auto;
				.uesr_item_order{
					width: calc(100% / 4);
					display: flex;
					flex-direction: column;
					font-size: 26upx;
					text-align: center;
					.user_item_img{
						width: 100%;
						height: 65upx;
						margin: 25upx auto;
					}
					
				}
			}
			.user_menu_con{
				display: flex;
				width: 100%;
				height: 100upx;
				box-sizing: border-box;
				justify-content: space-between;
				padding: 0 56upx;
				line-height: 100upx;
				margin: 30upx auto;
				.user_menu_left{
					display: flex;
					&>image{
						width: 43upx;
						height: 42upx;
						margin: auto 0;
					}
					&>text{
						font-size: 28upx;
						color: #333333;
						padding-left: 20upx;
					}
				}
				.user_menu_right{
					display: block;
					width: 20upx;
					height: 20upx;
					border-top:2upx solid #cbc9c9;
					border-right:2upx solid #cbc9c9;
					transform:rotate(45deg);
					margin: auto 0;
				}
			}
		}
	}
</style>
