<template>
	<view class="container">
		<!--骨架屏 -->
		<view class="box">
			<view class=" cover cover-skeleton">
			</view>
			<view class="van-skeleton">
				<van-skeleton title row="3" />
			</view>
		</view>
		<view class="box">

			<view class="cover">
				<image src="../static/tabbar/indexselect.png" mode=""></image>
			</view>
			<view class="title">
				猫王无线蓝牙音箱猫王无线蓝牙音箱
			</view>
			<view class="flex align-center">
				<view class="iconcover">
					<image src="../static/index/money.png" mode=""></image>
				</view>
				<text class="money">5088+30元</text>
			</view>
			<view class="flex space-between bottom">
				<text>市场价 <text class="delete-money">￥369</text></text>
				<view class="dbutton">
					兑换
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: ""
			},
			token: {
				type: String,
				default: ""
			},
			oldprice: {
				type: String,
				default: ""
			}
		},
		data() {
			return {

			}
		},
		onShow() {
			this.init()
		},
		methods: {
			init() {


			},
		}

	}
</script>
<style lang="scss">
	.container {
		.van-skeleton {
			padding-top: 20upx;
			background-color: #FFFFFF;
			height: 200upx;
		}

		.box {
			background-color: #fff;
			border-radius: 8upx;
			width: 345upx;
			font-size: 30upx;
			padding: 20upx;
			margin-bottom: 20upx;

			.cover {
				height: 300upx;
				width: 300upx;
				display: flex;
				justify-content: center;
				align-items: center;

				image {
					width: 100%;
					height: 100%;
				}
			}

			.cover-skeleton {
				background-color: #f6f7f8;
			}

			.iconcover {
				margin-top: 10upx;
				width: 36upx;
				height: 36upx;

				image {
					width: 100%;
					height: 100%;
				}
			}

			.money {
				margin-top: 10upx;
				color: #e96357;
				font-size: 28upx;
			}

			.bottom {
				font-size: 24upx;
				margin-top: 8upx;
				color: #999;

				.delete-money {
					margin-left: 10upx;
					text-decoration: line-through;
				}

				.dbutton {
					padding: 2upx 15upx;
					background: linear-gradient(to right, #ff8619, #f77022);
					border-radius: 30upx;
					display: flex;
					justify-content: center;
					align-items: center;
					color: #fff;
				}
			}
		}
	}
</style>
