<template>
	<view class="content">
		<denglu></denglu>
		<view class="index_head clearfix">
			<swiper :autoplay="true" :interval="5000" :duration="1000" circular class="index_swiper">
				<swiper-item v-for="(item,index) in banner" :key="index">
					<image :src="item.src"></image>
				</swiper-item>
			</swiper>
			<view class="index_search">
				<image src="/static/images/icon_search.png" mode="aspectFit"></image>
				<input type="text" disabled placeholder="点击搜索海量商品"/>
			</view>
		</view>
		<view class="index_nav">
			<view class="index_nav_item" v-for="(item,index) in nav" :key="index">
				<image :src="item.img"></image>
				<text>{{item.title}}</text>
			</view>
		</view>
		<view class="index_sort">
			<view class="index_sort_title">
				<view class="index_sort_title_left">
					<image src="/static/images/icon_index_1.png" mode="aspectFit"></image>
					<text>挖掘新生活</text>
				</view>
				<text>查看全部</text>
			</view>
			<slideShop :goods="goods"/>
		</view>
		<view class="index_sort">
			<view class="index_sort_title">
				<view class="index_sort_title_left">
					<image src="/static/images/icon_index_2.png" mode="aspectFit"></image>
					<text>大家都在买</text>
				</view>
				<text>查看全部</text>
			</view>
			<slideShop :goods="goods"/>
		</view>
		<view class="index_sort">
			<view class="index_sort_title">
				<view class="index_sort_title_left">
					<image src="/static/images/icon_index_3.png" mode="aspectFit"></image>
					<text>最新商品</text>
				</view>
				<text>查看全部</text>
			</view>
			<slideShop :goods="goods"/>
		</view>
	</view>
</template>

<script>
	import denglu from "@/components/ah-denglu/denglu.vue"
	import slideShop from '@/components/slide-shop.vue'
	export default {
		components:{
			slideShop,
			denglu
		},
		data() {
			return {
				banner:[],
				nav:[
					{img:"/static/images/nav_icon/icon_sort_1.png",title:"新品推荐"},
					{img:"/static/images/nav_icon/icon_sort_2.png",title:"优惠券"},
					{img:"/static/images/nav_icon/icon_sort_3.png",title:"服饰鞋子"},
					{img:"/static/images/nav_icon/icon_sort_4.png",title:"个护清洁"},
					{img:"/static/images/nav_icon/icon_sort_5.png",title:"数码家电"},
					{img:"/static/images/nav_icon/icon_sort_6.png",title:"母婴亲子"},
					{img:"/static/images/nav_icon/icon_sort_7.png",title:"水果生鲜"},
					{img:"/static/images/nav_icon/icon_sort_8.png",title:"护肤彩妆"},
					{img:"/static/images/nav_icon/icon_sort_9.png",title:"质量鞋靴"},
					{img:"/static/images/nav_icon/icon_sort_10.png",title:"精品箱包"},
				],
				goods:[]
			}
		},
		onLoad() {
			this.loadData()
		},
		methods: {
			async loadData(){
				let carouselList = await this.$json.carouselList;
				let goodsList = await this.$json.goodsList;
				
				this.banner = carouselList
				this.goods = this.$tools.splitArray(goodsList,4);
				console.log(this.goods)
			}
		}
	}
</script>

<style lang="scss">
	.index_head{
		width: 100%;
		background: url("http://chuantu.xyz/t6/702/1561707508x1033347913.png") no-repeat;
		background-size:100% 286upx;
		.index_swiper{
			width: 700upx;
			height: 344upx;
			border-radius:10upx; 
			margin: 60upx auto 0;
			image{
				width: 100%;
				height: 100%
			}
		}
		.index_search{
			width: 688upx;
			height: 60upx;
			margin: 25upx auto 0;
			position: relative;
			input{
				width: 100%;
				height: 100%;
				border-radius:30upx;
				background: $uni-text-color-inverse;
				border:2upx solid #ff5555;
				font-size: 25upx;
				box-sizing: border-box;
				padding: 0 75upx;
				line-height: 60upx;
			}
			image{
				position: absolute;
				top:15upx;
				left: 25upx;
				width: 34upx;
				height: 34upx
			}
		}
	}
	.index_nav{
		width: 95%;
		display: flex;
		flex-wrap: wrap;
		margin:30upx auto 0;
		.index_nav_item{
			width: calc(100%/5);
			display: flex;
			flex-direction: column;
			text-align: center;
			margin-bottom: 30upx;
		}
		image{
			width: 110upx;
			height: 110upx;
			border-radius:50%; 
			margin: 0 auto;
		
		}
		text{
			color: #333333;
			font-size: 25upx;
			padding-top: 10upx
		}
	}
	.index_sort{
		width: 95%;
		margin: 10upx auto;
		.index_sort_title{
			width: 100%;
			height: 62upx;
			display: flex;
			justify-content: space-between;
			.index_sort_title_left{
				display: flex;
				image{
					width: 130upx;
					height: 62upx;
				}
				&>text{
					font-size: 28upx;
					color: #999999;
					align-self: flex-end;
					padding-left: $uni-spacing-row-sm
				}
			}
			
			&>text{
				font-size: 24upx;
				color: #333333;
				align-self: flex-end;
				position: relative;
				padding-right:20upx; 
				&::after{
					position: absolute;
					right: 0;
					top:6upx;
					content:'';
					width: 18upx;
					height: 18upx;
					border-left: 1upx solid #333333;
					border-bottom: 1upx solid #333333;
					transform: rotate(225deg);
				}
			}
		}
	}
	
</style>
