#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author    :  Jason
# @Mail      :  jczhangmail@126.com
# @File      :  wsgi.py

from dashboard import create_app

application = create_app()

if __name__ == "__main__":
    application.run(debug=True)