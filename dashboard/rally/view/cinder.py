#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author    :  Jason
# @Mail      :  jczhangmail@126.com
# @File      :  cinder.py

from flask import Blueprint,render_template


cinder = Blueprint('cinder',__name__,url_prefix='/cinder',template_folder='../templates')


@cinder.route('/')
@cinder.route('/index')
def index():
    return render_template('ciner/cinder_index.html')

@cinder.route('/detail')
def detail():
    return render_template("cinder/cinder_detail.html")