import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsString()
    @ApiProperty()
    avatarS3Key: string;

    @IsString()
    @ApiProperty()
    coverPicS3Key: string;
}
