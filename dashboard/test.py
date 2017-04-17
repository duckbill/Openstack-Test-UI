#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author    :  Jason
# @Mail      :  jczhangmail@126.com
# @File      :  test.py

import json                                                     #导入Json模块
#
# def processJson(inputJsonFile, outputJsonFile):
#     fin = open(inputJsonFile, 'r')
#     fout = open(outputJsonFile, 'w')
#     for eachLine in fin:
#         line = eachLine.strip().decode('utf-8')                #去除每行首位可能的空格，并且转为Unicode进行处理
#         line = line.strip(',')                                 #去除Json文件每行大括号后的逗号
#         js = None
#         try:
#             js = json.loads(line)                              #加载Json文件
#         except Exception,e:
#             print 'bad line'
#             continue
#         js["xxx"] = xxx                                        #对您需要修改的项进行修改，xxx表示你要修改的内容
#         outStr = json.dumps(js, ensure_ascii = False) + ','    #处理完之后重新转为Json格式，并在行尾加上一个逗号
#         fout.write(outStr.strip().encode('utf-8') + '\n')      #写回到一个新的Json文件中去
#     fin.close()                                                #关闭文件
#     fout.close()

# processJson('myInput.json', 'myOutput.json')

def read_test():
    f = open("config.json")  #设置以utf-8解码模式读取文件，encoding参数必须设置，否则默认以gbk模式读取文件，当文件中包含中文时，会报错
    config = json.load(f)
    # family = setting['BaseSettings']['size']   #注意多重结构的读取语法
    # size = setting['fontSize']
    data = []
    data.append(config['ip'])
    data.append(config['username'])
    data.append(config['password'])

    return data
def write_test():
    f = open("config.json",'w')
    config = json.load(f)
    config['ip'] = "192.168.39.24"
    f.write("config.json")



if __name__ == "__main__":
    data = read_test()

#print read_test()[0]
# old_result = read_test()
# # write_test()
# # new_result = read_test()
# print(old_result)
# # print(new_result)
