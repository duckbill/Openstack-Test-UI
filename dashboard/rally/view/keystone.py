#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author  : Jason
# @Mail    : jczhangmail@126.com
# @File    : keystone.py

from flask import Blueprint,render_template


keystone = Blueprint('keystone',__name__,url_prefix='/keystone')


@keystone.route('/')
@keystone.route('/index')
def index():
    return render_template('rally/keystone/keystone_index.html')

@keystone.route('/detail')
def detail():
    return render_template("keystone/keystone_detail.html")