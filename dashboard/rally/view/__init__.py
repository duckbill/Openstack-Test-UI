#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author    :  Jason
# @Mail      :  jczhangmail@126.com
# @File      :  __init__.py.py

from . import keystone,cinder,glance,neutron,nova,rally_index

rally_keystone = keystone.rally_keystone
rally_cinder = cinder.rally_cinder
rally_glance = glance.rally_glance
rally_neutron = neutron.rally_neutron
rally_nova = nova.rally_nova
rally_index = rally_index.rally_index
#
# from dashboard import factory
# from dashboard.helpers import JSONEncoder
#
# def create_app(settings_orverride=None, register_security_blueprint=False):
#     """Return the rally application instance"""
#
#     app = factory.create_app(__name__, __path__)
#
#     """Set the default Json encoder"""
#     app.json_encoder = JSONEncoder
#
#     return app
