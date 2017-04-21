$(document).ready(function () {

    $("#add-host-key").click(function () {
        add_host_key();
        return false;
    });

    $("#web-submit").click(function () {
        web_test_submit();
        return false;
    });
    $("#web-cancel").click(function () {
        web_test_cancel();
        return false;
    });
    // 点击功能链接rally和tempest先判定。配置信息是否能够正常连接
    $("#tempest").click(function () {
        web_tempest();
        return false;

    })
    $("#rally").click(function () {
        web_rally();
        return false;

    })


    set_host_page_info(true);
});

function add_host_key() {
    if ($("#add-key-dialog").length == 0) {
        var html = '<div class="modal fade" id="add-key-dialog" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"> \
            <div class="modal-dialog"> \
                <div class="modal_head"> \
                  <button type="button" class="modal_close" data-dismiss="modal"></button> \
                  <h4 class="modal-title" id="myModalLabel">新增证书</h4> \
                </div> \
                <div class="modal_body"> \
                  <form id="add-key-form" action="" method="post" enctype="multipart/form-data" target="add-key-hidden-frame">  \
                    <div class="modal_name"> \
                      <div class="modal_nameword">证书名称</div> \
                      <input id="input-key-name" class="form-control modal_width390 input_grey" type="text" name="key_name" placeholder="请输入4~12个字符的证书名" required autofocus /> \
                      <div id="message-key-name" class="modal_nametip_grey"></div> \
                    </div> \
                    <div class="modal_name"> \
                      <div class="modal_nameword">证书文件</div> \
                      <input id="input-key-file" class="form-control subsititute_up input_grey" data-button-class="subsititute_btn" type="file" name="upload" value="选择文件" /> \
                      <div id="message-key-file" class="modal_nametip_grey">200K以内</div> \
                      <div id="upload-loader" class="modal_loader" style="display:none;"></div> \
                    </div> \
                  </form> \
                    <iframe id="add-key-hidden-frame" name="add-key-hidden-frame" src="javascript:false;" style="width:0px;height:0;border:0px;"></iframe> \
                </div> \
                <div class="modal-footer"> \
                  <button type="button" class="modal_btn_l" data-dismiss="modal">取消</button> \
                  <button id="key-file-submit" type="button" class="modal_btn_r" data-dismiss="modal">确定</button> \
                </div> \
              </div> \
            </div>';
        $(".bottom_box").after(html);
        $("#input-key-file").themeFileInput();
        $("#key-file-submit").click(function () {
            host_info_elem.submitKeyFile();
            return false;
        });
        var ajax_interface = new AjaxInterface();
        $("#add-key-form").attr("action", ajax_interface.urls.add_key);
    }
    $("#add-key-dialog").modal({backdrop: "static"});
}


var host_info_elem = new HostInfoElem();

function set_host_page_info(ajax) {
    host_info_elem.setHostInfo(ajax);
    return true;
}

function web_test_cancel() {

    window.location.href = "index.html";
    return true;
}

