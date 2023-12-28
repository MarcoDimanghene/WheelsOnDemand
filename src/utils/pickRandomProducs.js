import { carsdata } from "../Data/data";

export const pickRandomCars = (cantidad) => {
    const nuevoArray = [];

    while(nuevoArray.length < cantidad) {
        const indexRandom = Math.floor(Math.random() * carsdata.length);

        if (!nuevoArray.length) {
            nuevoArray.push(carsdata[indexRandom]);
        }

        const carsExistente = nuevoArray.find((newProduct)=>{
            return newProduct.id === carsdata[indexRandom].id;
        });

        if(!carsExistente){
            nuevoArray.push(carsdata[indexRandom]);
        }
        
    }

    return nuevoArray;
}