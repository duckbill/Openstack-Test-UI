#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author  : Jason
# @Mail    : jczhangmail@126.com
# @File    : view.py

from dashboard.index import  app
from keystone import keystone
from nova import nova

app.register_blueprint(keystone,url_prefix='/keystone')
app.register_blueprint(nova,url_prefix='/nova')