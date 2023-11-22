import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsEmail, Min, IsNotEmpty, IsDate, IsOptional } from "class-validator";

export class CreateContactDto {
    @ApiProperty({
        description: `Contact name`,
        type: String,
        default: 'Roberta Lopes'
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        description: `Contact email`,
        type: String,
        default: 'roberta@mail.com'
    })
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({
        description: `Contact phone number`,
        type: String,
        default: '+5531900000001'
    })
    @IsString()
    @IsNotEmpty()
    phone: string;

}
