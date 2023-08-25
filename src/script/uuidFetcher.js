function uuid(username){
    // 替换 {username} 为实际玩家的用户名
const apiEndpoint = `http://qoriginal.vip:8080/qo/download/avatar?name=${username}`;

fetch(apiEndpoint)
    .then(response => response.json())
    .then(data => {
        const playerID = data.id;
        return playerID;
    })
    .catch(error => {
        console.error('Error fetching UUID:', error);
    });
}