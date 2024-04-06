export default class UpdateShelterDetailsUserCaseOutput {
    name: string;
    whatsApp: string;
    email: string;
    phone: string;
    createAt: Date;
    updateAt: Date;

    constructor(data:Partial<UpdateShelterDetailsUserCaseOutput>) {
        Object.assign(this, data);
    }
}