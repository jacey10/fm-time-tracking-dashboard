const previousLabel ={
    dailly: 'Yesterday',
    weekly: 'Last Week',
    monthly: 'Last Month'
};

let activeTimeframe = 'weekly';

const buttons = document.querySelectorAll('.timeframe--buttons');
const cards = document.querySelectorAll('.cards');

function updateCards (data, timeframe) {
    cards.forEach((card) => {
        const activity = card.dataset.activity;
        const activityData = data.find(item => item.title === activity);
    });

    cards.querySelectorAll('.current--time').textContent = activityData.timeframes[timeframe].current;
    cards.querySelectorAll('.previous--time').textContent = activityData.timeframes[timeframe].previous;
};

fetch('data.json')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
});