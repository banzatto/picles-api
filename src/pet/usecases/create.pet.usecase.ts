import { IUseCase } from "src/domain/iusecase.interface";
import CreatePetuseCaseInput from "./dtos/create.pet.usecase.input";
import CreatePetUseCaseOutput from "./dtos/create.pet.usecase.output";
import { Inject, Injectable } from "@nestjs/common";
import IPetRepository from "../interfaces/pet.repository.interface";
import PetTokens from "../pet.tokens";

@Injectable()
export default class CreatePetUseCase implements IUseCase<CreatePetuseCaseInput,CreatePetUseCaseOutput> {

    constructor(
        @Inject(PetTokens.petRepository) 
        private readonly petRepository: IPetRepository        
    ) {}

    async run(input: CreatePetuseCaseInput): Promise<CreatePetUseCaseOutput> {
        console.log(input)
        const newPet = await this.petRepository.create(input)
        return new CreatePetUseCaseOutput({
            id: newPet._id,
            name: newPet.name,
            type: newPet.type,
            size: newPet.size,
            gender: newPet.gender,
            bio: newPet.bio,
            photo : newPet.photo,
            createdAt: newPet.createdAt,
            updatedAt: newPet.updatedAt            
        })
    }

}