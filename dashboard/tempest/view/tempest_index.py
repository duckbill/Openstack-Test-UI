#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author    :  Jason
# @Mail      :  jczhangmail@126.com
# @File      :  tempest_index.py

from flask import Blueprint,render_template


tempest_index = Blueprint('tempest_index',__name__,url_prefix='/tempest')


@tempest_index.route('/')
@tempest_index.route('/index')
def index():
    return render_template('tempest/tempest_index.html')
