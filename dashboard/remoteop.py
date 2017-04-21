#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author    :  Jason
# @Mail      :  jczhangmail@126.com
# @File      :  remoteop.py
import paramiko

from jsonop import writefile,emptyfile


class SSHOP:
    def __init__(self, ip, username, passwd):
        self.ip = ip
        self.username = username
        self.passwd = passwd
        self.statue = 0
        self.exception_info = "nothing"
        self.flag = 0
        self.allflag = 0

    def test_connect(self):

        try:
            client = paramiko.SSHClient()
            client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
            client.connect(self.ip, 22, self.username, self.passwd, timeout=5)
            self.statue = 1
        except Exception, e:
            self.exception_info = e
            self.statue = 1
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


    def sshSession(self, *args):
        """write file function.
        :param components: openstack component list
        :param cmds： cmds list
        """
        try:
            ssh = paramiko.Transport(self.ip)
            ssh.connect(username=self.username, password=self.passwd)
            for component in args[0]:
                pathhtml = "templates/rally/" + component
                pathjson = "static/rally/json"
                print "component is :", component
                filehtml = component + "_detail.html"
                filejson = component + "_json.json"
                filename = ""

                for cmd in args[1]:
                    if self.flag == 0:
                        chan = ssh.open_session()
                        chan.exec_command(cmd)
                        for line in chan.makefile('r+'):
                            if line.strip('\n') == "successflag":
                                self.flag = 1
                            print line.strip('\n')
                        for line in chan.makefile_stderr('r+'):
                            print line.strip('\n')
                        chan.close()
                    else:
                        chan = ssh.open_session()
                        chan.exec_command(cmd)
                        emptyfile(pathhtml,filehtml)
                        emptyfile(pathjson,filejson)


                        for line in chan.makefile('r+'):
                            if line.strip('\n') == "upload_html":
                                filename = filehtml
                                continue
                            if line.strip('\n') == "upload_json":
                                filename = filejson
                                pathhtml = "static/rally/json"
                                continue
                            writefile(pathhtml, filename, "a", "nojson", line)

                        for line in chan.makefile_stderr('r+'):
                            print line.strip('\n')
                        chan.close()
        # schedule = {component:1}
        except Exception, e:
            print '%s\t 运行失败,失败原因\r\n%s' % (self.ip, e)
        finally:
            ssh.close()
            self.allflag = 1


if __name__ == "__main__":
    cmds = ["bash /opt/stack/result-rally/rally-main/start/neutron-exec/neutron-start.sh",
            "bash /opt/stack/result-rally/rally-main/start/neutron-exec/neutron-upload.sh", ]
    components = ["neutron"]
    sshop = SSHOP("192.168.39.123", "stack", "111111")

    sshop.sshSession(components, cmds)
    print "flag is: ", sshop.flag

