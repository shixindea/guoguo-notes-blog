---
title: vxe-table笔记
date: 2023-5-21
tags:
  - vxe-table
  - 笔记
categories:
  - 汇智篇
createTime: 2025/08/24 00:25:17
permalink: /article/w3jbup1k/
---

## 动态添加输入框并获取焦点

>  注意一定要加  edit-render="{ autofocus: '.vxe-input--inner' }"

```html
<vxe-table-column field="coption" title="选项" align="center"
                  :edit-render="{ autofocus: '.vxe-input--inner' }">
    <template #edit="scope">
        <vxe-input type="text" v-model="scope.row.coption" :disabled="formDisabled"
                   @change="$refs.xTable.updateStatus(scope)"></vxe-input>
    </template>
</vxe-table-column>
```

```js
const $table = this.$refs.xTable2
const record = {
    serialNum: this.zm[this.tableData.length],
    coption: '',
}
const { row: newRow } = await $table.insertAt(record, row)
await $table.setEditCell(newRow, 'coption')
this.tableData.push(newRow)
```

