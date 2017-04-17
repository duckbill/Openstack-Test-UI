$(document).ready(function(){
    $("#toggle-change-host-info").click(function(){
        if(host_info_elem) {
            host_info_elem.changeHostInfo();
        }
        return false;
    });

    $("#toggle-add-host-info").click(function(){
        if(host_info_elem) {
            host_info_elem.addHostInfo();
        }
        return false;
    });

    $(".toggle-more-host-info").click(function(){
        if(host_info_elem) {
            host_info_elem.moreHostInfo();
        }
        return false;
    });

    $("#add-host-info-cancel").click(function() {
        if(host_info_elem) {
            host_info_elem.addHostInfoCancel();
        }
        return false;
    });

    $("#add-host-info-submit").click(function() {
        if(host_info_elem) {
            host_info_elem.addHostInfoSubmit();
        }
        return false;
    });

    $("#add-host-key").click(function() {
        if(host_info_elem) {
            host_info_elem.addHostKey();
        }
    });
});

function HostInfoElem() {

    this.keys = null;
    this.newKey = null;

    this.testHostInfo = null;
		
    this.setHostInfo = function(ajax) {
        if(ajax) {
            var ajax_interface = new AjaxInterface();
            var hostInfoElem = this;
            ajax_interface.ajaxGet(
            		ajax_interface.urls.test_host_info, 
            		function(data) {
                hostInfoElem.testHostInfo = data;
                hostInfoElem.keys = hostInfoElem.testHostInfo.keys;
								
								if(hostInfoElem.keys != null) {
									hostInfoElem.renderKeysSelector();
								}
            });
        }
    }
	 
    this.renderKeysSelector = function() {
        var str_html = "";
        var keys = this.keys;
        for (var key in keys) {
            str_html += "<option value=\"" + key + "\">" + keys[key] + "</option>";
        }
				$('#input-java-key').html(str_html);
				$('#input-db-key').html(str_html);
				$('#input-web-key').html(str_html);
        $('#input-host-key').html(str_html);
				$('#input-disk-key').html(str_html);
        if(this.newKey !== null) {
            $('#input-hot-key').val(this.newKey);
        }
    }
		
    this.addHostKey = function() {
        if( $("#add-key-dialog").length == 0 ) {
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
            $("#key-file-submit").click(function(){
                host_info_elem.submitKeyFile();
                return false;	
            });
            var ajax_interface = new AjaxInterface();
            $("#add-key-form").attr("action", ajax_interface.urls.add_key);
        }
        $("#add-key-dialog").modal({backdrop: "static"});
    }

    this.submitKeyFile = function() {
        var key_name = $("#input-key-name").val();
        var key_file = $("#input-key-file").val();
        var error = null;
        if(key_name == "" || key_name.length < 4 || key_name.length > 12) {
            $("#input-key-name").removeClass("input_gray").removeClass("input_green").addClass("input_red");
            $("#message-key-name").removeClass("account_word").addClass("account_word_red").html("请输入4~12个字符的证书名");
            error = true;
        } else {
            $("#input-key-name").removeClass("input_gray").removeClass("input_red").addClass("input_green");
            $("#message-key-name").removeClass("account_word_red").addClass("account_word").html("");
        }

        if(key_file == "") {
            $("#input-key-file").removeClass("input_gray").removeClass("input_green").addClass("input_red");
            $("#message-key-file").removeClass("account_word").addClass("account_word_red").html("请选择文件");
            error = true;
        } else {
            $("#input-key-file").removeClass("input_gray").removeClass("input_red").addClass("input_green");
            $("#message-key-file").removeClass("account_word_red").addClass("account_word").html("200K以内");
        }

        if(error) {
            return false;
        }
        $("#upload-loader").show();
        $("#add-key-form").get(0).submit();
        return true;
    }
}

function uploadKeyReturn(result) {
    $("#upload-loader").hide();

    var new_id = Object.keys(result.result)[0];
    if(!host_info_elem.keys) {
        host_info_elem.keys = {};
    }
    host_info_elem.keys[new_id] = result.result[new_id]["key_name"];
    host_info_elem.newKey = new_id;
    host_info_elem.renderKeysSelector();
    
 
		$("#add-key-dialog").modal('hide');
		$("#input-java-key").val(new_id);
		$("#input-web-key").hide();
		$("#input-db-key").hide();
		$("#input-web-key-text").show();
		$("#input-web-key-text").val(host_info_elem.keys[new_id]);
		$("#input-db-key-text").show();
		$("#input-db-key-text").val(host_info_elem.keys[new_id]);

		$("#input-host-key").val(new_id);
		$("#input-disk-key").val(new_id);
}