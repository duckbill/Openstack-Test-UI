#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author    :  Jason
# @Mail      :  jczhangmail@126.com
# @File      :  tempest_index.py

from flask import Blueprint,render_template,request,json,jsonify
import time
from dashboard.remoteop import SSHOP

rally_index = Blueprint('rally_index',__name__,url_prefix='/rally')

def backtest(ip,login_name,password):
    cmds = ["bash /opt/stack/result-rally/rally-main/start/neutron-exec/neutron-start.sh",
            "bash /opt/stack/result-rally/rally-main/start/neutron-exec/neutron-upload.sh", ]
    components = ["neutron"]
    sshop = SSHOP(ip, login_name, password)
    sshop.sshSession(components, cmds)
    return sshop.allflag
@rally_index.route('/',methods=['POST','GET'])
@rally_index.route('/index',methods=['POST','GET'])
def index():
    if request.method == "POST":
        data = json.loads(request.get_data())
        ip = data["ip"]
        login_name = data["login_name"]
        password = data["password"]
        cmds = ["bash /opt/stack/result-rally/rally-main/start/neutron-exec/neutron-start.sh",
                "bash /opt/stack/result-rally/rally-main/start/neutron-exec/neutron-upload.sh", ]
        components = ["neutron"]
        sshop = SSHOP(ip, login_name, password)
        sshop.sshSession(components, cmds)

        print "ip is ：",ip
        print "login_name is :",login_name
        print "password is : ",password
        time.sleep(4)
        # print "sshop flag is:",sshop.flag
        # print "sshop allflag is:",sshop.allflag
        return jsonify(1)
    #
    # if request.method == "GET":
    #     print "get"
    return render_template('rally/rally_index.html')
