import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import {  v4 as uuid } from 'uuid'
import { UpdateCarDto } from './dto';
import { CreateCarDto } from './dto/create-car.dto';
import { ICar } from './interfaces/car.interface';

@Injectable()
export class CarsService {
    private cars: ICar[] = [
        /*{
            id:uuid(),
            brand: 'Toyota',
            model: 'Corolla'
        }*/
    ]

    findAll(){
        return this.cars
    }

    findOneById( id: string ) {
        const car = this.cars.find(car => car.id === id)
        if(!car) throw new NotFoundException(`Car with id ${id} not found.`)
        
        return car;
    }

    create(createCarDto: CreateCarDto){
        const car: ICar = {id:uuid(), ...createCarDto}
        this.cars.push( car )
        return car;
    }

    update(id: string, updateCarDto: UpdateCarDto) {
        let carDB = this.findOneById(id)
        if(updateCarDto.id && updateCarDto.id !== id)
            throw new BadRequestException(`Car id not valid.`)
        this.cars = this.cars.map( car => {
            if (car.id === id){
               carDB = { ...carDB,...updateCarDto, id}  
               return carDB
            }
        })
        return carDB;
    }

    delete(id:string){
        const car = this.findOneById(id)
        this.cars = this.cars.filter(car => car.id !== id)
        // return car
    }

    fillCarsWithData(cars: ICar[]){
        this.cars = cars
    }
}
