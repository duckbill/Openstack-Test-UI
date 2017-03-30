#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author  : Jason
# @Mail    : jczhangmail@126.com
# @File    : manager.py.py


from flask import Flask, render_template

from dashboard.rally.view.keystone import keystone

app = Flask(__name__)

app.register_blueprint(keystone)


@app.route('/')
def hello_world():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug = True)
