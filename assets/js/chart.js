const name1 = document.getElementById("name1");
const name2 = document.getElementById("name2");
const name3 = document.getElementById("name3");
const name4 = document.getElementById("name4");
const name5 = document.getElementById("name5");
const name6 = document.getElementById("name6");
const name7 = document.getElementById("name7");
const name8 = document.getElementById("name8");
const name9 = document.getElementById("name9");
const name10 = document.getElementById("name10");
const name11 = document.getElementById("name11");
const name12 = document.getElementById("name12");
const plus = document.getElementById("plus");
const form = document.getElementById("form");
const ent = document.getElementById("ent");
const ijad = document.getElementById("ijad");
const spinerCircle = document.getElementById("spinerCircle");
const h1Title = document.getElementById("h1Title");
const gameBoard = document.getElementById("gameBoard");

var names = [];
var datacreate = [];

ent.addEventListener("click", () => {
    names = [];
    datacreate = [];
    if (!name1.value == "") {
        names.push(name1.value);
    };
    if (!name2.value == "") {
        names.push(name2.value);
    };
    if (!name3.value == "") {
        names.push(name3.value);
    };
    if (!name4.value == "") {
        names.push(name4.value);
    };
    if (!name5.value == "") {
        names.push(name5.value);
    };
    if (!name6.value == "") {
        names.push(name6.value);
    };
    if (!name7.value == "") {
        names.push(name7.value);
    };
    if (!name8.value == "") {
        names.push(name8.value);
    };
    if (!name9.value == "") {
        names.push(name9.value);
    };
    if (!name10.value == "") {
        names.push(name10.value);
    };
    if (!name11.value == "") {
        names.push(name11.value);
    };
    if (!name12.value == "") {
        names.push(name12.value);
    };
    var namesT = names.length;
    for (let i = 0; i < namesT; i++) {
        datacreate.push(1);
    };
    if (!name1.value == "" && !name2.value == "" && !name3.value == "") {
        form.style.justifyContent = "center";
        ijad.classList.remove("hidden");
        plus.classList.add("hidden");
        name1.classList.add("hidden");
        name2.classList.add("hidden");
        name3.classList.add("hidden");
        name4.classList.add("hidden");
        name5.classList.add("hidden");
        name6.classList.add("hidden");
        name7.classList.add("hidden");
        name8.classList.add("hidden");
        name9.classList.add("hidden");
        name10.classList.add("hidden");
        name11.classList.add("hidden");
        name12.classList.add("hidden");
        ent.classList.add("hidden");

        h1Title.innerHTML = "Ready..?!";
    } else {
        alert("Enter 1,2,3,.. Players...")
    };

})

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [],
        datasets: [{
            label: '',
            data: [],
            backgroundColor: [
                'rgba(216, 27, 96, 0.6)',
                'rgba(3, 169, 244, 0.6)',
                'rgba(255, 152, 0, 0.6)',
                'rgba(29, 233, 182, 0.6)',
                'rgba(156, 39, 176, 0.6)',
                'rgba(84, 110, 122, 0.6)',
                'rgba(0, 17, 255, 0.6)',
                'rgba(255, 80,0, 0.6)',
                'rgba(200, 250,250, 0.6)',
                'rgba(0, 0,0, 0.6)',
                'rgba(255, 0,0, 0.6)',
                'rgba(0, 255,21, 0.6)',
            ],
            borderColor: [
                'rgba(216, 27, 96, 1)',
                'rgba(3, 169, 244, 1)',
                'rgba(255, 152, 0, 1)',
                'rgba(29, 233, 182, 1)',
                'rgba(156, 39, 176, 1)',
                'rgba(84, 110, 122, 1)',
                'rgba(0, 17, 255, 1)',
                'rgba(255, 80,0, 1)',
                'rgba(200, 250,250, 1)',
                'rgba(0, 0,0, 1)',
                'rgba(255, 0,0, 1)',
                'rgba(0, 255,21, 1)',
            ],
            borderWidth: 5
        }]
    },

    options: {
        responsive: false,
        legend: {
            display: false
        },
        title: {
            display: false,
            text: 'mahdiyarsoft',
            position: 'top',
            fontSize: 16,
            padding: 20
        },
        scales: {

            yAxes: [{
                display: false,
                ticks: {
                    min: 75,
                    display: false
                }
            }]
        }
    }
});

function adddata() {
    myChart.data.datasets[0].data = datacreate;
    myChart.data.labels = names;

    myChart.update();

}


function plus4() {
    name4.classList.remove("hidden");
    plus.setAttribute("onclick", "plus5()");
}

function plus5() {
    name5.classList.remove("hidden");
    plus.setAttribute("onclick", "plus6()");
}

function plus6() {
    name6.classList.remove("hidden");
    plus.setAttribute("onclick", "plus7()");
    form.style.justifyContent = "flex-start";

}

function plus7() {
    name7.classList.remove("hidden");
    plus.setAttribute("onclick", "plus8()");
}

function plus8() {
    name8.classList.remove("hidden");
    plus.setAttribute("onclick", "plus9()");
}

function plus9() {
    name9.classList.remove("hidden");
    plus.setAttribute("onclick", "plus10()");
}

function plus10() {
    name10.classList.remove("hidden");
    plus.setAttribute("onclick", "plus11()");
}

function plus11() {
    name11.classList.remove("hidden");
    plus.setAttribute("onclick", "plus12()");
}

function plus12() {
    name12.classList.remove("hidden");
    plus.setAttribute("onclick", "plus12()");
    plus.classList.add("hidden");
}
ijad.addEventListener("click", () => {
    spinerCircle.classList.remove("hidden");
    document.getElementById("spiner").classList.remove("hidden");
    form.classList.add("hidden");

})

function spin() {

    var x4 = Math.floor(Math.random() * (5000 - 2000) + 2000);
    var time = Math.floor(Math.random() * (4000 - 2000) + 2000);

    document.getElementById("spiner").animate([{
        transform: 'rotate(0deg)'
    }, {
        transform: 'rotate(' + x4 + 'deg)'
    }], {
        duration: time,
        iterations: 1,
        fill: "forwards",
        easing: ['ease-out']
    });
};