---
title: docker-compose安装mongo模板
conmment: true
customerLayoutList: true
---

### mongo

> mongo4的docker-compose.yml 配置如下：

```sh
version: '3.1'
services:
  mongo:
    restart: always
    image: mongo:4
    container_name: mongo
    ports:
      - 27017:27017
    volumes:
      - /usr/local/mongo/data:/data/db
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: root
```



