#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author    :  Jason
# @Mail      :  jczhangmail@126.com
# @File      :  neutron.py

from flask import Blueprint,render_template


rally_neutron = Blueprint('rally_neutron',__name__,url_prefix='/raly/neutron')


@rally_neutron.route('/')
@rally_neutron.route('/index')
def index():
    return render_template('rally/neutron/neutron_index.html')

@rally_neutron.route('/detail')
def detail():
    return render_template("rally/neutron/neutron_detail.html")