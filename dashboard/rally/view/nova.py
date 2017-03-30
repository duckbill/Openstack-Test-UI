#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author    :  Jason
# @Mail      :  jczhangmail@126.com
# @File      :  nova.py

from flask import Blueprint,render_template


nova = Blueprint('nova',__name__,url_prefix='/nova',template_folder='../templates')


@nova.route('/')
@nova.route('/index')
def index():
    return render_template('ciner/nova_index.html')

@nova.route('/detail')
def detail():
    return render_template("nova/nova_detail.html")