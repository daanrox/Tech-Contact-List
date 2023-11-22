import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class LoginDto {
    @ApiProperty({
        description: `Login email`,
        type: String,
        default: 'daniel@mail.com'
    })
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({
        description: `Login password`,
        type: String,
        default: '123456789'
    })
    @IsString()
    @MinLength(8)
    @IsNotEmpty()
    password: string

    

}
