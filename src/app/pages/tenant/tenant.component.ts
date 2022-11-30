import { Router } from '@angular/router';
import { CommonInfo } from './../auth/auth.model';
import { AuthRepository } from './../auth/auth.repository';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'kbm-tenant',
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.scss']
})
export class TenantComponent {
  info?: CommonInfo;
  formGroup: FormGroup;
  showTenant: boolean = true;
  switchValue: boolean = true;

  constructor(
    public authRepository: AuthRepository,
    private router: Router,
    private fb: FormBuilder
  ) {

  }

  ngOnInit() {
    this.formGroup = this.fb.group({
      switch: [this.switchValue]
    });
  }

  navigateTo(route: string) {
    this.router.navigate([route])
  }

  toggleTenant(event: boolean) {
    this.showTenant = event;
  }

  resetForm() {
    this.formGroup.get('switch').setValue(true);
    this.showTenant = true;
  }

}
