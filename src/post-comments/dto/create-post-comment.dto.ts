import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreatePostCommentDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    text: string;
}
