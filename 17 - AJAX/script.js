console.log('Ajax');
/*var xhr = new XMLHttpRequest();
xhr.open('get', 'https://swapi.co/api/people/1/', true);
    //get - метод, адрес, true - флаг ассинхронности
xhr.addEventListener('load', function (e){
    console.log(JSON.parse(e.target.response)); //parse - разбор файла в удобном формате
});
xhr.send();
*/
//console.log(xhr);
    // CORS - распространение данных между доменами (не дает возможность создать вредоносный запрос)
//___________________________________________________________________________________________________________
function request(method, url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.addEventListener('load', function (e){
        callback({
            body: JSON.parse(e.target.response),
            status: e.target.status
        })
    });
    
    xhr.addEventListener('error', function (e){
        errorCallback && errorCallback(e);
    });
    
    xhr.send();
}

request('get', 'https://swapi.co/api/people/', function (data){
    console.log(data.body);
})