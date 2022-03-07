let arrGente = [
    {
        img: 'wayne-barnett-founder-ceo.jpg',
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
    },
    {
        img: 'walter-gordon-office-manager.jpg',
        name: 'Walter Gordon',
        role: 'Office Manager',
    },
    {
        img: 'scott-estrada-developer.jpg',
        name: 'Scott Estrada',
        role: 'Developer',
    },
    {
        img: 'barbara-ramos-graphic-designer.jpg',
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
    },
    {
        img: 'angela-lopez-social-media-manager.jpg',
        name: 'Angela Lopez',
        role: 'Social Media Manager',
    },
    {
        img: 'angela-caroll-chief-editor.jpg',
        name: 'Angela Caroll',
        role: 'Chief Editor',
    },

];
let teamContainer = document.querySelector('.team-container');

for (let key in arrGente) {

    teamContainer.innerHTML += `
        <div class="team-card">
            <div class="card-image">
                <img src="img/${arrGente[key]['img']}" alt="${arrGente[key]['name']}"/>
            </div>
            <div class="card-text">
                <h3>${arrGente[key]['name']}</h3>
                <p>${arrGente[key]['role']}</p>
            </div>
        </div>
      `

};


document.querySelector('button').addEventListener('click', function () {

    let inputName = document.getElementById('name');
    let inputRole = document.getElementById('role');
    let inputImg = document.getElementById('image');
    let newGente = {
        img: inputImg.value,
        name: inputName.value,
        role: inputRole.value,
    };

    arrGente.push(newGente);

    console.log(arrGente);


    let teamContainer = document.querySelector('.team-container');

    teamContainer.innerHTML += `
        <div class="team-card">
            <div class="card-image">
                <img src="${newGente['img']}" alt="${newGente['name']}"/>
            </div>
            <div class="card-text">
                <h3>${newGente['name']}</h3>
                <p>${newGente['role']}</p>
            </div>
        </div>
      `

});









