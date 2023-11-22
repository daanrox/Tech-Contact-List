import { IsString, IsEmail, Min, IsNotEmpty, IsDate, IsOptional } from "class-validator";

export class CreateContactDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    phone: string;

    @IsString()
    @IsOptional()
    user_id?: string;
}
