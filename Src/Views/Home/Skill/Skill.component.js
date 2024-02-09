const skillTitle = document.querySelector('.skillTitle');
skillTitle.innerHTML = 'Minhas Skills e como eu as utilizo no dia a dia:'

fetch("dados.json").then((response) => {
    response.json().then((dados) => {
        const cardContainer = document.querySelector('.cardContainer')

        dados.skills.map((skill) => {

            const card = document.createElement('div');
            card.classList.add('card');
            card.classList.add('RightAnimation');

            const cardTitle = document.createElement('span');
            cardTitle.classList.add('cardTitle');
            cardTitle.innerHTML = skill.title

            const cardText = document.createElement('span');
            cardText.classList.add('cardText');
            cardText.innerHTML = skill.text


            card.appendChild(cardTitle);
            card.appendChild(cardText);

            cardContainer.appendChild(card);
        })
    })
})