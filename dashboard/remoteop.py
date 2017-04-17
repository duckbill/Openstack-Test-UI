#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author    :  Jason
# @Mail      :  jczhangmail@126.com
# @File      :  remoteop.py
import paramiko


class SSHOP:
    def __init__(self, ip, username, passwd):
        self.ip = ip
        self.username = username
        self.passwd = passwd
        self.statue = 0
        self.exception_info = "nothing"
    def test_connect(self):

        try:
            client = paramiko.SSHClient()
            client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
            client.connect(self.ip, 22, self.username, self.passwd, timeout=5)
            self.statue = 1
        except Exception, e:
            self.exception_info = e
            self.statue = 0
        finally:
            client.close()


    def sshCmd(self, cmds):

        try:
            client = paramiko.SSHClient()
            client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
            client.connect(self.ip, 22, self.username, self.passwd, timeout=5)
            for cmd in cmds:
                stdin, stdout, stderr = client.exec_command(cmd)
                lines = stdout.readlines()
                # print out
                for line in lines:
                    print line,
            print '%s\t 运行完毕\r\n' % (self.ip)
        except Exception, e:
            print '%s\t 运行失败,失败原因\r\n%s' % (self.ip, e)
        finally:
            client.close()


if __name__ == "__main__":
    cmds = ["source /opt/stack/rally/bin/activate && rally deployment list"]
    sshop = SSHOP("192.168.39.123", "root", "111111")
    sshop.test_connect()
    print sshop.statue
    print sshop.exception_info
    #sshop.sshCmd(cmds)
