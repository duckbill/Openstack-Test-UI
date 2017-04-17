#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author    :  Jason
# @Mail      :  jczhangmail@126.com
# @File      :  wsgi.py

from flask import  render_template,request,json,jsonify

from dashboard import create_app
from dashboard.rally.view import *
from dashboard.tempest.view import *
from test import read_test

from remoteop import SSHOP
from jsonop import store

application = create_app()


@application.route('/index',methods=['POST','GET'])
@application.route('/index.html',methods=['POST','GET'])
@application.route('/',methods=['POST','GET'])
def index():
    # if request.method == 'GET':
    #     data = read_test()
    #     return render_template('index.html',data=data)
    if request.method == 'POST':

        data = json.loads(request.get_data())
        ip = data["ip"]
        login_name = data["login_name"]
        password = data["password"]
        sshop = SSHOP(ip,login_name,password)
        sshop.test_connect()
        print sshop.statue
        statue = sshop.statue
        json_data = {"ip":ip,"login_name":login_name,"password":password,"statue":statue}

        if sshop.statue == 1:
            print statue,password
            store(json_data)
            data["statue"] = "yes"
        else:
            data["statue"] = "no"
        # 然后在本地对数据进行处理,再返回给前端

        return jsonify(data)


    return render_template('index.html')

if __name__ == "__main__":
    application.run(debug=True)