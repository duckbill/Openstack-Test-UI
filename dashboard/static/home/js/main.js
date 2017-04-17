function AjaxInterface() {
    this.verifyEmailPage = "account.html";
    this.urls = {
    		"test_host_info":           "portal/instance-vm!list.action",        // Y
    		"cloud_del":           		"portal/instance-vm!delCloud.action",        // Y
    		"cloud_add":          		"portal/instance-vm!addCloud.action",        // Y
    		"cloud_update":             "portal/instance-vm!updateCloud.action",        // Y
    		"vm_list":          		"portal/instance-vm!vmList.action",        // Y
    		"test_host_info_type":      "portal/instance-vm!listType.action",        // Y
            "add_host_info":            "portal/instance-vm!add.action",         // Y
            "excute_host_test":         "portal/test-vm!start.action",      // Y
            "excute_block_test":        "portal/test-storage!start.action",     // Y
            "excute_network_test":      "portal/test-network!start.action",   // Y
            "task_list_host":           "portal/test-vm!listForJson.action",        // Y
            "task_list_block":          "portal/test-storage!listForJson.action",       // Y
            "task_list_network":        "portal/test-network!listForJson.action",     // Y		
    		"excute_com_test":          "portal/test-com!start.action",		//执行复杂业务应用测试
            //WEB评测
    		//--管理员流程
            "check_web_taskname":		"portal/test-web!checkTaskRepeat.action",	//检查任务名称重复
    		"excute_web_test":          "portal/test-web!start.action",		//web测试:执行测试
    		"task_list_web":            "portal/test-web!listForJson.action",		//测试任务列表
    		"task_web_result":          "portal/test-web!detailForJson.action",		//测试任务详情
    		"testing_web_result":		"portal/test-web!testingDetail.action",		//测试任务详情(测试中)
    		//--普通用户流程
    		"check_web_user_taskname":	"portal/test-web-user!checkTaskRepeat.action",	//检查任务名称重复
    		"web_user_resource":		"portal/test-web-user!resource.action",		//根据压力负载返回资源模板
    		"web_user_accept":			"portal/test-web-user!accept.action",		//接受推荐资源模板
    		"web_user_reject":			"portal/test-web-user!reject.action",	//不接受推荐资源模板，我要测试
    		"web_user_submit":			"portal/test-web-user!testSubmit.action",	//评测确定
    		"task_list_web_user":       "portal/test-web-user!listForJson.action",  // 任务列表
    		"web_load_threshold":		"portal/test-web-user!getThreshold.action",//负载最大、小值
    		
    		"task_endtime":				"portal/test-web-user!getEndTime.action",	//测试详情页获取任务结束时间(各模块统一)
    		
    		//CPU评测
    		//--管理员流程
    		"excute_cpu_test":			"portal/test-cpu!start.action",		//CPU测试:执行测试
    		"task_list_cpu":			"portal/test-cpu!listForJson.action",		//测试任务列表
    		"task_cpu_result":			"portal/test-cpu!detailForJson.action",		//测试任务详情
    		"check_cpu_taskname":		"portal/test-cpu!checkTaskRepeat.action",	//检查任务名称重复
    		"testing_cpu_result":		"portal/test-cpu!testingDetail.action",		//测试任务详情(测试中)
    		//--普通用户流程
    		"check_cpu_user_taskname":	"portal/test-cpu-user!checkTaskRepeat.action",	//检查任务名称重复
    		"cpu_user_resource":		"portal/test-cpu-user!resource.action",		//根据压力负载返回资源模板
    		"cpu_user_accept":			"portal/test-cpu-user!accept.action",		//接受推荐资源模板
    		"cpu_user_reject":			"portal/test-cpu-user!reject.action",	//不接受推荐资源模板，我要测试
    		"cpu_user_submit":			"portal/test-cpu-user!testSubmit.action",	//评测确定
    		"task_list_cpu_user":       "portal/test-cpu-user!listForJson.action",  // 任务列表
    		"cpu_load_threshold":		"portal/test-cpu-user!getThreshold.action",//负载最大、小值
    		
    		//memory评测
    		//--管理员流程
    		"excute_memory_test":		"portal/test-memory!start.action",		//memory测试:执行测试
    		"task_list_memory":			"portal/test-memory!listForJson.action",		//测试任务列表
    		"task_memory_result":		"portal/test-memory!detailForJson.action",		//测试任务详情
    		"testing_memory_result":		"portal/test-memory!testingDetail.action",		//测试任务详情(测试中)
    		"check_memory_taskname":		"portal/test-memory!checkTaskRepeat.action",	//检查任务名称重复
    		//--普通用户流程
    		"check_memory_user_taskname":	"portal/test-memory-user!checkTaskRepeat.action",	//检查任务名称重复
    		"memory_user_resource":		"portal/test-memory-user!resource.action",		//根据压力负载返回资源模板
    		"memory_user_accept":			"portal/test-memory-user!accept.action",		//接受推荐资源模板
    		"memory_user_reject":			"portal/test-memory-user!reject.action",	//不接受推荐资源模板，我要测试
    		"memory_user_submit":			"portal/test-memory-user!testSubmit.action",	//评测确定
    		"task_list_memory_user":       "portal/test-memory-user!listForJson.action",  // 任务列表
    		"memory_load_threshold":		"portal/test-memory-user!getThreshold.action",//负载最大、小值
    		
    		//java评测
    		//--管理员流程
    		"excute_java_test":			"portal/test-java!start.action",		//java测试:执行测试
    		"task_list_java":			"portal/test-java!listForJson.action",		//测试任务列表
    		"task_java_result":			"portal/test-java!detailForJson.action",		//测试任务详情
    		"task_java_img":			"portal/test-java!detailForImg.action",		//获取java图片
    		"check_java_taskname":		"portal/test-java!checkTaskRepeat.action",	//检查任务名称重复
    		"testing_java_result":		"portal/test-java!testingDetail.action",		//测试任务详情(测试中)
    		//--普通用户流程
    		"check_java_user_taskname":	"portal/test-java-user!checkTaskRepeat.action",	//检查任务名称重复
    		"java_user_resource":		"portal/test-java-user!resource.action",		//根据压力负载返回资源模板
    		"java_user_accept":			"portal/test-java-user!accept.action",		//接受推荐资源模板
    		"java_user_reject":			"portal/test-java-user!reject.action",	//不接受推荐资源模板，我要测试
    		"java_user_submit":			"portal/test-java-user!testSubmit.action",	//评测确定
    		"task_list_java_user":       "portal/test-java-user!listForJson.action",  // 任务列表
    		"java_load_threshold":		"portal/test-java-user!getThreshold.action",//负载最大、小值
    		
    		//disk评测
    		//--管理员流程
    		"excute_disk_test":			"portal/test-disk!start.action",		//执行测试
    		"task_list_disk":			"portal/test-disk!listForJson.action",		//测试任务列表
    		"task_disk_result":			"portal/test-disk!detailForJson.action",		//测试任务详情
    		"check_disk_taskname":		"portal/test-disk!checkTaskRepeat.action",	//检查任务名称重复
    		//--普通用户流程
    		"check_disk_user_taskname":	"portal/test-disk-user!checkTaskRepeat.action",	//检查任务名称重复
    		"disk_user_resource":		"portal/test-disk-user!resource.action",		//根据压力负载返回资源模板
    		"disk_user_accept":			"portal/test-disk-user!accept.action",		//接受推荐资源模板
    		"disk_user_reject":			"portal/test-disk-user!reject.action",	//不接受推荐资源模板，我要测试
    		"disk_user_submit":			"portal/test-disk-user!testSubmit.action",	//评测确定
    		"task_list_disk_user":       "portal/test-disk-user!listForJson.action",  // 任务列表
    		"disk_load_threshold":		"portal/test-disk-user!getThreshold.action",//负载最大、小值
    		
    		//database评测
    		//--管理员流程
    		"excute_database_test":			"portal/test-database!start.action",		//执行测试
    		"task_list_database":			"portal/test-database!listForJson.action",		//测试任务列表
    		"task_database_result":			"portal/test-database!detailForJson.action",		//测试任务详情
    		"check_database_taskname":		"portal/test-database!checkTaskRepeat.action",	//检查任务名称重复
    		//--普通用户流程
    		"check_database_user_taskname":	"portal/test-database-user!checkTaskRepeat.action",	//检查任务名称重复
    		"database_user_resource":		"portal/test-database-user!resource.action",		//根据压力负载返回资源模板
    		"database_user_accept":			"portal/test-database-user!accept.action",		//接受推荐资源模板
    		"database_user_reject":			"portal/test-database-user!reject.action",	//不接受推荐资源模板，我要测试
    		"database_user_submit":			"portal/test-database-user!testSubmit.action",	//评测确定
    		"task_list_database_user":       "portal/test-database-user!listForJson.action",  // 任务列表
    		"database_load_threshold":		"portal/test-database-user!getThreshold.action",//负载最大、小值
    		
            "task_progress":            "portal/controller!progress.action",         // Y
            "task_host_result":         "portal/test-vm!detailForJson.action",      // Y
            "task_block_result":        "portal/test-storage!detailForJson.action",     // Y
            "task_network_result":      "portal/test-network!detailForJson.action",   // Y   		
            "user_signup":              "portal/register!save.action",           // Y
            "username_check":           "portal/register!checkEmail.action",        // Y
            "user_login":               "j_spring_security_checks_portal",            // Y
            "user_logout":              "j_spring_security_logout",           // Y
            "get_captcha":              "portal/user!createCaptcha.action",           // Y
            "captcha_check":            "portal/user!verifyCaptcha.action",         // Y
            "forget_password":          "portal/recover-password!save.action",        // Y
            "forget_password_confirm":  "portal/recover-password!verifyPassword.action",   // Y
            "account_info":             "portal/user!info.action",          // Y
            "change_account_info":      "portal/user!modify.action",   // Y
            "add_key":                  "portal/vm-key!save.action",               // Y
            "remove_key":               "portal/vm-key!del.action",            // Y
            "verify_email":             "portal/register!verify.action",          // Y
            "verify_email_confirm":     "portal/register!register.action",   // Y
        //"test_host_info":           "interface/host_test_info.html",        // Y
        //"add_host_info":            "interface/add_host_info.html",         // Y
        //
        //"excute_host_test":         "interface/excute_host_test.html",      // Y
        //
        //"excute_block_test":        "interface/excute_block_test.html",     // Y
        //
        //"excute_network_test":      "interface/excute_network_test.html",   // Y
        //
        //"task_list_host":           "interface/task_list_host.html",        // Y
        //"task_list_block":          "interface/task_list_block.html",       // Y
        //"task_list_network":        "interface/task_list_network.html",     // Y
        //"task_progress":            "interface/task_progress.html",         // Y
        //
        //"task_host_result":         "interface/task_host_result.html",      // Y
        //"task_block_result":        "interface/task_block_result.html",     // Y
        //"task_network_result":      "interface/task_network_result.html",   // Y
        //
        //"user_signup":              "interface/user_signup.html",           // Y
        //"username_check":           "interface/username_check.html",        // Y
        //"user_login":               "interface/user_login.html",            // Y
        //"user_logout":              "interface/user_logout.html",           // Y
        //"get_captcha":              "interface/get_captcha.html",           // Y
        //"captcha_check":            "interface/captcha_check.html",         // Y
        //"forget_password":          "interface/foget_password.html",
        //"forget_password_confirm":  "interface/forget_password_confrim.html",
        //
        //"account_info":             "interface/account_info.html",          // Y
        //"change_account_info":      "interface/change_account_info.html",   // Y
        //"add_key":                  "interface/add_key.html",               // Y
        //"remove_key":               "interface/remove_key.html",            // Y
        //"verify_email":             "interface/verify_email.html",          // Y
        //"verify_email_confirm":     "interface/varify_email_confirm.html"   // Y
    };

    this.ajaxGet = function(url, callback) {
        var verifyEmailPage = this.verifyEmailPage;
        $.get(url, function(ajaxData, status) {
            try {
                if(status != "success") {
                    showMessageDialog("Error when fetch data from server! Please reload page to try again!", null, "warning_icon");
                    return false;
                }
                if(typeof ajaxData == "string") {
                    ajaxData = JSON.parse(ajaxData); //eval("("+ajaxData+")"); //
                }
                if(ajaxData.status !== "SUCCESS") {
                    if(ajaxData.status === "NEEDAUTH") {
                        if(!isMessageDialogShow() && !isLoginDialogShow()) {
                            showMessageDialog("您需要登录才能进行进一步操作！", function () {
                                showLoginDialog();
                            }, "warning_icon");
                        }
                        return false;
                    } else if(ajaxData.status === "NEEDVERIFY") {
                        if(!isMessageDialogShow()) {
                            if (window.location.href.search(verifyEmailPage) == -1) {
                                showMessageDialog("您需要验证邮箱才能进行进一步操作！", function () {
                                    window.location.href = verifyEmailPage;
                                }, "warning_icon");
                            }
                        }
                        return false;
                    } else {
                        showMessageDialog(ajaxData.message, null, "warning_icon");
                        if(ajaxData.next_page) {
                            window.location.href = ajaxData.next_page;
                        }
                        return false;
                    }
                }
                if(callback) {
                    callback.call(null, ajaxData.result);
                }
                return true;
            } catch(err) {
                processError(err);
                return false;
            }
        });
    };

    this.ajaxPost = function(url, postData, callback) {
        var verifyEmailPage = this.verifyEmailPage;
        $.post(url, postData, function(ajaxData, status) {
            try {
                if(status != "success") {
                    showMessageDialog("Error when post data to server! Please try again later!", null, "warning_icon");
                    return;
                }
                if(typeof ajaxData == "string") {
                    ajaxData = JSON.parse(ajaxData); //eval("("+ajaxData+")"); //
                }
                if(ajaxData.status !== "SUCCESS") {
                    if(ajaxData.status === "NEEDAUTH") {
                        if(!isMessageDialogShow() && !isLoginDialogShow()) {
                            showMessageDialog("您需要登录才能进行进一步操作！", function () {
                                showLoginDialog();
                            }, "warning_icon");
                        }
                        return false;
                    } else if(ajaxData.status === "NEEDVERIFY") {
                        if(!isMessageDialogShow()) {
                            if (window.location.href.search(verifyEmailPage) == -1) {
                                showMessageDialog("您需要验证邮箱才能进行进一步操作！", function () {
                                    window.location.href = verifyEmailPage;
                                }, "warning_icon");
                            }
                        }
                        return false;
                    } else {
                        showMessageDialog(ajaxData.message, null, "warning_icon");
                        if(ajaxData.next_page) {
                            window.location.href = ajaxData.next_page;
                        }
                        return false;
                    }
                }
                if(callback) {
                    callback.call(null, ajaxData.result);
                }
                return true;
            } catch(err) {
                processError(err);
                return false;
            }
        });
    };
}

