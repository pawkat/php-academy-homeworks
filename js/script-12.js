var d = document;
var search = document.querySelector('.search');
search.addEventListener('keyup', function () {
    //Clear UL
    // var oldUl = document.querySelectorAll('.ulList');
    // if (document.querySelector('.search').value !== '' && oldUl !== null) {
    //     // document.body.removeChild(oldUl);
    //     for(var k = 0; k < oldUl.length; k++)
    //     {
    //         document.body.removeChild(oldUl[k]);
    //     }
    // }
    // END of clear
    var wts = d.querySelector('.search').value;
    var params = {
        action: 'opensearch',
        origin: '*',
        format: 'json',
        search: ''
    };
    var http = new XMLHttpRequest();
    http.open('POST', 'https://en.wikipedia.org/w/api.php');
    http.addEventListener('readystatechange', handleResponse);
    console.log(wts);
    params['search'] = document.querySelector('.search').value;
    console.log(params);
    var body = Object.keys(params)
        .map(function (prop) {
            return prop + '=' + params[prop]
        })
        .join('&');
    console.log('body: ', body);
    if (wts !== '')
        http.send(body);
});



function handleResponse() {
    if(this.readyState == 4) {
        if(this.status == 200) {

            // console.log("_________________________________________________________________________");
            var result = JSON.parse(this.responseText);
            // console.log('response : ' + result);
            // console.log(result[1]);
            // console.log(result[2]);  не нужен(первые строки со страниц)
            // console.log(result[3]);



            var ul = document.querySelector('.ulList');
            while (ul.firstChild) {
                ul.removeChild(ul.lastChild);
            }

            for ( var i = 0; i < result[1].length; i++) {
                var li = document.createElement('li');
                var a = document.createElement('a');
                a.className = 'autocomplete';
                a.href = result[3][i];
                a.innerHTML = result[1][i];
                a.target = '_blank';
                document.getElementsByTagName('ul')[0].appendChild(li);
                document.getElementsByTagName('li')[i].appendChild(a);
            }

        } else {
            console.log("ERROR");
        }
    }
}