function web_test_submit() {
    var host_info = new Object();
    host_info.login_username = $("#input-web-username").val();
    var auth = null;
    host_info.login_password = null;
    host_info.login_key = null;

    $("[name=\"input-host-auth-radio\"]").each(function () {
        if (this.checked) {
            auth = $(this).attr("value");
        }
    });
    if (auth == 'password') {
        host_info.login_password = $("#input-web-password").val();
    } else if (auth == 'key') {
        host_info.login_key = $("#input-web-key").val();
    }

    var is_error = false;
    regExpIpv4 = new RegExp('^((25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9])\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9])$');
    var ip = $("#input-host-ip").val();
    if (ip.indexOf("：") > 0) {
        $("#input-host-ip-description").addClass("error").html("格式错误");
        $("#input-host-ip").addClass("input-error");
        is_error = true;
    } else {
        if (ip.indexOf(":") > 0) {
            var ipPort = ip.split(":");
            ip = ipPort[0];
            var port = ipPort[1];
            regExpPort = new RegExp('^[0-9]*$');
            if (ip == "") {
                alert("test1");
                $("#input-host-ip-description").addClass("error").html("IP地址不能为空");
                $("#input-host-ip").addClass("input-error");
                is_error = true;
            } else if (!regExpIpv4.test(ip)) {
                alert("test2")
                $("#input-host-ip-description").addClass("error").html("IP地址格式错误");
                $("#input-host-ip").addClass("input-error");
                is_error = true;
            } else if (port == "") {
                $("#input-host-ip-description").addClass("error").html("请补充端口");
                $("#input-host-ip").addClass("input-error");
                is_error = true;
            } else if (!regExpPort.test(port)) {
                $("#input-host-ip-description").addClass("error").html("端口格式错误");
                $("#input-host-ip").addClass("input-error");
                is_error = true;
            } else {
                $("#input-host-ip-description").removeClass("error").html("");
                $("#input-host-ip").removeClass("input-error");
            }
        } else {
            if (ip == "") {
                $("#input-host-ip-description").addClass("error").html("IP地址不能为空");
                $("#input-host-ip").addClass("input-error");
                is_error = true;
            } else if (!regExpIpv4.test(ip)) {
                $("#input-host-ip-description").addClass("error").html("IP地址格式错误");
                $("#input-host-ip").addClass("input-error");
                is_error = true;
            } else {
                $("#input-host-ip-description").removeClass("error").html("");
                $("#input-host-ip").removeClass("input-error");
            }
        }
    }

    if (host_info.login_username == "") {
        $("#input-web-username-description").addClass("error").html("用户名不能为空");
        $("#input-web-username").addClass("input-error");
        is_error = true;
    } else {
        $("#input-web-username-description").removeClass("error").html("");
        $("#input-web-username").removeClass("input-error");
    }

    if (auth == "password" && host_info.login_password == "") {
        $("#input-web-password-description").addClass("error").html("密码不能为空");
        $("#input-web-password").addClass("input-error");
        is_error = true;
    } else {
        $("#input-web-password-description").removeClass("error").html("");
        $("#input-web-password").removeClass("input-error");
    }

    if (auth == "key" && host_info.login_key == null) {
        $("#input-web-key-description").addClass("error").html("Key不能为空");
        $("#input-web-key").addClass("input-error");
        is_error = true;
    } else {
        $("#input-web-key-description").removeClass("error").html("小于20K");
        $("#input-web-key").removeClass("input-error");
    }

    if (!is_error) {

        var configfile = new Object();
        configfile.ip = $("#input-host-ip").val()
        configfile.login_name = $("#input-web-username").val()
        configfile.password = $("#input-web-password").val()
        var data = JSON.stringify(configfile)

        // alert("ccc");

        $.ajax({
            // "/"表示触发所跳转的页面
            url: "/",
            type: "POST",
            data: data,
            beforeSend: function () {
                swal({
                    title: "正在验证！",
                    type: "warning",
                    showConfirmButton: false
                });


            },
            success: function (msg) {
                if (msg.statue == "yes") {
                    swal({
                        title: "验证连接连接成功！",
                        text: "连接信息已经保存，请开始测试吧",
                        type: "success"
                    })

                    // type:"success"},function(){window.location="${pageContext.request.contextPath}/admin?action=deleteArticleById&id="+id})
                }
                else {
                    swal({
                        title: "验证连接连接失败！",
                        text: "请检查输入信息是否正确，测试环境是否良好！",
                        type: "error"
                    })
                }


            }
        })

        return true;


    }

    //
    // if(!is_error) {
    //
    //     var task_info = new Object();
    //
    //     task_info.task_name = task_name;
    //     task_info.cloud_id = cloud_id;
    //     task_info.host_info_id = $("#input-host-ip").val();
    //     task_info.username = host_info.login_username;
    //     task_info.password = host_info.login_password;
    //     task_info.login_key = host_info.login_key;
    //     task_info.mem = mem1;
    //     task_info.cpu = cpu1;
    //     $("#host-test-ongoing").modal({backdrop: "static"}).on('hidden.bs.modal', function() {
    //     		ajax_interface.ajaxPost(
    //     	            ajax_interface.urls.excute_web_test,
    //     	            task_info,
    //     	            function(data) {
    //     	            	window.location.href = "my-tasks.html?type=web";
    //     	                return;
    //     	            }
    //     	        );
    //     });
    // }

    return false;
}

function web_rally() {
    $.ajax({
        url: "static/home/config.json",//json文件位置
        type: "GET",//请求方式为get
        dataType: "json", //返回数据格式为json
        cache: false,
        success: function (data) {//请求成功完成后要执行的方法
            if (data.statue == 1) {
                window.location.href = "/rally"
                return true
            }
            else {
                swal({
                    title: "请先通过验证再进行测试！",
                    type: "error"
                });
                return false
            }

        },
        error: function () {
            //json文件为空或者不存在
            // alert(typeof(data));
            // alert("22");
            //
            // alert(data);

            swal({
                title: "没有发现连接配置信息！",
                type: "error"
            });
            return false

        }
    })

    return false;
}

function web_tempest() {
    $.ajax({
        url: "static/home/config.json",//json文件位置
        type: "GET",//请求方式为get
        dataType: "json", //返回数据格式为json
        cache: false,
        success: function (data) {//请求成功完成后要执行的方法
            if (data.statue == 1) {
                window.location.href = "/tempest"
                return true
            }
            else {
                swal({
                    title: "请先通过验证再进行测试！",
                    type: "error"
                })
            }

        },
        error: function () {
            //json文件为空或者不存在
            // alert(typeof(data));
            // alert("22");
            //
            // alert(data);

            swal({
                title: "没有发现连接配置信息！",
                type: "error"
            });
            return false

        }
    })

    return false;
}