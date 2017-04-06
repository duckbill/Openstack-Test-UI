#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author    :  Jason
# @Mail      :  jczhangmail@126.com
# @File      :  cinder.py

from flask import Blueprint,render_template


rally_cinder = Blueprint('rally_cinder',__name__,url_prefix='/rally/cinder')


@rally_cinder.route('/')
@rally_cinder.route('/index')
def index():
    return render_template('rally/ciner/cinder_index.html')

@rally_cinder.route('/detail')
def detail():
    return render_template("rally/cinder/cinder_detail.html")