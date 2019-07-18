import { Directive } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

export const Cpwdcheck: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const pwd = control.get('cust_password');
  const cpwd = control.get('cust_cpwd');

 
  return pwd &&cpwd && pwd.value != cpwd.value ? { 'Cpwdcheck': true } : null;

 
};

@Directive({
  selector: '[appCpwdcheck]',
  providers: [{ provide: NG_VALIDATORS, useExisting: CpwdcheckDirective, multi: true }]

})
export class CpwdcheckDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors {
    return Cpwdcheck(control)
  }

}








