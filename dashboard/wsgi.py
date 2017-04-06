#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author    :  Jason
# @Mail      :  jczhangmail@126.com
# @File      :  wsgi.py

from flask import  render_template

from dashboard import create_app
from dashboard.rally.view import *
from dashboard.tempest.view import *


application = create_app()

@application.route('/')
def index():
    return render_template('index.html')

if __name__ == "__main__":
    application.run(debug=True)