import {getHeroeById} from './bases/importar-exportar';

//Promesas en Javascript
//Las promesas son asincromas por definición

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



//En caso de que la respuesta es exitosa
getHeroeByIdAsyc(10)
.then( heroe => {console.log(heroe)})
.catch( error => console.log(error))
//