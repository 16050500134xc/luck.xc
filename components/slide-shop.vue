<template>
	<view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="8000" :duration="1000" circular class="swiper_con" indicator-active-color="#ea514d">
			<swiper-item v-for="(item,index) in goods" :key="index">
				<view class="swiper_item">
						<view class="shop_item" v-for="(ele,idx) in item" :key="idx">
							<image :src="ele.image"></image>
							<text class="shop_item_title ell2">{{ele.title}}</text>
							<view class="shop_item_in">
								<view class="shop_item_price">
									<span>￥</span>
									<text class="ell">{{ele.price}}</text>
								</view>
								<view class="shop_item_cart">
									<image src="/static/images/icon_cart.png"></image>
								</view>
							</view>
							<view class="shop_item_foot">
								<view>
									市场价<span>￥{{ele.marprice}}</span>
								</view>
								<text>月销{{ele.sales}}</text>
							</view>	
						</view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		props:{
			goods:Array
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.swiper_con{
		width: 100%;
		height: 1160upx;
		.swiper_item{
			width: 100%;
			margin: 10upx auto;
			display: flex;
			flex-wrap: wrap;
			.shop_item{
				box-sizing: border-box;
				width: 340upx;
				height: 530upx;
				margin: 0 20upx 25upx 5upx;
				border-radius:10upx; 
				box-shadow: 0upx 0upx 13upx 0upx rgba(251,163,88,0.24);
				display: flex;
				flex-direction: column;
				&:nth-child(2n){
					margin-right: 0
				}
				image{
					width: 100%;
					height: 340upx;
					border-radius:10upx 
				}
				.shop_item_title{
					color: #333333;
					font-size: 28upx;
					line-height: 50upx;
					height: 100upx;
					padding: 0 5upx
				}
				.shop_item_in{
					width: 100%;
					height: 45upx;
					line-height: 45upx;
					display: flex;
					justify-content: space-between;
					margin-top: 10upx;
					.shop_item_price{
						width: 70%;
						color: #ff0000;
						display: flex;
						font-size: 38upx;
						span{
							font-size: 25upx;
							align-self: flex-end;
						}
					}
					.shop_item_cart{
						width: 30%;
						height: 100%;
						image{
							width: 31upx;
							height: 27upx;
							margin: auto 0;
							margin-left: 60upx;
							
						}
					}
				}
				.shop_item_foot{
					width: 100%;
					line-height: 45upx;
					display: flex;
					justify-content: space-between;
					font-size: 20upx;
					color: #999999;
					box-sizing: border-box;
					padding: 0 10upx;
					&>view>span{
						text-decoration: line-through;
					}
				}
			}
		}
	}
	
</style>
