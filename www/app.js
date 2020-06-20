setInterval(function(){
    date = new Date();
    h = date.getHours();
    m = date.getMinutes();
    if (m<10){
        m = '0'+ m;
    }
    if (h<10){
        h = '0'+ h;
    }
    currentTime = h+':'+m;
    document.getElementById("digital-clock").innerHTML = currentTime;
}, 1000);

window.fn = {};

window.fn.openMenu = function(){
    var menu = document.getElementById('menu');
    menu.open();
};

window.fn.load = function(page, mytitle) {
    var navigator = document.getElementById('myNavigator');
    var menu = document.getElementById('menu');
    data = {data:{title: mytitle}, animation: 'slide'};
    navigator.pushPage(page, data).then(menu.close.bind(menu));
   
};




