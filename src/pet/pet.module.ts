import { Module } from '@nestjs/common';
import { PetController } from './pet.controller';
import CreatePetUseCase from './usecases/create.pet.usecase';
import PetTokens from './pet.tokens';
import { Mongoose } from 'mongoose';
import { Pet, PetSchema } from './schemas/pet.schema';
import { MongooseModule } from '@nestjs/mongoose';
import PetRepository from './pet.repository';
import GetPetByIdUseCase from './usecases/get.pet.by.id.usecase';
import UpdatePetByIdUseCase from './usecases/upate.pet.by.id.usecase';
import DeletePetByIdUseCase from './usecases/delete.pet.by.id.usecase';
import UpdatePetPhotoByIdUseCase from './usecases/update.pet.photo.by.id.usecase';
import AppTokens from 'src/apps.tokens';
import FileService from 'src/file.service';
import GetPetsUseCase from './usecases/get.pets.usecase';

@Module({
  controllers: [PetController],
  imports: [MongooseModule.forFeature([{ name: Pet.name, schema: PetSchema }])],
  providers: [
    {
      provide: PetTokens.createPetUseCase,
      useClass: CreatePetUseCase,
    },
    {
      provide: PetTokens.getPetByIdUseCase,
      useClass: GetPetByIdUseCase,
    },    
    {
      provide: PetTokens.getPetsUseCase,
      useClass: GetPetsUseCase,
    },
    {
      provide: PetTokens.updatePetByIdUseCase,
      useClass: UpdatePetByIdUseCase,
    },
    {
      provide: PetTokens.deletePetByIdUseCase,
      useClass: DeletePetByIdUseCase,
    },
    {
      provide: PetTokens.updatePetPhotoByIdUseCase,
      useClass: UpdatePetPhotoByIdUseCase,
    },    
    {
      provide: PetTokens.petRepository,
      useClass: PetRepository,
    },
    {
      provide: AppTokens.fileService,
      useClass: FileService
    }
  ],
})
export class PetModule {}
