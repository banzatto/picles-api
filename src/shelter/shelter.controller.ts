import { BadRequestException, Body, Controller, Get, Inject, Patch, Post, Put } from '@nestjs/common';
import GetShelterDetailsUseCaseOutput from './usecases/dtos/get.shelter.details.usecase.output';
import { IUseCase } from 'src/domain/iusecase.interface';
import ShelterTokens from './shelter.tokens';
import UpdateShelterControllerInput from './dtos/update.shelter.controller.input';
import UpdateShelterDetailsUserCaseInput from './usecases/dtos/update.shelter.details.usercase.input';
import UpdateShelterDetailsUserCaseOutput from './usecases/dtos/update.shelter.details.usercase.output';

@Controller('shelter')
export class ShelterController {

    @Inject(ShelterTokens.getShelterDetailsUseCase)
    private readonly getShelterDetailsUseCase: IUseCase<null, GetShelterDetailsUseCaseOutput>

    @Inject(ShelterTokens.updateShelterDetailsUseCase)
    private readonly updateShelterDetailsUseCase: IUseCase<UpdateShelterDetailsUserCaseInput, UpdateShelterDetailsUserCaseOutput>

    @Get()
    async getShelterDetails(): Promise<GetShelterDetailsUseCaseOutput>  {
        return await this.getShelterDetailsUseCase.run(null)
    }

    /*@Patch()
    async updateShelterDetails(@Body() input: UpdateShelterControllerInput) {
       console.log(input)
    }*/

    @Put()
    async updateShelterDetails(@Body() input: UpdateShelterControllerInput)
    : Promise<UpdateShelterDetailsUserCaseOutput>
    {
        console.log(input);
       const useCaseInput = new UpdateShelterDetailsUserCaseInput({...input});
       return await this.updateShelterDetailsUseCase.run(useCaseInput);
    }
       
}


