import { AbstractControl, FormGroup } from "@angular/forms";

export interface MetodoGet{
    data: string
}

export interface MetodoPost{
    data: string
}

export interface Formulario{
    name : string;
}


export interface FormularioRactive extends FormGroup{
    value: Formulario;
    controls:{
        name:AbstractControl;
    }
}

