<template>
	<view class="yxd-screen-container">
		<view class="items" v-for="(item,index) in dataList" :key="item.id">
			<view class="title">
				{{item.type}}
			</view>
			<view class="item-list">
				<view class="item" :class="{active:itemselect.indexOf(i.id)>-1}" v-for="i in item.data" :key="i.id"
					@click="selcet(i.id)">
					{{i.name}}
					<image v-if="itemselect.indexOf(i.id)>-1" src="/static/select-active.png"
						:class="{active:itemselect.indexOf(i.id)>-1}" mode=""> </image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			dataList: {
				type: Array,
				default: [{
						id: 1,
						type: "类型",
						data: [{
								id: 0,
								name: '已过期'
							},
							{
								id: 1,
								name: '未使用'
							}, {
								id: 2,
								name: '待使用'
							},
							{
								id: 3,
								name: '买立减'
							}, {
								id: 4,
								name: '折扣券'
							},
						]

					},
					{
						id: 2,
						type: "类型22",
						data: [{
								id: 10,
								name: '已过期22'
							},
							{
								id: 11,
								name: '未使用22'
							}, {
								id: 12,
								name: '待使用22'
							},
							{
								id: 31,
								name: '买立减22'
							}, {
								id: 41,
								name: '折扣券22'
							},
						]
					},
				],

			},
		},

		data() {
			return {
				isshow: false,
				isactive: false,
				itemselect: []
			}
		},
		methods: {
			selcet(value) {
				console.log(value);
				// this.itemselect[value].map(value)
				let index = this.itemselect.indexOf(value);
				if (index > -1) {
					//移除数组中的数据，index为从第几个开始数，1为移除几个。
					this.itemselect.splice(index, 1);
				} else {
					this.itemselect.push(value);
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.yxd-screen-container {
		padding: 40upx 30upx;
		width: 100%;

		// background-color: #fff;
		.active {
			background: rgba(255, 193, 142, 0.2) !important;
			color: #FF9947;
		}

		.items {
			padding-bottom: 40upx;

			.title {
				font-weight: 700;
				font-size: 28upx;

			}

			.item-list {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;

				.item {
					width: 155upx;
					height: 60upx;
					line-height: 60upx;
					text-align: center;
					background: #F7F7F9;
					font-size: 24upx;
					// margin-left: 30upx;
					margin-top: 20upx;
					position: relative;
					border-radius: 5upx;

					// width: 25%;
					image {
						position: absolute;
						bottom: 0;
						right: 0;
						width: 34upx;
						height: 27upx;
						// display: none;
					}
				}

			}
		}

	}
</style>
