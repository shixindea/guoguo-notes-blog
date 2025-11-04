<template>
	<view class="container">
		<view class="selectitembox">
			<view class="selectitem flex space-around">
				<view :class="{selectitemActive:selectitemopt==1 && doubleClick1}" @click="option1"> {{optionitemVal1}}
					<van-icon name="play" class="sjbtm" />
				</view>
				<view :class="{selectitemActive:selectitemopt==2 && doubleClick2}" @click="option2"> {{optionitemVal2}}
					<van-icon name="play" class="sjbtm" />
				</view>
				<view :class="{selectitemActive:selectitemopt==3 && doubleClick3}" @click="option3">{{optionitemVal3}}
					<van-icon name="play" class="sjbtm" />
				</view>
			</view>
			<view class="flortitem" :class="{showflortitem:doubleClick1}">
				<view class="item1 flex align-center space-between" :class="{item1acitve:optionitemVal1==item.text}"
					@click="optionitem1(item.text)" v-for="item in optionList1" :key="item.text">
					<text>{{item.text}}</text>
					<text class="rightico">√</text>
				</view>
			</view>
			<view class="flortitem" :class="{showflortitem:doubleClick2}">
				<view class="item1 flex align-center space-between" :class="{item1acitve:optionitemVal2==item.text}"
					@click="optionitem2(item.text)" v-for="item in optionList2" :key="item.text">
					<text>{{item.text}}</text>
					<text class="rightico">√</text>
				</view>
			</view>
			<view class="flortitem" :class="{showflortitem:doubleClick3}">
				<view class="item1 flex align-center space-between" :class="{item1acitve:optionitemVal3==item.text}"
					@click="optionitem3(item.text)" v-for="item in optionList3" :key="item.text">
					<text>{{item.text}}</text>
					<text class="rightico">√</text>
				</view>
			</view>
			<view class="mask" v-if="isshowmask" @click="maskClick"></view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				selectitemopt: "",
				doubleClick1: false,
				doubleClick2: false,
				doubleClick3: false,
				isshowmask: false,
				optionitemVal1: "商品类别",
				optionitemVal2: "默认排序",
				optionitemVal3: "积分类别",
				optionList1: [{
						text: '商品类别',
						value: "a"
					},
					{
						text: '新款商品',
						value: "b"
					},
					{
						text: '活动商品',
						value: "c"
					},
				],
				optionList2: [{
						text: '默认排序',
						value: 'd'
					},
					{
						text: '好评排序',
						value: 'e'
					},
					{
						text: '销量排序',
						value: 'f'
					},
				],
				optionList3: [{
						text: '积分类别',
						value: 'h'
					},
					{
						text: '好评排序',
						value: 'i'
					},
					{
						text: '销量排序',
						value: 'j'
					},
				],


			}
		},
		onShow() {
			this.init()
		},
		methods: {
			init() {


			},
			maskClick(){
				this.isshowmask = false
				this.doubleClick1 = false
				this.doubleClick2 = false
				this.doubleClick3 = false
			},
			optionitem1(e) {
				this.doubleClick1 = false
				this.isshowmask = false
				this.optionitemVal1 = e
			},
			optionitem2(e) {
				this.doubleClick2 = false
				this.isshowmask = false
				this.optionitemVal2 = e
			},
			optionitem3(e) {
				this.doubleClick3 = false
				this.isshowmask = false
				this.optionitemVal3 = e
			},
			option1() {
				this.selectitemopt = 1;
				if (this.doubleClick1 == true) {
					this.doubleClick1 = false
					this.isshowmask = false
				} else {
					this.doubleClick2 = false
					this.doubleClick3 = false
					this.doubleClick1 = true
					this.isshowmask = true
				}
			},
			option2() {
				this.selectitemopt = 2;
				if (this.doubleClick2 == true) {
					this.doubleClick2 = false
					this.isshowmask = false
				} else {
					this.doubleClick1 = false
					this.doubleClick3 = false
					this.doubleClick2 = true
					this.isshowmask = true
				}
			},
			option3() {
				this.selectitemopt = 3;
				if (this.doubleClick3 == true) {
					this.doubleClick3 = false
					this.isshowmask = false
				} else {
					this.doubleClick2 = false
					this.doubleClick1 = false
					this.doubleClick3 = true
					this.isshowmask = true
				}
			},

		}

	}
</script>

<style lang="scss" scoped>
	.container {

		.selectitembox {
			.selectitem {
				z-index: 10;
				overflow: hidden;
				height: 90upx;
				background-color: #fff;
				align-items: center;

				.sjbtm {
					z-index: 10;
					transform: rotate(90deg);
					transition: transform 1s;
				}
			}

			.selectitemActive {
				color: #f13b50;

				.sjbtm {
					z-index: 10;
					transform: rotate(270deg);
					transition: transform 1s;
				}
			}
			.flortitem {
				z-index: 10;
				position: absolute;
				background: #fff;
				width: 100%;
				box-shadow: 0 6rpx 0 #eee;
				height: 0rpx;
				overflow: hidden;
				transition: all 1s;

				.item1 {
					z-index: 10;
					border-bottom: 1px solid #EEEEEE;
					padding: 0 32upx;
					height: 80upx;
					display: flex;
					align-items: center;
					font-size: 28upx;

					.rightico {
						z-index: 10;
						color: #fff;
					}
				}

				.item1:active {
					z-index: 10;
					background-color: rgba($color: #000000, $alpha: 0.2);
				}

				.item1acitve {
					z-index: 10;
					color: #f13b50;

					.rightico {
						z-index: 10;
						color: #f13b50;
					}
				}
			}

			.showflortitem {
				z-index: 10;
				height: 240rpx;
				overflow: hidden;
				transition: all 1s;
			}
		}

		// 遮罩层
		.mask {
			position: fixed;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			z-index: 9;
			background: rgba($color: #000000, $alpha: 0.6);
			transition: all 0.3s;
			animation: showmask 0.3s;
		}

		// 遮罩层显示动画
		@keyframes showmask {
			from {
				background: rgba($color: #000000, $alpha: 0.0)
			}

			to {
				background: rgba($color: #000000, $alpha: 0.6);
			}
		}


	}
</style>
