import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto/create-customer.dto';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

    @Post()
    create(@Body() dto: CreateCustomerDto){
        return this.customersService.create(dto)
    }

    @Get()
    findAll(){
       return this.customersService.findAll()
    }

    @Get(':id')
    findOne(@Param('id',ParseIntPipe)id:number){
        return this.customersService.findOne(id)
    }

    @Put(':id')
    update(
  @Param('id', ParseIntPipe) id: number,
  @Body() data: Partial<CreateCustomerDto>
) {
  return this.customersService.update(id, data);
}

    @Delete(':id')
remove(@Param('id', ParseIntPipe) id: number) {
  return this.customersService.remove(id);
}


}
