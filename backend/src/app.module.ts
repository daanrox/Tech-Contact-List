import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { ContactsModule } from './modules/contacts/contacts.module';
import { UsersService } from './modules/users/users.service';
import { PrismaService } from './database/prisma.service';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [UsersModule, ContactsModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
