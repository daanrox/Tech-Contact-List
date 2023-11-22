import { hashSync } from "bcryptjs";
import { Transform } from "class-transformer";
import { IsDate, IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @MinLength(8)
    @IsNotEmpty()
    @Transform(({value}: {value: string}) => hashSync(value, 10),  {groups: ['transform']})
    password: string

    @IsString()
    @IsNotEmpty()
    phone: string;
    

}
