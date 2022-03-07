// const arrGente con dentro obj colleghi
// for (key in arrGente ) { }

const arrGente = [
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

console.log(arrGente[1]['name'])
// expected: 'Walter Gordon'



for (let key in arrGente) {
    //console.log(arrGente[key])
    //console.log(arrGente[key]['name'])
    document.getElementById('name').innerHTML = `${arrGente[key]['name']}`;
    document.getElementById('role').innerHTML = `${arrGente[key]['role']}`;
    document.getElementById('image').innerHTML = `<img
    src="img/${arrGente[key]['img']}"
  />`;

}