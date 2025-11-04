---
title: 电子签名

date: 2023-5-21
tags:
  - 电子签名
  - 笔记
categories:
  - 汇智篇
---

# 组件


```vue
<template>
    <div>
        <canvas ref="canvas" @mousedown="startDrawing" @mousemove="draw" @mouseup="stopDrawing"></canvas>
        <button @click="clearSignature">清除签名</button>
        <button @click="saveSignature">保存签名</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isDrawing: false,
            context: null,
            lastX: 0,
            lastY: 0,
        };
    },
    mounted() {
        this.context = this.$refs.canvas.getContext("2d");
        this.context.lineWidth = 2;
    },
    methods: {
        startDrawing(event) {
            this.isDrawing = true;
            const rect = this.$refs.canvas.getBoundingClientRect();
            this.lastX = event.clientX - rect.left;
            this.lastY = event.clientY - rect.top;
        },
        draw(event) {
            if (!this.isDrawing) return;
            const rect = this.$refs.canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            this.context.beginPath();
            this.context.moveTo(this.lastX, this.lastY);
            this.context.lineTo(x, y);
            this.context.stroke();

            this.lastX = x;
            this.lastY = y;
        },
        stopDrawing() {
            this.isDrawing = false;
        },
        clearSignature() {
            const canvas = this.$refs.canvas;
            this.context.clearRect(0, 0, canvas.width, canvas.height);
        },
        saveSignature() {
            const canvas = this.$refs.canvas;
            const signatureData = canvas.toDataURL();
            // 将 signatureData 发送到服务器进行保存或其他操作
            console.log('signatureData', signatureData);
        },
    },
};
</script>

```

