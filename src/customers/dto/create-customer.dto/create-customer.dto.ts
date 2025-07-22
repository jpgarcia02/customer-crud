import { IsBoolean, IsEmail, IsOptional, IsString } from "class-validator";

export class CreateCustomerDto {

    @IsString()
    name: string

   @IsEmail()
   email: string

   @IsBoolean()
   @IsOptional()
   isActive:boolean
}
