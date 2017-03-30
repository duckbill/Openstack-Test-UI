#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author    :  Jason
# @Mail      :  jczhangmail@126.com
# @File      :  test.py

from flask import Flask
from werkzeug.serving import run_simple


app = Flask(__name__)
app.debug = True

@app.route('/')
def hello_word():
    return 'Hello word'

if __name__ == '__main__':
    run_simple('localhost', 5000, app, use_reloader=True, use_debugger=True, use_evalex=True)