#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author    :  Jason
# @Mail      :  jczhangmail@126.com
# @File      :  cinder.py

from flask import Blueprint,render_template


tempest_cinder = Blueprint('tempest_cinder',__name__,url_prefix='/tempest/cinder')


@tempest_cinder.route('/')
@tempest_cinder.route('/index')
def index():
    return render_template('tempest/ciner/cinder_index.html')

@tempest_cinder.route('/detail')
def detail():
    return render_template("tempest/cinder/cinder_detail.html")