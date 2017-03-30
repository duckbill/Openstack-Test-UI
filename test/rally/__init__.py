#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author    :  Jason
# @Mail      :  jczhangmail@126.com
# @File      :  __init__.py.py

from .. help import helpers

def exec_test():
    return helpers.register_blueprints(__name__ , __path__)