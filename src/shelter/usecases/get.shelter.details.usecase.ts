import { IUseCase } from "src/domain/iusecase.interface";
import GetShelterDetailsUseCaseOutput from "./dtos/get.shelter.details.usecase.output";

export default class GetShelterDetailsUseCase implements IUseCase<null, GetShelterDetailsUseCaseOutput> {
    run(input: null): Promise<GetShelterDetailsUseCaseOutput> {
        return Promise.resolve(new GetShelterDetailsUseCaseOutput({
            shelterName: 'Eu',
            shelterEmail: 'Eu@eu',
            shelterPhone: '1922333',
            shelterWhatsApp: '1999992',
            createAt: new Date(),
            updateAt: new Date()
            
        }));
    } 
}