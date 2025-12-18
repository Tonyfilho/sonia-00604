import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-authentication',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './authentication.html',
  styleUrl: './authentication.css',
})
export class Authentication {
  protected signinForms!: UntypedFormGroup;
  
  
  
  constructor(private fb: UntypedFormBuilder) {
    this.signinForms = this.fb.nonNullable.group({
      email: [''],
      password: ['']
    });
  }
  
  
  
  
  
  
  onSubmit() {
   console.log("Meu Forms", this.signinForms.value);
  }


 

}
