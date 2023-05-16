const heroes= [
    {
        id: 1,
        name: 'Aquaman',
        Company: 'DC',
    },
    {
        id: 2,
        name: 'Spiderman',
        Company: 'Marvel',
    },
    {
        id: 3,
        name: 'Mujer maravilla',
        Company: 'Marvel',
    },
    {
        id: 4,
        name: 'Ironman',
        Company: 'Marvel',
    },
    {
        id: 5,
        name: 'Batman',
        Company: 'DC',
    }

];

//Utilizar .find
const getHeroeById=(id)=> {
    return heroes.find(heroe=>heroe.id==id);
};

//console.log(getHeroeById(5));

                               

/*export*/ const companies= [
    {id: 1,
    name:'DC'},
    {id: 2,
    name:'Marvel'}
];

//export default heroes;


/*export{
    heroes,
    companies,
};*/

export{
    heroes,
    companies as default,
};