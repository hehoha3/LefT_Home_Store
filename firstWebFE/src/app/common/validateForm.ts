import { FormControl, FormGroup } from '@angular/forms';

export default class ValidateForm {
  static validateAllForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((user) => {
      const control = formGroup.get(user);
      if (control instanceof FormControl) {
        control.markAsDirty({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllForm(control);
      }
    });
  }
}
