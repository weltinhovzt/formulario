import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { InputModel } from "./Inputs/inputs.model";
import { FormGroup, FormControl } from "@angular/forms";
import { BotoesModel } from "./Botoes/botoes.model";

@Component({
    selector: 'formulario',
    templateUrl: './formulario.html'
})

export class Formularios implements OnInit {

    formulario: FormGroup;
    @Input() classForm: string;
    @Input() inputs: InputModel[];
    @Input() buttons: BotoesModel[];
    @Output() event = new EventEmitter();

    ngOnInit(): void {
        this.formulario = this.construirFormGroup(this.inputs);
    }

    construirFormGroup(inputs: InputModel[]): FormGroup {
        let group = new FormGroup({});
        inputs.forEach(x => { group.setControl(x.formControlName, x.formControl) });
        
        return group;
    }

    ValidandoVisual(inputName: string): boolean {
        return this.formulario.controls[inputName].invalid && this.formulario.controls[inputName].touched;
    }

    ValidandoMensagemDeErro(inputName: any): string {
        let statusInput = this.formulario.controls[inputName].errors;
        let mensagemDeErroDoInput = this.inputs.find(x => x.formControlName === inputName).mensagensErros;
        
        if(statusInput !== null && mensagemDeErroDoInput !== null)
        {  
            for(let i = 0; i < mensagemDeErroDoInput.length; i++) 
            {
                var statusInputCorrente = statusInput[mensagemDeErroDoInput[i].nome];
                if((typeof statusInputCorrente === "object" && statusInputCorrente != null) || 
                (typeof statusInputCorrente === "boolean" && statusInputCorrente === true))
                {
                    return mensagemDeErroDoInput[i].mensagem;
                }
            }
        }
    }

    ValidandoMascaras(inputName: any): string {
        let inputMask = this.inputs.find(x => x.formControlName === inputName).mascaras;

        if(inputMask !== undefined && inputMask.length === 1)
        {
            return inputMask[0].mask;
        }

        if(inputMask !== undefined && inputMask.length > 1 && inputMask.find(x => x.nome === 'telefone'))
        {   
            if(this.formulario.controls[inputName].value.length > 10)
            {
                return inputMask[0].mask;
            }
            else
            {
                return inputMask[1].mask;
            }
        }
    }

    ValidandoFormulario(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof FormControl) 
            {
                control.markAsTouched({ onlySelf: true });
            }    
            else if (control instanceof FormGroup) 
            {
                this.ValidandoFormulario(control);
            }
        });
    }
}