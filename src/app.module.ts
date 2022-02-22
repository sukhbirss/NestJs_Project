import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://Nexg:iYUnWK9yRDcXXAYJ@cluster0.on34y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
  ],
})
export class AppModule {}
