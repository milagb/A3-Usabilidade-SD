import { AbstractControl } from "@angular/forms";

//criado pra permitir apenas caracteres minusculos no nome do usuario (userName)
export function minusculoValidator(control:AbstractControl){
  const valor = control.value as string;
  if (valor !== valor.toLocaleLowerCase()){
    return {minusculo: true};
  } else {
    return null;
  }
};
