import { BadRequestException, Injectable } from '@nestjs/common';
import dogs from './dogs'
import { Dog } from './interfaces/dog.interface';
import { FindAllParams } from './dto/findAllParams.dto';


@Injectable()
export class AppService {
  findAll(params?: FindAllParams): Dog[] {
    // returns the full set of data, if no limit param is given
    return params.limit ? dogs.slice(0, params.limit) : dogs
  }

  findOne(id: string): Dog {
    // finds the object with id which has been provided
    const result = dogs.find(dog => dog.id === id)

    // if no object is find, an error is thrown
    if(!result) throw new BadRequestException('No breed was found for the id provided')
  
    // otherwise it returns the result
    return result
  }
}
