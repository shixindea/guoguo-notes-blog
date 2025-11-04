<template>
	<view class="yxd-loadingbtn-container">
		<view class="loadingbox flex">
			<van-loading class="loading" type="spinner" color="#a1a0a5" /><text>加载中...</text>
		</view>

	</view>
</template>

<script>
	export default {

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
<style lang="scss" >
	.yxd-loadingbtn-container {
		margin-top: 20upx;
		.loadingbox {
			width: 100%;
			height: 70upx;
		justify-content: center;
			color: #a2a2a6;
			justify-content: center;
			font-size: 28upx;

			/deep/.van-loading {
				display: flex !important;
				margin-right: 8upx;
				
			}

			/deep/.van-loading__spinner {
				height: var(--loading-spinner-size, 20px)!important;
			}
		}
	}
</style>
