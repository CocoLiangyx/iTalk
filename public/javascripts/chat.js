$(document).ready(function () {
    var socket = io.connect();
})

var socket = io.connect();
var from = $.cookie('user')//从cookie中读取用户名字
var to = all;
socket.emit('online', {user: from});
socket.on('online', function (data) {
    if (data.user != from) {
        var sys = '<div style="color:#f00">系统(' + now() + '):' + '用户 ' + data.user + '上线了！</div> ';
    } else {
        var sys = '<div style="color:#f00">系统(' + now() + '):你进入了聊天室！</div> ';
    }
    $("#contents").append(sys + "<br/>");
    flushUsers(data.users);//刷新用户在线列表
    showSayTo();//显示正在对谁说话
});

//刷新用户在线列表
function flushUsers(users) {
    $("#list").empty().append('<li title="双击聊天"> alt="all" class="sayingto" onselectstart="return false">所有人</li>');
    for (var i in users) {
        $("#list").append('<li alt="' + users[i] + '" title="双击聊天" onselectstart="return false"></li>');
    }
    $("#list>li").dblclick(function () {
        if ($(this).attr('alt') != from) {
            to = $(this).attr('alt');
            $("#list>li").removeClass('sayingto');
            $(this).addClass('sayingto');
            showSayTo();
        }
    });
}

//显示正在对谁说话
function showSayTo() {
    $("#from").html(from);
    $("#to").html(to == "all" ? "所有人" : to);
}

//显示当前时间
function now() {
    var date = new Date();
    var time = data.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + (date.getMinutes() < 10 ? ('0' + date.getMinutes()) : date.getMinutes());

}



























