#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author    :  Jason
# @Mail      :  jczhangmail@126.com
# @File      :  remote_ssh.py

def args_test(param1,*args):
    print "first param is:",param1
    index = 1
    for value in args:
       print "the "+str(index)+" is:"+str(value)
       index += 1

def kwargs_test(param1,**kwargs):
    print "the first param is: ",param1
    for key in kwargs:
        print "the key is: %s, and the value is: %s" %(key,kwargs[key])
def fun(*args, **kwargs):
    print 'args = ', args
    print 'kwargs = ', kwargs
    print '###'
if __name__ == "__main__":
    # args_test('ha',1,'a','b','d','test')
    # kwargs_test('hi,kwargs',tom = 30,lilei = 28,hamei = 29)
    fun(1,2,3,4,a=1,b=2)