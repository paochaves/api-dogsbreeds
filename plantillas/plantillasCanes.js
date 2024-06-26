import { Schema, model } from "mongoose";

const esquemaCan = new Schema(
    {
    foto: {type: String, required: true},
    tipo: {type: String, required: true},
    nombre: {type: String, required: true},
    nombreCientifico: {type: String, required: true},
    paisDeOrigen: {type: String, required: true},
    fechaAproxDescubrimiento: {type: Date, required: true},
    caracter: {type: String, required: true},
    tipoDePelaje: {type: String, required: true},
    tamanio: {type: Schema.Types.Mixed, required: true},
    peso: {type: Schema.Types.Mixed, required: true},
    });

export default model("can", esquemaCan);
