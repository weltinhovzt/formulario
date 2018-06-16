import { FormControl } from "@angular/forms";

export interface InputModel {
    formControlName: string;
    formControl: FormControl;
    placeHolder?: string;
    iconStyle?: string;
    type?: string;
    classStyle?: string;
    mensagensErros?: MensagensErros[];
    mascaras?: Mascaras[];
}

export interface MensagensErros {
    nome: string;
    mensagem: string;
}

export interface Mascaras {
    nome: string;
    mask: string;
}