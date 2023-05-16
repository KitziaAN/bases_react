//console.log('Prueba');

//Importacion de recursos
//Cuendo no se agregan por defecto se tiene que agregar llaves
import {heroes} from '../data/heroes';
export const getHeroeById=(id)=> {
    return heroes.find(heroe=>heroe.id==id);
};
//console.log(heroes, companies);

