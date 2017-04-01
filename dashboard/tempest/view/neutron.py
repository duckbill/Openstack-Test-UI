#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author    :  Jason
# @Mail      :  jczhangmail@126.com
# @File      :  neutron.py

from flask import Blueprint,render_template


neutron = Blueprint('neutron',__name__,url_prefix='/tempest/neutron')


@neutron.route('/')
@neutron.route('/index')
def index():
    return render_template('tempest/neutron/neutron_index.html')

@neutron.route('/detail')
def detail():
    return render_template("tempest/neutron/neutron_detail.html")