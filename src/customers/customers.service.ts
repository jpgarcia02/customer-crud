import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './customer.entity';
import { CreateCustomerDto } from './dto/create-customer.dto/create-customer.dto';

@Injectable()
export class CustomersService {
    constructor(
  @InjectRepository(Customer)
  private customerRepository: Repository<Customer>,
) {}

    async create(dto: CreateCustomerDto): Promise<Customer>{

        const entity = this.customerRepository.create(dto)

         return await this.customerRepository.save(entity);
        

    }

    async findAll():Promise<Customer[]>{
        return await this.customerRepository.find()
        
    }

    async findOne(id:number): Promise<Customer>{
    const search = await this.customerRepository.findOneBy({id})

    if(!search){
        throw new NotFoundException(`El cliente con ID ${id} no fue encontrado`);
    }
    return search
    
    }


    async update(id:number,data: Partial<CreateCustomerDto>): Promise<Customer>{
        const customer = await this.findOne(id);
          if (data.name) {
    customer.name = data.name;
  }
  if (data.email) {
    customer.email = data.email;
  }
  if (data.isActive !== undefined) {
    customer.isActive = data.isActive;
  }

  return await this.customerRepository.save(customer);
    }
    
    async remove(id: number): Promise<{message: string}> {
         const customer =await this.findOne(id);
        await this.customerRepository.remove(customer)
        return { message: 'Eliminado con éxito' }


    }
}
