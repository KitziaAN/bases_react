//Async - Await(promesa)

import {getHeroeById} from './bases/importar-exportar';

//Promesas en Javascript
//Las promesas son asincromas por definición

//DEVUELVE PROMESA
const getHeroeByIdAsyc = ( id ) =>{
    return new Promise( ( resolve, reject )  => {
        setTimeout( () => {
            const heroe = getHeroeById( id );
            
            if(heroe)
                resolve(heroe);
            else
                reject('No se encuentra el heroe')
            
            //Cambia estado a fulfull
        }, 2000);
    });
}

//Petición asyncrona
const getHeroeByIdAsyc2 = async (id) => {
    try{
        const heroe = await getHeroeById( id );
        console.log(heroe);
    }catch(error){
        console.log(error);
    }
}

getHeroeByIdAsyc2(3)

    