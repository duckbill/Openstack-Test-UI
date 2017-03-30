#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author    :  Jason
# @Mail      :  jczhangmail@126.com
# @File      :  glance.py

from flask import Blueprint,render_template


glance = Blueprint('glance',__name__,url_prefix='/glance',template_folder='../templates')


@glance.route('/')
@glance.route('/index')
def index():
    return render_template('ciner/glance_index.html')

@glance.route('/detail')
def detail():
    return render_template("glance/glance_detail.html")