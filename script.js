const previousLabel = {
    daily: 'Yesterday',
    weekly: 'Last Week',
    monthly: 'Last Month'
};

let activeTimeframe = 'weekly';

const buttons = document.querySelectorAll('.timeframe--btn');
const cards = document.querySelectorAll('.cards');

function updateCards(data, timeframe) {
    cards.forEach(card => {
        const activity = card.dataset.activity;
        const dataActivity = data.find(item => item.title === activity);
        if (!dataActivity) return;

        card.querySelector('.current--time').textContent = `${dataActivity.timeframes[timeframe].current}hrs`;
        card.querySelector('.previous--time').textContent = `${previousLabel[timeframe]} - ${dataActivity.timeframes[timeframe].previous}hrs`;
    });
}

fetch('data.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const timeframe = btn.dataset.timeframe;
            activeTimeframe = timeframe;

            buttons.forEach(b => {
                b.classList.remove('active');
            });

            btn.classList.add('active');
            updateCards(data, activeTimeframe);
        });
    });

    updateCards(data, activeTimeframe);
    document.querySelector(`[data-timeframe="${activeTimeframe}"]`).classList.add('active');
  });