#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author    :  Jason
# @Mail      :  jczhangmail@126.com
# @File      :  remote_ssh.py


import paramiko

def sshCmd(ip, username, passwd, cmds):
    try:
        client = paramiko.SSHClient()
        client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
        client.connect(ip, 22, username, passwd, timeout=5)
        for cmd in cmds:
            stdin, stdout, stderr = client.exec_command(cmd)
            lines = stdout.readlines()
            # print out
            for line in lines:
                print line,
        print '%s\t 运行完毕\r\n' % (ip)
    except Exception, e:
        print '%s\t 运行失败,失败原因\r\n%s' % (ip, e)
    finally:
        client.close()
if __name__ == "__main__":
    cmds = ["source /opt/stack/rally/bin/activate && rally deployment list"]
    sshCmd("192.168.39.123", "stack", "111111", cmds)

