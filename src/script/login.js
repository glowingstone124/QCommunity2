
function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username != "" & password != "") {
    var data = '?username=' + encodeURIComponent(username) + '&password=' + encodeURIComponent(password);
    // 发送GET请求
    fetch('http://qoriginal.vip:8080/forum/login' + data, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        // 处理服务器的响应数据
        if (data.code === 0){
            alert('欢迎，' + username + '，您已成功登录！');
            localStorage.setItem('username', username);
            window.location.replace("main.html");
        } else {
            alert('登录失败，请检查用户名和密码。');
        }
    })
    .catch(error => {
        // 处理请求错误
        alert('请求出错：' + error);
    });
} else {
    alert("用户名或密码不能为空！");
}
}
