import { Injectable, NotFoundException, Query } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { PrismaService } from 'src/database/prisma.service';
import { Contact } from './entities/contact.entity';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ContactsService {
  constructor( private prisma: PrismaService){}

  async create(createContactDto: CreateContactDto, userId: string) {
    const contact = new Contact();
    Object.assign(contact, { 
      ...createContactDto
    })
    const user = await this.prisma.user.findUnique({
      where: {id: userId },
    })

    await this.prisma.contact.create({
      data:{
        id: contact.id,
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        created_at: contact.created_at,
        user:{
          connect: {
            id: userId
          }
        }

      }
    })
    return plainToInstance(Contact, contact);
  }

  async findAll(@Query('userId') userId?: string) {

    if (userId) {
      const contacts = await this.prisma.contact.findMany({where: {user_id: userId}})
      return plainToInstance(Contact, contacts);
    }
    const contacts = await this.prisma.contact.findMany()
    return plainToInstance(Contact, contacts);

  }

  async findOne(id: string) {
    const contact = await this.prisma.contact.findFirst({
      where: { id },
    })
    if(!contact){
      throw new NotFoundException("Contact not found.")
    }
    return plainToInstance(Contact, contact);

  }

  async update(id: string, updateContactDto: UpdateContactDto) {
    const contact = await this.prisma.contact.findUnique({where: {id}})
    if(!contact){
      throw new NotFoundException("Contact not found.")
    }
    const updateContact = await this.prisma.contact.update({where: {id}, data:{...updateContactDto} })

    return plainToInstance(Contact, updateContact);
  }

  async remove(id: string) {
    const contact = await  this.prisma.contact.findUnique({where: {id}})
    if(!contact){
      throw new NotFoundException("Contact not found.")
    }
    await this.prisma.contact.delete({where: {id}})
  }
}
