import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsNumber } from "class-validator";

export class CreatePostDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    htmlContent: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    userId: number;
}
