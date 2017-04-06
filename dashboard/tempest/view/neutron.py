#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author    :  Jason
# @Mail      :  jczhangmail@126.com
# @File      :  neutron.py

from flask import Blueprint,render_template


tempest_neutron = Blueprint('tempest_neutron',__name__,url_prefix='/tempest/neutron')


@tempest_neutron.route('/')
@tempest_neutron.route('/index')
def index():
    return render_template('tempest/neutron/neutron_index.html')

@tempest_neutron.route('/detail')
def detail():
    return render_template("tempest/neutron/neutron_detail.html")