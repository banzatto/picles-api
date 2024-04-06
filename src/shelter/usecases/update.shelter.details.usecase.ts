import { Injectable } from "@nestjs/common";
import { IUseCase } from "src/domain/iusecase.interface";
import UpdateShelterDetailsUserCaseInput from "./dtos/update.shelter.details.usercase.input";
import UpdateShelterDetailsUserCaseOutput from "./dtos/update.shelter.details.usercase.output";

@Injectable()
export default class UpdateShelterDetailsUseCase implements IUseCase<UpdateShelterDetailsUserCaseInput, UpdateShelterDetailsUserCaseOutput> {
    run(input: UpdateShelterDetailsUserCaseInput) : Promise<UpdateShelterDetailsUserCaseOutput> {
        throw new Error("Metohod not implemeented.");
    }
   
         
}