const alert = document.getElementById("alert");
var trafficCanvas = document.getElementById("traffic-chart")
const dailyCanvas = document.getElementById("daily-chart");


// Alert Banner
alert.innerHTML =
`<div class="alert-banner">
    <p><strong>Alert: </strong> You have <strong> 8 </strong> new connections to approve.</p>
    <p class="alert-banner-close">x</p>
</div>
`
// Close Alert Banner
alert.addEventListener('click', e => {
    const element = e.target;
    if(element.classList.contains("alert-banner-close")) {
        alert.style.display = "none"
    }
});


//Traffic Chart

let trafficData = {
labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3","4-10", "11-17", "18-24", "25-31"],
datasets: [{
		data: [750, 1250, 900, 2000, 1500, 1750, 1250, 1850, 2250, 1700,2800],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderColor: '#b5b7e9',
        borderWidth: 2,
        lineTension: 0,
        pointRadius: 7,
        pointBorderWidth: 3,
        pointBackgroundColor: '#fff'

		}]
};


let trafficOptions = { 
    maintainAspectRatio: false,
	aspectRatio: 2.5,
	animation: {
	    duration: 1
	},
	scales: {
		yAxes: [{
		ticks: {
		    beginAtZero:true
	    }
	    }]
	},
	legend : {
	display: false
	},
	layout: {
    padding: 12
        
     }
	};


let trafficChart = new Chart(trafficCanvas, {
	type: 'line',
	data: trafficData,
	options: trafficOptions
});

//Bar Graph


// data for daily traffic bar chart
const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
            label: '# of Hits',
            data: [75, 115, 175, 190, 225, 200, 100],
            backgroundColor: '#7477BF',
            borderWidth: 1
            }]
};

const dailyOptions = {
    scales: {
    yAxes: [{
    ticks: {
    beginAtZero:true
    }
    }]
    },
    legend : {
    display: false
    }
}

let dailyChart = new Chart(dailyCanvas, {
        type: 'bar',
        data: dailyData,
        options: dailyOptions
});

//Doughnut Graph

const mobileCanvas = document.getElementById("mobile-users");

const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
    label: '# of Users',
    data: [2000, 550, 500],
    borderWidth: 0,
    backgroundColor: [
    '#7477BF',
    '#00d100',
    '#51B6C8'
    ]
    }]
};

const mobileOptions = {
	legend: {
        position: 'right',
        labels: {
        boxWidth: 20,
        fontStyle: 'bold'
		}
	}
}

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});


//Send Message Confirmation

const messageUserSearch = document.getElementById("userField");
const messageUser = document.getElementById("messageField");
const sendMessage = document.getElementById("send");
const messageContainer = document.getElementById("messageContainer");


sendMessage.addEventListener('click', (e)=> {
    const denyMessage = document.createElement('p');
    denyMessage.textContent = 'Please complete all sections of the form before sending';
    const sendMessage = document.createElement('p');
    sendMessage.textContent = 'Your message was sent successfully';

    if (messageUserSearch.value === "" || messageUser.value === ""){
        e.preventDefault();
        messageContainer.appendChild(denyMessage)

    } else {
        e.preventDefault();
        messageContainer.appendChild(sendMessage);
    }

});

