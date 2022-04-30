import { ApiProperty } from '@nestjs/swagger';
export class NotFoundResponse {
  @ApiProperty({
    default: 404,
  })
  status: number;

  @ApiProperty({
    default: 'Todo with id=% not exists',
  })
  message: string;
}
