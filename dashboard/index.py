#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author  : Jason
# @Mail    : jczhangmail@126.com
# @File    : manager.py.py


from flask import Flask

app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello World!'


if __name__ == '__main__':
    app.run()
