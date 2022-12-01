import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRepository } from './../auth/auth.repository';
import { HarnessLoader } from '@angular/cdk/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonHarness } from 'src/app/shared/harnesses/button.harness';
import { SwitchHarness } from 'src/app/shared/harnesses/switch.harness';

import { TenantComponent } from './tenant.component';
import { TestbedHarnessEnvironment } from "@angular/cdk/testing/testbed";
import { SwitchComponent } from 'src/app/shared/components/switch/switch.component';

fdescribe('TenantComponent', () => {
  let component: TenantComponent;
  let fixture: ComponentFixture<TenantComponent>;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TenantComponent,
        SwitchComponent
      ],
      providers: [
        AuthRepository
      ],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture)
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reset the switch if we reset the form ', async () => {

    const mySwitch = await loader.getHarness(SwitchHarness);
    const myButton = await loader.getHarness(ButtonHarness.with({
      text: 'Reset'
    }));

    await mySwitch.click();
    expect(await mySwitch.checked()).toBe(false);

    await myButton.click();
    expect(await mySwitch.checked()).toBe(true);

  });

});
