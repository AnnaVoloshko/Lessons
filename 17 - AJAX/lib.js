function request(method, url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.addEventListener('load', function (e) {
        callback({
            body: JSON.parse(e.target.response),
            status: e.target.status
        })
    });

    xhr.addEventListener('error', function (e) {
        errorCallback && errorCallback(e);
    });

    xhr.send();
}

function drawPagination( total, limit) {
    var pages = Math.ceil(total / limit);
    return Array(pages).fill(1).map(function (number, index) {
        var currentPage = index + 1;
        return current && currentPage === current ? '<span>' + currentPage +
            '</span>' : '<a href="" onclick="requestData(' + currentPage + ')">' + currentPage + '</a>'
    })
}