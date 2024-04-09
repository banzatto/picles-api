import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import mongoose, { HydratedDocument } from "mongoose"

export type PetDocument = HydratedDocument<Pet>

@Schema({ versionKey: false, })
export class Pet {
    @Prop({required: true, autor: true, type: mongoose.Schema.ObjectId})
    _id: string;
    @Prop({required: true})
    name: string;
    @Prop({required: true})
    type: string;
    @Prop({required: true})
    size: string;
    @Prop({required: true})
    gender: string;
    @Prop({required: true})    
    bio: string;
    @Prop({required: false,default: null})
    photo: string;
    
    createdAt: Date;
    updatedAt: Date;
}

export const PetSchema = SchemaFactory.createForClass(Pet)