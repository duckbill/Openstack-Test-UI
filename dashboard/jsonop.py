#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author    :  Jason
# @Mail      :  jczhangmail@126.com
# @File      :  jsonop.py

import json
import os


def load(*args):
    if args[0].endswith('/') == False:
        path = args[0] + "/"
    with open(path + args[1]) as f:  # 设置以utf-8解码模式读取文件，encoding参数必须设置，否则默认以gbk模式读取文件，当文件中包含中文时，会报错
        config = json.load(f)
        print config
        # return data


def store(*args):
    # 需要判断写入文件是否存在，不存在还需要创建新文件
    # 需要判断注意路径拼接的/
    """write file function.
    :param 0: file path
    :param 1: file name
    :param 2: the mode be writen,such as "w,w+,a"
    :param 3: json format or not
    :param 4: data be writen
    """
    if os.path.exists(args[0]):
        with open(args[0] + filename, "w+") as file:
            file.write(json.dumps(data))
    else:
        os.makedirs(path)
        with open(path + filename, "w+") as file:
            file.write(json.dumps(data))


def emptyfile(*args):
    """write file function.
    :param 0: file path
    :param 1: file name
    """
    if args[0].endswith('/') == False:
        path = args[0] + "/"
        # print path
    if os.path.exists(path) == False:
        os.makedirs(path)

    empty = ""
    with open(path + args[1], "w+") as file:
        file.write(empty)

def writefile(*args):
    """write file function.
    :param 0: file path
    :param 1: file name
    :param 2: the mode be writen,such as "w,w+,a"
    :param 3: json format or not
    :param 4: data be writen
    """
    if args[0].endswith('/') == False:
        path = args[0] + "/"
        # print path
    if os.path.exists(path) == False:
        os.makedirs(path)

    # empty = ""
    # with open(path + args[1], "w+") as file:
    #     file.write(empty)

    with open(path + args[1], args[2]) as file:

        if args[3] == "json":
            file.write(json.dumps(args[4]))
        else:
            file.write(args[4])


if __name__ == "__main__":
    data = {"ip": "123345", "username": "jack", "passwd": "111111"}
    path = "static/home"
    filename = "1config.json"
    # store(path,filename,"w+","json",data)
    writefile(path, filename, "w+", "json", data)

    load(path, filename)
