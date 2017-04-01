#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author    :  Jason
# @Mail      :  jczhangmail@126.com
# @File      :  tempest_index.py

from flask import Blueprint,render_template


rally_index = Blueprint('rally_index',__name__,url_prefix='/rally')


@rally_index.route('/')
@rally_index.route('/index')
def index():
    return render_template('rally/rally_index.html')
