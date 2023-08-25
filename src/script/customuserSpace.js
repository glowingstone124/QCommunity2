const userIdElement = document.getElementById('userId');
const userTagsElement = document.getElementById('userTags');
const premiumTagElement = document.getElementById('premiumTag');
const donatorTagElement = document.getElementById('donatorTag');
const userLoginDateElement = document.getElementById('userLoginDate');

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}


var username = getParameterByName('username');
if(username != null){
fetch('http://qoriginal.vip:8080/forum/fetch/myself?name=' + username)
  .then(response => response.json())
  .then(data => {
    userIdElement.textContent = data.username;
    const tags = [];
    if (data.premium) {
        premiumTagElement.src = 'https://s1.ax1x.com/2023/08/11/pPnVxkd.png'; // 设置 Premium 标签图像的路径
      } else {
        premiumTagElement.style.display = 'none';
      }

      if (data.donate) {
        donatorTagElement.src = 'https://s1.ax1x.com/2023/08/11/pPnVjTH.png'; // 设置 Donator 标签图像的路径
      } else {
        donatorTagElement.style.display = 'none';
      }
    userLoginDateElement.textContent = data.date;
  })
  .catch(error => {
    console.error('请求出错：', error);
  });
} else {
    userIdElement.textContent = 'NULL';
    premiumTagElement.style.display = 'none';
    donatorTagElement.style.display = 'none';
}