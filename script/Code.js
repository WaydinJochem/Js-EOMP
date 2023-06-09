//Array for promo items
let array1 = [
    {
        img:'https://i.postimg.cc/SKcpDj9B/robby-burke-2019-01-21.jpg',
        title: 'Gun 9000',
        price: 3000,
        desc: 'Wait for description',
    },
    {
        img:'https://i.postimg.cc/SKcpDj9B/robby-burke-2019-01-21.jpg',
        title: 'Gun 9000',
        price: 3000,
        desc: 'Wait for description',
    },
    {
        img:'https://i.postimg.cc/SKcpDj9B/robby-burke-2019-01-21.jpg',
        title: 'Gun 9000',
        price: 3000,
        desc: 'Wait for description',
    },
]

let promo = document.querySelector("#added");
array1.forEach((data) => {
    promo.innerHTML += `
    <div class="card">
    <div class="card-img"><img src="${data.img}" alt=""></div>
    <div class="card-title"></div>
    <div class="card-text"></div>
    </div>`
});

//Side Bar Start
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
  }
//Side Bar end