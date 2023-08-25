const title = document.getElementById('notice-header');
const author = document.getElementById('notice-author');
const text = document.getElementById('notice-text');
fetch('http://qoriginal.vip:8080/api/notice')
.then(response => response.json())
.then(responseData => {
    title.textContent = responseData.title;
    author.textContent = responseData.author + " " + responseData.time;
    text.textContent = responseData.article;
})
.catch(error => {
    // 处理请求错误
    alert('请求出错：' + error);
});