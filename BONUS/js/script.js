// const arrGente con dentro obj colleghi
// for (key in arrGente ) { }

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

//console.log(arrGente[1]['name'])
// expected: 'Walter Gordon'
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

document.querySelector('button').addEventListener('click', function() {

    let inputName = document.getElementById('name');
    let inputRole = document.getElementById('role');
    let inputImg = document.getElementById('img');
    let newGente = {
        img:  'inputImg.value',//non so perche non vuole prendere la value per questo input
        name: inputName.value,
        role: inputRole.value,
    };

   
    arrGente.push(newGente);
    console.log(arrGente);
   
  
  });







