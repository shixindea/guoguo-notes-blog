<template>
	<view class="yxd-order-list-container">
		<view class="items " :class="{margintop:ismargintop}">
			<view class="title">
				{{title}} <text v-if="smalltitle" class="smalltitle">{{smalltitle}}</text>
			</view>

			<view class="item flex space-between" @click="selectItem(item)" v-for="(item,index) in listdata"
				:key="index">
				<view class="text">{{item || item.data}} <text class="itemRemarks">{{itemRemarks}}</text>   </view>
				<view class="item-img" v-if="SelectItem!='' ? SelectItem===item : defaulttitle ===item">
					<image src="/static/active.png" class="img100" mode=""></image>
				</view>
				<view class="item-img-no" v-else> </view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		props: {
			// 大标题
			title: {
				type: String,
				default: "默认标题"
			},	
			// 小标题
			smalltitle: {
				type: String,
				default: ""
			},
			// 是否默认进行上边距
			ismargintop:{
				type:Boolean,
				default:true
			},
			// 默认选中的标题
			defaulttitle: {
				type: String,
				default: ""
			},
			//列表数据
			listdata: {
				type: Array,
				default: [
					"天气原因不方便出行2",
					"换票不方便",
					"入园证件未带/带错",
					"需要提前购买不能马上入园",
					"有价格更优惠的票",
					"计划有变/拍错/不想去了"
				]
			},
			
			itemRemarks:{
				type:String,
				default:""
			}
		},
		data(){
			return{
				SelectItem:""
			}
		},
		methods: {
			selectItem(value) {
				this.SelectItem = value
				this.$emit('change', value)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.yxd-order-list-container {
		.margintop{
			margin-top: 16upx;
		};
		.items {
			
			width: 100%;
			padding: 20upx 40upx;
			background-color: #fff;

			.title {
				font-size: 34upx;
				height: 85upx;
				line-height: 85upx;
			}
			.smalltitle {
				font-size: 28upx;
				height: 85upx;
				line-height: 85upx;
				padding-left: 13upx;
			}
			

			.item {
				height: 75upx;
				line-height: 75upx;
				border-top: 1px solid #f3f4f6;
				display: flex;
				align-items: center;

				.text {
					font-size: 28upx;
					.itemRemarks{
						font-size: 26upx;
						color: #fd871f;
					}
				}

				.item-img {
					width: 30upx;
					height: 30upx;
					background-color: #fb8519;
					border-radius: 50upx;
					display: flex;
					justify-content: center;
					align-items: center;

					image {
						width: 80%;
						height: 80%;

					}
				}

				.item-img-no {
					width: 30upx;
					height: 30upx;
					border-radius: 50upx;
					border: 1px solid #c6c6c6;

				}
			}
		}

	}
</style>
