---
title: Java 代码片段
date: 2023-5-21
tags:
  - Java
  - 代码片段
categories:
  - 自学篇
createTime: 2025/08/24 00:25:17
permalink: /article/v80ldvsx/
---

## 图片转base64

```java
res.setImg(preview(res.getImg()));



public String preview(String name) {
        try {
            String imagePath = "D:\\java-upload-Pic\\" + name;
            File imageFile = new File(imagePath);

            if (imageFile.exists()) {
                FileInputStream fileInputStream = new FileInputStream(imageFile);
                byte[] imageData = new byte[(int) imageFile.length()];
                fileInputStream.read(imageData);
                fileInputStream.close();

                byte[] base64ImageData = Base64.getEncoder().encode(imageData);
                String base64ImageString = new String(base64ImageData, StandardCharsets.UTF_8);

                return "data:image/jpeg;base64," + base64ImageString;

            } else {
                // 图片文件不存在的处理逻辑
                return null;

            }
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
```

