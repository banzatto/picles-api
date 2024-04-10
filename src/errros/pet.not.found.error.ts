import { CustomError } from "./custom.erros";

export default class PetNotFoundError extends CustomError {
    constructor() {
        super('Pet Not Found','0001')
    }
}