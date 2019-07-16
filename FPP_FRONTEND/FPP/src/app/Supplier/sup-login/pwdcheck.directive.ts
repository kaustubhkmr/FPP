import { Directive } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

export const Pwdcheck: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const pwd = control.get('sup_password');
  const cpwd = control.get('sup_cpwd');

 
  return pwd &&cpwd && pwd.value != cpwd.value ? { 'Pwdcheck': true } : null;

 
};

@Directive({
  selector: '[appPwdcheck]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PwdcheckDirective, multi: true }]
})
export class PwdcheckDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors {
    return Pwdcheck(control)
  }

}
