import { ApiProperty } from "@nestjs/swagger";
import { hashSync } from "bcryptjs";
import { Transform } from "class-transformer";
import { IsDate, IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    @ApiProperty({
        description: `User's full name`,
        type: String,
        default: 'Daniel Nicolau'
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        description: `User email`,
        type: String,
        default: 'daniel@mail.com'
    })
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({
        description: `User password super secret`,
        type: String,
        default: '123456789'
    })
    @IsString()
    @MinLength(8)
    @IsNotEmpty()
    @Transform(({value}: {value: string}) => hashSync(value, 10),  {groups: ['transform']})
    password: string

    
    @ApiProperty({
        description: `User phone number`,
        type: String,
        default: '+5531900000000'
    })
    @IsString()
    @IsNotEmpty()
    phone: string;
    

}
