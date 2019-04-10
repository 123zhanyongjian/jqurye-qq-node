
$(document).ready(function() {
    let host='192.168.2.123:3333/'; //地址
    var socket = io.connect(`ws://${host}`);
    let userid; //登录用户的id
    let username; //登录用户的姓名
    let friendname;
    
    let friendid; //选中聊天好友的id
    $(".qq-xuan li").click(function() {
        $(this)
            .addClass("qq-xuan-li")
            .siblings()
            .removeClass("qq-xuan-li");
    });
    $(".qq-hui-txt").hover(function() {
        var aa = $(this).html();
        console.log(aa);
        $(".qq-hui-txt").attr("title", aa);
    });
    $(".login-close").click(function() {
        $(this)
            .parent()
            .parent()
            .css("display", "none");
    });

    $(".qq-exe img").click(function() {
        $(".qq-login")
            .css("display", "block")
            .removeClass("mins");
    });
    $(".login-but").click(function() {
        if (
            $(".login-txt")
                .find("input")
                .val() == ""
        ) {
            alert("请输入账号或者密码");
        } else if ($("login-txt input").val() != "") {
            let data = {
                user: $("#user").val(),
                pass: $("#pass").val()
            };
            $.ajax({
                method: "post",
                url:  `http://${host}login`,
                data: JSON.stringify(data),
                success: res => {
                    if (res.message == "登录成功") {
                        userid = res.data[0].id;
                        username = res.data[0].name;
                        sessionStorage.userinfo = JSON.stringify(res.data);
                        $(".qq-top-name>span").text(res.data[0].name);

                        $(".qq")
                            .css("display", "block")
                            .removeClass("mins");
                        $(".qq-login").css("display", "none");
                        $(".qq-top-shuo input").val(res.data[0].moon);
                        let data = {
                            userid: res.data[0].id
                        };
                        $.ajax({
                            method: "post",

                            url:`http://${host}friendlist`,

                            data: JSON.stringify(data),
                            success: ret => {
                                $(ret.data).each(i => {
                                    let that = this;
                                    $(".qq-hui ul").append(`
                    <li>
                   
                    <div class="qq-hui-img"><img src="${
                        ret.data[i].friendhead
                    }"><i></i></div>
                    <div class="qq-hui-name"><span>${
                        ret.data[i].friendname
                    }</span><i>16:30</i></div>
                    <div class="qq-hui-txt" title="">${ret.data[i].mood}</div>
                    <span class="friendids" style="display:none">${
                        ret.data[i].userid
                    }</span>
                  </li>
                    `);
                                    $(".qq-hui li").dblclick(function() {
                                        friendid = $(this)
                                            .children("span")
                                            .html();
                                        friendname = $(this)
                                            .children(".qq-hui-name")
                                            .children("span")
                                            .html();
                                      
                                        let data = {
                                            userid: friendid,
                                            friendid: userid
                                        };
                                        console.log("323232323");

                                        $.ajax({
                                            method: "post",
                                            url:`http://${host}readchat`,
                                            data: JSON.stringify(data),
                                            success: rem => {
                                                let result = rem.data;
                                                $(".qq-chat-txt ul").html("");
                                                $(result).each(function(j) {
                                                    $(
                                                        ".qq-chat-txt ul"
                                                    ).append(`
                              <li>
                              <div class="qq-chat-you blue"><span>${
                                  result[j].username
                              }</span><i>${result[j].time}</i></div>
                              <div class="qq-chat-ner">${
                                  result[j].content
                              }</div>
                            </li>
                              
                              
                              `);
                                                });
                                            }
                                        });
                                        $(".qq-chat")
                                            .css("display", "block")
                                            .removeClass("mins");
                                        $(".qq-chat-t-name").html(
                                            $(this)
                                                .find("span")
                                                .html()
                                        );
                                        $(".qq-chat-t-head img").attr(
                                            "src",
                                            $(this)
                                                .find("img")
                                                .attr("src")
                                        );
                                      
                                        $("#qq-chat-text").trigger("focus");
                                        $(".my").remove();
                                    });
                                });
                            }
                        });
                    } else {
                        alert(res.message);
                    }
                }
            });
        }
    });

    $(".close").click(function() {
        $(this)
            .parent()
            .parent()
            .parent()
            .css("display", "none");
    });
    $(".min").click(function() {
        $(this)
            .parent()
            .parent()
            .parent()
            .addClass("mins");
    });
    $(".qq .close").click(function() {
        $(".qq-chat").css("display", "none");
    });
    $("#qq-chat-text").keydown(function(e) {
        if (e.keyCode == 27) {
            $(".qq-chat").css("display", "none");
        }
    });
    $(".fasong").click(function() {
        if ($("#qq-chat-text").val() == "") {
            alert("发送内容不能为空,请输入内容");
        } else if ($("#qq-chat-text").val() != "") {
            var name = $(".qq-top-name span").html();

            var ner = $("#qq-chat-text").val();
            var ners = ner.replace(/\n/g, "<br>");
            var now = new Date();
            var t_div =
                now.getFullYear() +
                "-" +
                (now.getMonth() + 1) +
                "-" +
                now.getDate() +
                " " +
                now.getHours() +
                ":" +
                now.getMinutes() +
                ":" +
                now.getSeconds();
            $(".qq-chat-txt ul").append(
                '<li class="my"><div class="qq-chat-my"><span>' +
                    name +
                    "</span><i>" +
                    t_div +
                    '</i></div><div class="qq-chat-ner">' +
                    ners +
                    "</div></li>"
            );
            $(".qq-chat-txt").scrollTop($(".qq-chat-txt")[0].scrollHeight);
            $("#qq-chat-text")
                .val("")
                .trigger("focus");

            socket.emit("message", {
                name: username,
                message: ners,
                Receiveid: friendid,
                outid: userid,
                time: t_div
            });
            console.log(userid, friendid);
            let data = {
                time: t_div,
                content: ners,
                userid: userid,
                friendid: friendid,
                username: username,
                friendname: friendname
            };
            $.ajax({
                method: "post",
                url: `http://${host}addchatlist`,
                data: JSON.stringify(data),
                success: ret => {
                    console.log(ret);
                }
            });
        }
    });
    $(".close-chat").click(function() {
        $(".qq-chat").css("display", "none");
    });
    $(".qq-hui").niceScroll({
        touchbehavior: false,
        cursorcolor: "#ccc",
        cursoropacitymax: 1,
        cursorwidth: 6,
        horizrailenabled: true,
        cursorborderradius: 3,
        autohidemode: true,
        background: "none",
        cursorborder: "none"
    });
    console.log(socket);
    socket.on("message", function(data) {
        console.log(userid, data.Receiveid);
        if (userid == data.Receiveid) {
            $(".qq-chat-txt ul").append(`
<li>
<div class="qq-chat-you blue"><span>${data.name}</span><i>${
  data.time
            }</i></div>
<div class="qq-chat-ner">${data.message}</div>
</li>


`);
            console.log(
                `${data.name}在${data.time}的时间里发了一条信息，内容是${
                    data.message
                }`
            );
            //设置qq音效
            $('.yx').append(`<audio  controls="controls"  autoplay="autoplay">
            <source src="http://old.haolingsheng.com/download/ring/000/106/495845d638a7b589d424413f49b6f908.mp3"/>
            </audio>`).css({'opacity':'0'})
            setTimeout(()=>{
                $('.yx').html('')
            },800)
        }
    });
});
