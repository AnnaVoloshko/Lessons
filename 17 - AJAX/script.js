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

var pagination = document.getElementById('pagination');


function requestData(e, data) {
    request('get', 'https://swapi.co/api/people/?page=' + page, function (data) {
        var paginationArray = drawPagination(pagination, data.body.count, 10, page);
        pagination.innerHTML = paginationArray.join('');
    });
    e.preventDefault();
}