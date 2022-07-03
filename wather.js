let $ = document;
let getsearch = $.querySelector('.searchbox')
let info = $.querySelector('.child')
let temp = $.querySelector('.num')
let lod = $.querySelector('.lod')
let country = $.querySelector('.city')
let statuss = $.querySelector('.status')
let humidit = $.querySelector('.him')
let speed = $.querySelector('.speed')
let btn = $.querySelector('.search')
let eror = $.querySelector('.eror')
changeBackground();
let weathercountry = [
    {name : 'Tehran' , temp : 43 , humidity : 26 , windspeed : 32 , status : 'ranny'},
    {name : 'Semnan' , temp : 40 , humidity : 30 , windspeed : 37 , status : 'snowy'},
    {name : 'Tabriz' , temp : 15 , humidity : 10 , windspeed : 10 , status : 'sunny'},
    {name : 'Mashhad' , temp : 38 , humidity : 24 , windspeed : 30, status : 'snowy'},
    {name : 'Garmsar' , temp : 50 , humidity : 34 , windspeed : 20, status : 'ranny'},
];

getsearch.addEventListener('blur',function(){
    let filter = weathercountry.filter(function(namecountry){
        if(namecountry.name === getsearch.value){
            return true
        }else{
            eror.style.display = 'block'
            eror.innerHTML = 'Enter the correct name'
        }
    })
    filter.forEach(function(cunt){
        btn.addEventListener('click',function(){
            eror.style.display = 'none'
            lod.style.display = 'none'
            info.style.display = 'block'
            country.innerHTML = cunt.name
            temp.innerHTML = cunt.temp
            statuss.innerHTML = cunt.status
            humidit.innerHTML = 'humidity: '+cunt.humidity + ' %'
            speed.innerHTML = 'windspeed: '+cunt.windspeed + ' km/h'
        })
    })
})
function changeBackground(){
    let randomimg = ['/img/sky.jpg','/img/sky7.jpg','/img/sky8.jpg','/img/sky9.jpg','/img/sky10.jpg','/img/sky11.jpg','/img/sky12.jpg','/img/sky13.jpg','/img/sky14.jpg','/img/sky15.jpg',]
    document.body.style.backgroundImage='url('+randomimg[Math.floor(Math.random()*randomimg.length)]+')' 
}