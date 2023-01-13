import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    firstname: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    lastname: string;

    @IsEmail()
    @IsNotEmpty()
    @ApiProperty()
    email: string;
}
