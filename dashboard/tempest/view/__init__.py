#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author    :  Jason
# @Mail      :  jczhangmail@126.com
# @File      :  __init__.py.py

from . import keystone,cinder,glance,neutron,nova,tempest_index

tempest_keystone = keystone.tempest_keystone
tempest_cinder = cinder.tempest_cinder
tempest_glance = glance.tempest_glance
tempest_neutron = neutron.tempest_neutron
tempest_nova = nova.tempest_nova
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
