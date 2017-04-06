#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author    :  Jason
# @Mail      :  jczhangmail@126.com
# @File      :  glance.py

from flask import Blueprint,render_template


tempest_glance = Blueprint('tempest_glance',__name__,url_prefix='/tempest/glance')


@tempest_glance.route('/')
@tempest_glance.route('/index')
def index():
    return render_template('tempest/glance/glance_index.html')

@tempest_glance.route('/detail')
def detail():
    return render_template("tempest/glance/glance_detail.html")