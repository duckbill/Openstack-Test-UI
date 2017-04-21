/**
 * Created by Jason on 2017/4/19.
 */
$(document).ready(function () {
    $("#neutron-com").click(function () {
        $.getJSON("../static/home/config.json", function (json) {
            web_neutron(json);
        });
        return false;
    })

})
function web_neutron(data1) {

    // var config = new Object();
    // config.ip = $("#input-host-ip").val()
    // config.login_name = $("#input-web-username").val()
    // config.password = $("#input-web-password").val()

    // var data ="static/home/config.json"
    // alert("ccc");
    var data = JSON.stringify(data1)
    $.ajax({
        url: "/rally/index",
        type: "POST",
        data: data,
        timeout: 30000,
        async:false,
        beforeSend: function () {
            swal({
                title: "正在进行测试！",
                type: "warning",
                showConfirmButton: false
            });


        },
        success: function (msg) {
            if (msg == 1) {
                swal({
                    title: "测试完成！",
                    type: "success"
                })

            }
            else {
                swal({
                    title: "测试失败！",
                    type: "error"
                })
            }


        },
        error:function () {
            swal({
                    title: "测试失败！",
                    type: "error"
                })
        }
    })

    return true;
//     swal({
//         title: "请先通过验证再进行测试！",
//         html: true,
//         text: "<html><body><div style='margin:0 auto ;height: 100px;width: 300px;overflow:auto;'>message</div></body></html>",
//         type: "success"
//     })
//
//     return false;
}