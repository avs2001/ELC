import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceSearchComponent } from './device-search.component';

describe('DeviceSearchComponent', () => {
  let component: DeviceSearchComponent;
  let fixture: ComponentFixture<DeviceSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DeviceSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
