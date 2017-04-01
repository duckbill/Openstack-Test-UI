#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author    :  Jason
# @Mail      :  jczhangmail@126.com
# @File      :  nova.py

from flask import Blueprint,render_template


nova = Blueprint('nova',__name__,url_prefix='/tempest/nova')


@nova.route('/')
@nova.route('/index')
def index():
    return render_template('tempest/nova/nova_index.html')

@nova.route('/detail')
def detail():
    return render_template("tempest/nova/nova_detail.html")