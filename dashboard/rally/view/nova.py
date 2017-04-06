#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author    :  Jason
# @Mail      :  jczhangmail@126.com
# @File      :  nova.py

from flask import Blueprint,render_template


rally_nova = Blueprint('rally_nova',__name__,url_prefix='/rally/nova')


@rally_nova.route('/')
@rally_nova.route('/index')
def index():
    return render_template('rally/nova/nova_index.html')

@rally_nova.route('/detail')
def detail():
    return render_template("rally/nova/nova_detail.html")