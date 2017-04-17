#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author    :  Jason
# @Mail      :  jczhangmail@126.com
# @File      :  jsonop.py

import json


def load():
    with open("static/home/config.json") as f: # 设置以utf-8解码模式读取文件，encoding参数必须设置，否则默认以gbk模式读取文件，当文件中包含中文时，会报错
        config = json.load(f)
        print config
    # return data


def store(data):
    # 需要判断写入文件是否存在，不存在还需要创建新文件
    with open("static/home/config.json","w") as file:
        file.write(json.dumps(data))



if __name__ == "__main__":
    data = {"ip":"123345","username":"jack","passwd":"111111"}
    store(data)
    load()
