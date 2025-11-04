<template>
	<!-- 使用该组件只需要改两个地方  1.optionitems表头的名称项    2.optionAll全部数据的列表项  -->
	<view class="container">
		<view class="selectitembox">
			<view class="selectitem flex space-around">
				<view class="itemclass" :class="{selectitemActive:select_ing==index }" @click="optionClick(index)"
					v-for="(item,index) in optionitems" :key="index">
					{{item.text}}
					<van-icon name="play" class="sjbtm" />
				</view>
			</view>
			<view class="flortitem" :class="{showflortitem:select_ing!=-1}">
				<view class="item1 flex align-center space-between"
					:class="{item1acitve: optionitems[select_ing].value==item.value}"
					@click="optionitemClick(item)" v-for="item in optionitems[select_ing].childred"
					:key="item.value">
					<text>{{item.text}}</text>
					<text class="rightico">√</text>
				</view>
			</view>
			<view class="mask" v-if="select_ing!=-1" @click="select_ing = -1"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				select_ing: -1,// select_ing:0/1/2 -1不展示
				optionitems: [{
					text: '商品类别',
					value: "a",
					childred: [{
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
				}, {
					text: '默认排序',
					value: 'd',
					childred: [{
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
				}, {
					text: '积分类别',
					value: 'h',
					childred: [{
							text: '积分类别',
							value: 'h'
						},
						{
							text: '型号类别',
							value: 'i'
						},
						{
							text: '材质类别',
							value: 'j'
						},
					],
				}, ],
				optionList: [],
			}
		},
		methods: {
			optionClick(e) {
				if (this.select_ing == e) {
					this.select_ing = -1
					return
				}
				this.isshowmask = true;
				this.select_ing = e
			},
			optionitemClick(e) {
				this.optionitems[this.select_ing].text = e.text
				this.optionitems[this.select_ing].value = e.value
				this.select_ing = -1
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

				// .itemclass{
				// 	height: 100%;
				// 	display: flex;
				// 	align-items: center;
				// 	padding: 40rpx;
				// }
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
