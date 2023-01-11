import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { PrismaService } from './prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // SWAGGER
  const config = new DocumentBuilder()
  .setTitle('Ybook')
  .setDescription('The Ybook API description')
  .addBearerAuth({
    type : 'http', scheme: 'bearer', bearerFormat: 'JWT'},'acces-token'
  )
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // PRISMA
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app)

  await app.listen(3000);

}
bootstrap();
