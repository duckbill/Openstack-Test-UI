#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author    :  Jason
# @Mail      :  jczhangmail@126.com
# @File      :  ssh-test3.py

import paramiko
import string
import webbrowser
import os
import sys

for hostname in open('servernames.txt', 'r'):

    print "||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||"
    print hostname.strip('\n')
    servername = hostname.strip('\n')
    uname = "stack"
    passwd = "111111"

    ssh = paramiko.Transport(servername)
    ssh.connect(username=uname, password=passwd)
    chan = ssh.open_session()

    # chan.exec_command(" echo \" INFRASTRUCTURE METRICS \" ; \
    #                 echo \"Memory >> `free -mt | grep Mem` \" ; \
    #                 echo \"Number of Processors >> `cat /proc/cpuinfo | grep processor | wc -l `\" ; \
    #                 #echo \"#Opt partition >> `df -h /opt `\"")
    chan.exec_command("bash /opt/stack/paramiko-test.sh")
    for line in chan.makefile('r+'):
        print line.strip('\n')

    chan.close()
    ssh.close()
