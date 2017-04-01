#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author    :  Jason
# @Mail      :  jczhangmail@126.com
# @File      :  __init__.py.py

from . import keystone,cinder,glance,neutron,nova,tempest_index

keystone = keystone.keystone
cinder = cinder.cinder
glance = glance.glance
neutron = neutron.neutron
nova = nova.nova
tempest_index = tempest_index.tempest_index
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
