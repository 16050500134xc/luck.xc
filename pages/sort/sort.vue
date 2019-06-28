<template>
	<view class="content">
		<view class="nav">
			<view class="nav-left">
				<scroll-view scroll-y :style="'height:'+height+'px'">
					<view class="nav-left-item" @click="categoryClickMain(item,index)" :key="index" :class="index==categoryActive?'active':''" v-for="(item,index) in categoryList">
						{{item.NAME}}
					</view>
				</scroll-view>
			</view>
			<view class="nav-right">
				<scroll-view scroll-y :style="'height:'+height+'px'" scroll-with-animation >
					<view class="search_con">
						<input type="text" placeholder="输入商品关键词" disabled/>
						<image src="/static/images/icon_search_1.png" mode="aspectFit"></image>
					</view> 
					<swiper :autoplay="true" :interval="5000" :duration="1000" circular>
						<swiper-item v-for="(item,index) in banner">
							<image :src="item.src"></image>
						</swiper-item>
					</swiper>
					<view :id="index==0?'first':''" class="nav-right-item" v-for="item in subCategoryList" :key="item">
						<image :src="item.LOGO" />
						<view>{{item.NAME}}</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				categoryList:[],//分类列表
				subCategoryList: [],//商品列表
				height:0,
				categoryActive:0,
				banner:[
					{src:"http://placehold.it/515x178"},
					{src:"http://placehold.it/515x178"}
				]
				//scrollTop:0,
				//scrollHeight:0
			}
			
		},
		methods:{
			// scroll(e){
			// 	this.scrollHeight = e.detail.scrollHeight;
			// },
			categoryClickMain(categroy, index) {
				this.categoryActive = index;
				this.subCategoryList = categroy.subCategoryList;
				//this.scrollTop = -this.scrollHeight*index;
			},
			getCategory() {
				for(var i=0;i<20;i++){
					var subList = [];
					for(var j=0;j<20;j++){
						subList.push({"NAME":"分类"+i+":商品"+j,"LOGO":"http://placehold.it/50x50"})
					}
					this.categoryList.push({"NAME":"分类"+i,"subCategoryList":subList})
				}
				this.subCategoryList = this.categoryList[0].subCategoryList;
			}
		},
		onLoad:function(){
			this.getCategory()
			uni.getSystemInfo({
				success: res => {
					this.height = res.screenHeight;
				}
			})
		}
	}
</script>

<style lang="scss">
	.content{
		position: fixed;
		top:0;
		left: 0;
		width: 100%;
		height: 100%;
		.nav {
			display: flex;
			width: 100%;
		}
	}
	.nav-left {
		width: 25%;
		min-height: 100%;
		background: #f5f5f5;
		.nav-left-item {
			height: 100upx;
			font-size: 30upx;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
	.nav-right {
		width: 75%;
		.search_con{
			width: 490upx;
			height: 38upx;
			margin: 10upx auto 40upx;
			font-size: 22upx;
			text-align: center;
			position: relative;
			& input{
				width: 100%;
				height: 100%;
				border-radius:30upx;
				background: #f4f4f4;
			}
			&>image{
				width: 26upx;
				height: 30upx;
				position: absolute;
				right: 30upx;
				top:10upx;
				border-radius:0; 
			}
		}
		//padding-top: 22upx;
		swiper{
			width: 515upx;
			height: 178upx;
			margin: 0 auto 20upx;
			& image{
				width: 100%;
				height: 100%;
				border-radius:10upx; 
			}
		}
		.nav-right-item {
			width: 28%;
			height: 210upx;
			float: left;
			text-align: center;
			padding: 15upx;
			font-size: 28upx;
		}
		& image{
			width: 100upx;
			height: 100upx;
			border-radius:50%; 
		}
	}
	.active {
		color: #f96b66;
		background: #fff;
		border-left:10upx solid #f96b66; 
	}
	
</style>
