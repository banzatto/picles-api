export default class UpdateShelterDetailsUserCaseInput {
    name: string;
    whatsApp: string;
    email: string;
    phone: string;
    
    constructor(data:Partial<UpdateShelterDetailsUserCaseInput>) {
        Object.assign(this, data);
    }
}