function loadScript(url, callback) {  
  var script = document.createElement('script');  
  script.type = 'text/javascript';
  if (callback)  
    script.onload = script.onreadystatechange = function() {  
      if (script.readyState && script.readyState != 'loaded' && script.readyState != 'complete')  
        return;  
      script.onreadystatechange = script.onload = null;  
      callback();  
    };  
  script.src = url;  
  document.getElementsByTagName('head')[0].appendChild (script);  
}

function processError(err) {
    var message = "Error: " + err.message;
    if(err.fileName) {
        message += "\n Filename: " + err.fileName;
    }
    if(err.lineNumber) {
        message += "\n Line number: " + err.lingNumber;
    }
    if(err.stack) {
        message += "\n Stack: " + err.stack;
    }
    alert(message);
}

function getUrlParameter(paramKey) {
    var pageURL = window.location.search.substring(1);
    var urlVariables = pageURL.split('&');
    var params = {};
    for (var i = 0; i < urlVariables.length; i++) 
    {
        var paramVal = urlVariables[i].split('=');
        if(paramKey) {
            if (paramVal[0] == paramKey) 
            {
                return paramVal[1];
            }
        } else {
            if(typeof params[paramVal[0]] == "Array") {
                params[paramVal[0]].push(paramVal[1]);
            } else if(typeof params[paramVal[0]] == "String") {
                var v = params[paramVal[0]];
                params[paramVal[0]] = new Array();
                params[paramVal[0]].push(paramVal[1]);
            } else {
                params[paramVal[0]] = paramVal[1];
            }
        }
    }
    if(paramKey) {
        return null;
    } else {
        return params;
    }
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

function eraseCookie(cname) {
    setCookie(cname,"",-1);
}

var loginLaunchedByInterface = true;
var DlgFlag = false;

$(document).ready(function(){
    setUserView();
    setActiveBanner();
    $(document).on('click', "#login-cancel,#logion-close,#forget-password-cancel,#forget-password-close", function(){
        showLoginDialog(false);
        showForgetPasswordDialog(false);
        alert("test")
        if(loginLaunchedByInterface) {
            window.location.href = "index.html";
        }
        loginLaunchedByInterface = true;
        return false;
    });
    //回车键实现表单提交代码(登录)或者关闭错误提示弹窗
    $(document).keyup(function(event){
		  e = event ? event : (window.event ? window.event : null);
		  if(e.keyCode == 13){
			  if(DlgFlag) {
				$("#message-dialog").modal('hide');
				DlgFlag = false;
			  } else {
				 $("#login-submit").trigger("click");
			  }	
		  }
  	});
    $(document).on('click', "#login-submit", function(){
        loginSubmit();
        return false;
    });
    $(document).on('click', "#login", function(){
        loginLaunchedByInterface = false;
        showLoginDialog(true);
        return false;
    });
    $(document).on('click', "#logout", function(){
        logoutSubmit();
        return false;
    });
    $(document).on('click', "#signup-cancel", function(){
        showSignupDialog(false);
        return false;
    });
    $(document).on('click', "#signup-submit", function(){
        signupSubmit();
        return false;
    });
    $(document).on('click', "#signup", function(){
        showSignupDialog(true);
        return false;
    });
    $(document).on('click', '#forget-password', function(){
        showLoginDialog(false);
        showForgetPasswordDialog(true);
        return false;
    });
    $(document).on('click', "#forget-password-submit", function(){
        forgetPasswordSubmit();
        if(loginLaunchedByInterface) {
            window.location.href = "index.html";
        }
        loginLaunchedByInterface = true;
        return false;
    });
    $(document).on('click', "[id$=reload-captcha]", function(){
        setCaptcha();
        return false;
    });
    loadScript('js/lib/eventproxy.js');
    $(".modal").on('show', function() { $(this).find("[autofocus]:first").focus(); }); 
});

function setUserView() {
    var username = getCookie("username");
    if(username != "") {
        $(".box_top_right").html("<span><a href=\"account.html\">欢迎回来，"+username+"</a></span> \
            <span class=\"box_top_right_land_bg\"></span> \
            <span><a id=\"logout\" href=\"#\">退出</a></span>");
    } else {
        $(".box_top_right").html("<span><a id=\"login\" href=\"#\">登录</a></span> \
            <span class=\"box_top_right_land_bg\"></span> \
            <span><a id=\"signup\" href=\"#\">注册</a></span>");
    }
}

function setActiveBanner() {
    $(".banner li").removeClass("banner_active");
    $(".banner li a").each(function(){
        if(window.location.href.search($(this).attr("href")) != -1) {
            $(this).parent().addClass("banner_active");
        } else if( 
            window.location.href.search("-result.html") != -1
            && ($(this).attr("href")).search("my-tasks.html") != -1
            ) {
            $(this).parent().addClass("banner_active");
        } else if(
            window.location.href.search("-test.html") != -1
            && ($(this).attr("href")).search("index.html") != -1
            ) {
            $(this).parent().addClass("banner_active");
        } else if(
            window.location.href.search("account.html") != -1
            && ($(this).attr("href")).search("my-tasks.html") != -1
            ) {
            $(this).parent().addClass("banner_active");
        }
    });
}

/**
 * Prompt a message dialog.
 * @param {string} text - Message text tobe showed in dialog.
 * @param {string} callback - Callback function that will be excuted when dialog closed, could be set to null if no need.
 * @param {string} icon_class - CSS class for icon element, could be one of "information_icon", "warning_icon", "question_icon".
 */
function showMessageDialog(text, callback, icon_class) {
	DlgFlag = true;
    _setMessageDialog();
    $("#message-dialog-text").html(text);
    if(icon_class) {
        $("#message-icon").removeClass().addClass(icon_class);
    }
    $("#message-dialog").modal({backdrop: "static"}).css("z-index", "10000").on('hidden.bs.modal', function() {
        if(callback) {
            callback.call(null);
        }
    });

    function _setMessageDialog() {
        if( $("#message-dialog").length == 0 ) {
            var message_html = '<div class="modal fade" id="message-dialog"  tabindex="-1" role="dialog" style="display: none;"> \
                <div class="modal-dialog"> \
                    <div class="modal_head"> \
                      <button type="button" class="modal_close" data-dismiss="modal"></button> \
                      <h4 class="modal-title" id="myModalLabel">提示</h4> \
                    </div> \
                    <div class="modal_body"> \
                      <div class="modal_name"> \
                        <div id="message-icon" class="information_icon"> </div> \
                        <div id="message-dialog-text" class="message_text"></div> \
                      </div> \
                    </div> \
                    <div class="modal-footer"> \
                      <button type="button" class="modal_btn_r" data-dismiss="modal" style="margin-left: 153px;">确定</button> \
                    </div> \
                  </div> \
                </div>';
            $(".bottom_box").after(message_html);
        }
        
    }
}

function isMessageDialogShow() {
    return $("#message-dialog").is(":visible");
}

function showLoginDialog(show) {
    _setLoginDialog();
    if(show || show === undefined) {
        setCaptcha();
        $("#login-dialog").modal({backdrop: "static"});
    } else {
        $("#login-dialog").modal('hide');
    }
    function _setLoginDialog() {
        if( $("#login-dialog").length == 0 ) {
            var message_html = '<div class="modal fade" id="login-dialog"  tabindex="-1" role="dialog" style="display: none;"> \
                  <div class="modal-dialog"> \
                    <div class="modal_head"> \
                      <button id="logion-close" type="button" class="modal_close" data-dismiss="modal"></button> \
                      <h4 class="modal-title" id="myModalLabel">用户登录</h4> \
                    </div> \
                    <div class="modal_body"> \
                      <div class="modal_name"> \
                        <div class="modal_nameword">用户名</div> \
                        <input id="input-login-username" class="modal_width390 input_grey form-control" type="text" name="key-name" placeholder="请输入注册邮箱" required autofocus /> \
                        <div id="message-login-username" class="modal_nametip_grey"></div> \
                      </div> \
                      <div class="modal_name"> \
                        <div class="modal_nameword">密 &nbsp;&nbsp; 码</div> \
                        <input id="input-login-password" class="modal_width390 input_grey form-control" type="password" name="key-name" placeholder="" required autofocus /> \
                        <div id="message-login-password" class="modal_nametip_grey"></div> \
                      </div> \
                      <div class="modal_name" style="display: none;"> \
                        <div class="modal_nameword">验证码</div> \
                        <input id="input-login-captcha" class="modal_width228 input_grey form-control" type="text" name="key-name" placeholder="efgh" required autofocus /> \
                        <div class="modal_icon"><img id="login-captcha" src="images/icon.jpg" width="154" height="41" alt=""></div> \
                        <div id="message-login-captcha" class="modal_nametip_grey"></div> \
                        <div class="modal_nametip_black"><a id="login-reload-captcha" href="#">看不清</a></div> \
                      </div> \
					  <div class="modal_name"> \
						<div class="modal_remember"> \
							<input type="checkbox" name="remember-password" id="remember-password" checked="checked"> \
							<span>记住用户</span> \
						</div> \
						<div class="modal_nametip_blue"><a id="forget-password" href="#">忘记密码？</a></div> \ \
					  </div> \
                    </div> \
                    <div class="modal-footer"> \
                      <button id="login-cancel" type="button" class="modal_btn_l">取消</button> \
                      <button id="login-submit" type="button" class="modal_btn_r">登录</button> \
                    </div> \
                  </div> \
                </div>';
            $(".bottom_box").after(message_html);
            
            var name = 	getCookie("name");
			var password = getCookie("password");
			if(name && name != "" && password && password != "") {
				$("#input-login-username").val(name);
				$("#input-login-password").val(password);
			} else {
				$("#input-login-username").focus();
			}
        }
    }

}

function isLoginDialogShow() {
    return $("#login-dialog").is(":visible");
}

function loginSubmit() {
    var username = $("#input-login-username").val();
    var password = $("#input-login-password").val();
    var captcha  = $("#input-login-captcha").val();

    var regEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var errorMessage = "";
    var error = false;
    if(username == "") {
        errorMessage = "请输入用户名";
        error = true;
    } else if(!regEmail.test(username)) {
        errorMessage = "用户名必须为电子邮件格式";
        error = true;
    }
    if(errorMessage != "") {
        $("#input-login-username").removeClass("input_gray").removeClass("input_green").addClass("input_red");
        $("#message-login-username").removeClass("modal_nametip_grey").addClass("modal_nametip_red").html(errorMessage);
    } else {
        $("#input-login-username").removeClass("input_gray").removeClass("input_red").addClass("input_green");
        $("#message-login-username").removeClass("modal_nametip_grey").addClass("modal_nametip_grey").html("");
    }

    errorMessage = "";
    if(password == "") {
        errorMessage = "请输入密码";
        error = true;
    }
    if(errorMessage != "") {
        $("#input-login-password").removeClass("input_gray").removeClass("input_green").addClass("input_red");
        $("#message-login-password").removeClass("modal_nametip_grey").addClass("modal_nametip_red").html(errorMessage);
    } else {
        $("#input-login-password").removeClass("input_gray").removeClass("input_red").addClass("input_green");
        $("#message-login-password").removeClass("modal_nametip_red").addClass("modal_nametip_grey").html("");
    }

    errorMessage = "";
//    if(captcha == "") {
//        errorMessage = "请输入验证码";
//        error = true;
//    }
//    if(errorMessage != "") {
//        $("#input-login-captcha").removeClass("input_gray").removeClass("input_green").addClass("input_red");
//        $("#message-login-captcha").removeClass("modal_nametip_grey").addClass("modal_nametip_red").html(errorMessage);
//    }

    if(error) {
        return;
    }

    errorMessage = "";
    var ajax_interface = new AjaxInterface();
//    ajax_interface.ajaxGet(ajax_interface.urls.captcha_check+"?captcha="+captcha, function(data) {
//        var errorMessage = "";
//        if(!data.verified) {
//            errorMessage = "验证码输入错误";
//        }
//        if(errorMessage != "") {
//            $("#input-login-captcha").removeClass("input_gray").removeClass("input_green").addClass("input_red");
//            $("#message-login-captcha").removeClass("modal_nametip_grey").addClass("modal_nametip_red").html(errorMessage);
//            return;
//        } else {
//            $("#input-login-captcha").removeClass("input_gray").removeClass("input_red").addClass("input_green");
//            $("#message-login-captcha").removeClass("modal_nametip_red").addClass("modal_nametip_grey").html("");
            if( !$("#input-login-username").hasClass("input_red") && !$("#input-login-password").hasClass("input_red") ) {
                var username = $("#input-login-username").val();
                var password = $("#input-login-password").val();
                var captcha  = $("#input-login-captcha").val();
                var ai = new AjaxInterface();
                ai.ajaxPost(ai.urls.user_login, {"username": username, "password": password, "captcha": captcha}, function(loginData){
                    if(loginData.status != "OK") {
                        showMessageDialog("用户名和密码不匹配！", null, "warning_icon");
                    } else {
                        if(loginData.nickname && loginData.nickname != "") {
                            setCookie("username", loginData.nickname, 30);
                        } else {
                            setCookie("username", $("#input-login-username").val(), 30);
                        }
                        
                        setCookie("usertype", loginData.usertype, 30);

                		if($("#remember-password").is(":checked")){
                			setCookie("name", $("#input-login-username").val(), 30);
                			setCookie("password", $("#input-login-password").val(), 30);
                		} else {
                			setCookie("name", "", -1);
                			setCookie("password", "", -1);
                		}
                		
                        if(loginData.usertype==0){
                        	window.location.href="index.html";
                        }else{
                        	window.location.href="user-test-home.html";
                        }
                        
                    }
                });
            }
//        }
//    });

}

function logoutSubmit() {
    var ai = new AjaxInterface();
    ai.ajaxGet(ai.urls.user_logout, function(loginData){
        if(loginData.status != "OK") {
            showMessageDialog("退出失败！", null, "warning_icon");
        } else {
            eraseCookie("username");
            window.location.href="index.html";
        }
    });
}

function showSignupDialog(show) {
    _setSignupDialog();
    if(show || show === undefined) {
        setCaptcha();
        $("#signup-dialog").modal({backdrop: "static"});
    } else {
        $("#signup-dialog").modal('hide');
    }

    function _setSignupDialog() {
        if( $("#signup-dialog").length == 0 ) {
            var message_html = '<div class="modal fade" id="signup-dialog"  tabindex="-1" role="dialog" style="display: none;"> \
                  <div class="modal-dialog"> \
                    <div class="modal_head"> \
                      <button type="button" class="modal_close" data-dismiss="modal"></button> \
                      <h4 class="modal-title" id="myModalLabel">用户注册</h4> \
                    </div> \
                    <div class="modal_body"> \
                      <div class="modal_name"> \
                        <div class="modal_nameword">用户类型</div> \
                        <label  class="radio_label login selected" for="radio_admin"> \
                          <i class="icon_radio"></i> \
                          <input id="radio_admin" name="login-type" class="frm_radio" value="0" type="radio" checked="checked"/><span>管理员</span> \
                        </label> \
                        <label  class="radio_label login" for="radio_user"> \
                          <i class="icon_radio"></i> \
                          <input id="radio_user" name="login-type" class="frm_radio" value="1" type="radio" /><span>普通用户</span> \
                        </label> \
                      </div> \
                      <div class="modal_name"> \
                        <div class="modal_nameword">用户名称</div> \
                        <input id="input-signup-username" class="modal_width390 input_grey form-control" type="text" name="key-name" placeholder="请输入您的邮箱作为用户名" required autofocus /> \
                        <div id="message-signup-username" class="modal_nametip_grey"></div> \
                      </div> \
                      <div class="modal_name"> \
                        <div class="modal_nameword">帐户密码</div> \
                        <input id="input-signup-password" class="modal_width390 input_grey form-control" type="password" name="key-name" placeholder="请输入4-12位字母或数字" required autofocus /> \
                        <div id="message-signup-password" class="modal_nametip_grey"></div> \
                      </div> \
                      <div class="modal_name"> \
                        <div class="modal_nameword">重复密码</div> \
                        <input id="input-signup-password2" class="modal_width390 input_grey form-control" type="password" name="key-name" placeholder="请再次输入密码" required autofocus /> \
                        <div id="message-signup-password2" class="modal_nametip_grey"></div> \
                      </div> \
                      <div class="modal_name" style="display: none;"> \
                        <div class="modal_nameword">验证码</div> \
                        <input id="input-signup-captcha" class="modal_width228 input_grey form-control" type="text" name="key-name" placeholder="abcd" required autofocus /> \
                        <div class="modal_icon"><img id="signup-captcha" src="images/icon.jpg" width="154" height="41" alt=""></div> \
                        <div id="message-signup-captcha" class="modal_nametip_grey"></div> \
                        <div class="modal_nametip_black"><a id="sugnup-reload-captcha" href="#">看不清</a></div> \
                      </div> \
                    </div> \
                    <div class="modal-footer"> \
                      <button id="signup-cancel" type="button" class="modal_btn_l">取消</button> \
                      <button id="signup-submit" type="button" class="modal_btn_r">注册</button> \
                    </div> \
                  </div> \
                </div>';
            $(".bottom_box").after(message_html);
            $(".frm_radio[type=radio]").click(function(){      
        	    if($(this).parent().hasClass("selected")){
        	
        	    }else{
        	       $(this).parent().addClass("selected");
        	       $(this).attr("checked", true);
        	       $(this).parent().siblings().removeClass("selected");
        	       $(this).parent().siblings().children(".frm_radio[type=radio]").attr("checked", false);
        	    }
        	    //alert($("input[type='radio']:checked").val());
        	});
            
        }
    }
}

function signupSubmit() {
	var usertype=$("input[type='radio']:checked").val();
	//alert(usertype);
    var username = $("#input-signup-username").val();
    var password = $("#input-signup-password").val();
    var password2 = $("#input-signup-password2").val();
    var captcha  = $("#input-signup-captcha").val();

    var regEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var errorMessage = "";
    var error = false;
    if(username == "") {
        errorMessage = "请输入用户名";
        error = true;
    } else if(!regEmail.test(username)) {
        errorMessage = "用户名必须为电子邮件格式";
        error = true;
    }
    if(errorMessage != "") {
        $("#input-signup-username").removeClass("input_gray").removeClass("input_green").addClass("input_red");
        $("#message-signup-username").removeClass("modal_nametip_grey").addClass("modal_nametip_red").html(errorMessage);
    } else {
        $("#input-signup-username").removeClass("input_gray").removeClass("input_red").addClass("input_green");
        $("#message-signup-username").removeClass("modal_nametip_grey").addClass("modal_nametip_grey").html("");
    }

    errorMessage = "";
    if(password == "") {
        errorMessage = "请输入密码";
        error = true;
    }
    if(errorMessage != "") {
        $("#input-signup-password").removeClass("input_gray").removeClass("input_green").addClass("input_red");
        $("#message-signup-password").removeClass("modal_nametip_grey").addClass("modal_nametip_red").html(errorMessage);
    } else {
        $("#input-signup-password").removeClass("input_gray").removeClass("input_red").addClass("input_green");
        $("#message-signup-password").removeClass("modal_nametip_red").addClass("modal_nametip_grey").html("");
    }

    errorMessage = "";
    if(password2 != password) {
        errorMessage = "两次密码输入不一致";
        error = true;
    }
    if(errorMessage != "") {
        $("#input-signup-password2").removeClass("input_gray").removeClass("input_green").addClass("input_red");
        $("#message-signup-password2").removeClass("modal_nametip_grey").addClass("modal_nametip_red").html(errorMessage);
    } else {
        $("#input-signup-password2").removeClass("input_gray").removeClass("input_red").addClass("input_green");
        $("#message-signup-password2").removeClass("modal_nametip_red").addClass("modal_nametip_grey").html("");
    }

    errorMessage = "";
//    if(captcha == "") {
//        errorMessage = "请输入验证码";
//        error = true;
//    }
//    if(errorMessage != "") {
//        $("#input-signup-captcha").removeClass("input_gray").removeClass("input_green").addClass("input_red");
//        $("#message-signup-captcha").removeClass("modal_nametip_grey").addClass("modal_nametip_red").html(errorMessage);
//    }

    if(error) {
        return;
    }

//    var ep = EventProxy.create("check_captcha", "check_username", _signupSubmit);
    var ep = EventProxy.create("check_username", _signupSubmit);
    
//    var ajax_interface = new AjaxInterface();
//    ajax_interface.ajaxGet(ajax_interface.urls.captcha_check+"?captcha="+captcha, function(ccData) {
//        ep.emit("check_captcha", ccData);
//    });

    var aiuc = new AjaxInterface;
    aiuc.ajaxGet(aiuc.urls.username_check+"?username="+username, function(ucData){
        ep.emit("check_username", ucData);
    });

//    function _signupSubmit(ccData, ucData) {
    function _signupSubmit(ucData) {
        var errorMessage = "";
        var error = false;
//        if(!ccData.verified) {
//            errorMessage = "验证码输入错误";
//            error = true;
//        }
//        if(errorMessage != "") {
//            $("#input-signup-captcha").removeClass("input_gray").removeClass("input_green").addClass("input_red");
//            $("#message-signup-captcha").removeClass("modal_nametip_grey").addClass("modal_nametip_red").html(errorMessage);
//        } else {
//            $("#input-signup-captcha").removeClass("input_gray").removeClass("input_red").addClass("input_green");
//            $("#message-signup-captcha").removeClass("modal_nametip_red").addClass("modal_nametip_grey").html("");
//        }

        errorMessage = "";
        if(ucData.exist) {
            errorMessage = "该用户名已经存在，请更换";
            error = true;
        }
        if(errorMessage != "") {
            $("#input-signup-username").removeClass("input_gray").removeClass("input_green").addClass("input_red");
            $("#message-signup-username").removeClass("modal_nametip_grey").addClass("modal_nametip_red").html(errorMessage);
        } else {
            $("#input-signup-username").removeClass("input_gray").removeClass("input_red").addClass("input_green");
            $("#message-signup-username").removeClass("modal_nametip_red").addClass("modal_nametip_grey").html("");
        }

        if(error) {
            return;
        } else if( !$("#input-signup-username").hasClass("input_red") && 
                    !$("#input-signup-password").hasClass("input_red") &&
                    !$("#input-signup-password2").hasClass("input_red") &&
                    !$("#input-signup-captcha").hasClass("input_red")) {

            var username = $("#input-signup-username").val();
            var password = $("#input-signup-password").val();
            var captcha  = $("#input-signup-captcha").val();
            var usertype=$("input[type='radio']:checked").val();
           // alert(usertype);
            var ai = new AjaxInterface();
            ai.ajaxPost(ai.urls.user_signup, {"username": username, "password": password,"usertype":usertype, "captcha": captcha}, function(signupData){
                showMessageDialog("注册成功，欢迎加入！", function(){
                    window.location.href="account.html";
                }, "success_icon");
            });
        }
    };

    /*
    errorMessage = "";
    var ajax_interface = new AjaxInterface();
    ajax_interface.ajaxGet(ajax_interface.urls.captcha_check+"?captcha="+captcha, function(data) {
        var errorMessage = ""
        if(!data.verified) {
            errorMessage = "验证码输入错误";
        }
        if(errorMessage != "") {
            $("#input-signup-captcha").removeClass("input_gray").removeClass("input_green").addClass("input_red");
            $("#message-signup-captcha").removeClass("modal_nametip_grey").addClass("modal_nametip_red").html(errorMessage);
            return;
        } else {
            $("#input-signup-captcha").removeClass("input_gray").removeClass("input_red").addClass("input_green");
            $("#message-signup-captcha").removeClass("modal_nametip_red").addClass("modal_nametip_grey").html("");
            var aiuc = new AjaxInterface;
            aiuc.ajaxGet(aiuc.urls.username_check+"?username="+username, function(ucData){
                var errorMessage = ""
                if(ucData.exist) {
                    errorMessage = "该用户名已经存在，请更换";
                }
                if(errorMessage != "") {
                    $("#input-signup-username").removeClass("input_gray").removeClass("input_green").addClass("input_red");
                    $("#message-signup-username").removeClass("modal_nametip_grey").addClass("modal_nametip_red").html(errorMessage);
                    return;
                } else {
                    $("#input-signup-username").removeClass("input_gray").removeClass("input_red").addClass("input_green");
                    $("#message-signup-username").removeClass("modal_nametip_red").addClass("modal_nametip_grey").html("");

                    if( !$("#input-signup-username").hasClass("input_red") && 
                        !$("#input-signup-password").hasClass("input_red") &&
                        !$("#input-signup-password2").hasClass("input_red") &&
                        !$("#input-signup-captcha").hasClass("input_red")) {

                        var username = $("#input-signup-username").val();
                        var password = $("#input-signup-password").val();
                        var captcha  = $("#input-signup-captcha").val();
                        var ai = new AjaxInterface();
                        ai.ajaxPost(ai.urls.user_signup, {"username": username, "password": password, "captcha": captcha}, function(signupData){
                            showMessageDialog("欢迎您加入我们，您的邮箱将收到一封确认邮箱地址的邮件，在确认邮箱之后，您才能使用我们的服务。", function(){
                                window.location.href="account.html";
                            });
                        });
                    }
                }
            });
        }
    });
    */

}

function showForgetPasswordDialog(show) {
    _setForgetPasswordDialog();
    if(show || show === undefined) {
        setCaptcha();
        $("#forget-password-dialog").modal({backdrop: "static"});
    } else {
        $("#forget-password-dialog").modal('hide');
    }

    function _setForgetPasswordDialog() {
        if( $("#forget-password-dialog").length == 0 ) {
            var message_html = '<div class="modal fade" id="forget-password-dialog"  tabindex="-1" role="dialog" style="display: none;"> \
                  <div class="modal-dialog"> \
                    <div class="modal_head"> \
                      <button id="forget-password-close" type="button" class="modal_close" data-dismiss="modal"></button> \
                      <h4 class="modal-title" id="myModalLabel">忘记密码</h4> \
                    </div> \
                    <div class="modal_body"> \
                      <div class="modal_name"> \
                        <div class="modal_nameword">用户名</div> \
                        <input id="input-forget-password-username" class="modal_width390 input_grey form-control" type="text" name="key-name" placeholder="请输入您的邮箱作为用户名" required autofocus /> \
                        <div id="message-forget-password-username" class="modal_nametip_grey"></div> \
                      </div> \
                      <div class="modal_name" style="display: none;"> \
                        <div class="modal_nameword">验证码</div> \
                        <input id="input-forget-password-captcha" class="modal_width228 input_grey form-control" type="text" name="key-name" placeholder="abcd" required autofocus /> \
                        <div class="modal_icon"><img id="forget-password-captcha" src="images/icon.jpg" width="154" height="41" alt=""></div> \
                        <div id="message-forget-password-captcha" class="modal_nametip_grey"></div> \
                        <div class="modal_nametip_black"><a id="forget-password-reload-captcha" href="#">看不清</a></div> \
                      </div> \
                    </div> \
                    <div class="modal-footer"> \
                      <button id="forget-password-cancel" type="button" class="modal_btn_l">取消</button> \
                      <button id="forget-password-submit" type="button" class="modal_btn_r">确定</button> \
                    </div> \
                  </div> \
                </div>';
            $(".bottom_box").after(message_html);
            $("#input-forget-password-username").focus();
        }
    }
}

function forgetPasswordSubmit() {
    var username = $("#input-forget-password-username").val();
    var captcha  = $("#input-forget-password-captcha").val();

    var regEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var errorMessage = "";
    var error = false;
    if(username == "") {
        errorMessage = "请输入用户名";
        error = true;
    } else if(!regEmail.test(username)) {
        errorMessage = "用户名必须为电子邮件格式";
        error = true;
    }
    if(errorMessage != "") {
        $("#input-forget-password-username").removeClass("input_gray").removeClass("input_green").addClass("input_red");
        $("#message-forget-password-username").removeClass("modal_nametip_grey").addClass("modal_nametip_red").html(errorMessage);
    } else {
        $("#input-forget-password-username").removeClass("input_gray").removeClass("input_red").addClass("input_green");
        $("#message-forget-password-username").removeClass("modal_nametip_grey").addClass("modal_nametip_grey").html("");
    }

    errorMessage = "";
//    if(captcha == "") {
//        errorMessage = "请输入验证码";
//        error = true;
//    }
//    if(errorMessage != "") {
//        $("#input-forget-password-captcha").removeClass("input_gray").removeClass("input_green").addClass("input_red");
//        $("#message-forget-password-captcha").removeClass("modal_nametip_grey").addClass("modal_nametip_red").html(errorMessage);
//    }

    if(error) {
        return;
    }

    errorMessage = "";
    var ajax_interface = new AjaxInterface();
//    ajax_interface.ajaxGet(ajax_interface.urls.captcha_check+"?captcha="+captcha, function(data) {
//        var errorMessage = ""
//        if(!data.verified) {
//            errorMessage = "验证码输入错误";
//        }
//        if(errorMessage != "") {
//            $("#input-forget-password-captcha").removeClass("input_gray").removeClass("input_green").addClass("input_red");
//            $("#message-forget-password-captcha").removeClass("modal_nametip_grey").addClass("modal_nametip_red").html(errorMessage);
//            return;
//        } else {
//            $("#input-forget-password-captcha").removeClass("input_gray").removeClass("input_red").addClass("input_green");
//            $("#message-forget-password-captcha").removeClass("modal_nametip_red").addClass("modal_nametip_grey").html("");
            if( !$("#input-forget-password-username").hasClass("input_red") && !$("#input-forget-password-password").hasClass("input_red") ) {
                var username = $("#input-forget-password-username").val();
                var captcha  = $("#input-forget-password-captcha").val();
                var ai = new AjaxInterface();
                ai.ajaxPost(ai.urls.forget_password, {"username": username, "captcha": captcha}, function(fpData){
                    showMessageDialog("重置密码成功！");
                });
            }
//        }
//    });
}

function setCaptcha() {
    var ajax_interface = new AjaxInterface();
    ajax_interface.ajaxGet(ajax_interface.urls.get_captcha, function(data) {
        $("img[id$=captcha]").attr("src", data.captcha);
    });
    return;
}

function verifyCaptcha() {
    var captcha = $("#input-captcha").val();
    var ajax_interface = new AjaxInterface();
    ajax_interface.ajaxGet(ajax_interface.urls.captcha_check, function(data) {
        var verified = data.verified;
        if(verified) {
            $("#input-captcha").addClass("input_green");
        } else {
            $("#input-captcha").addClass("input_red");
        }
    });
    return;
}

function operatediv(iconId, objId){
         
    var obj = document.getElementById(objId);
    var icon = document.getElementById(iconId);

    if (obj.style.display == "none") {
      obj.style.display = "block";
      icon.innerHTML = "收起";
      icon.className = "tip-up";
    } else {
      obj.style.display = "none";
      icon.innerHTML = "展开";
      icon.className = "tip-down";
    }    
}
