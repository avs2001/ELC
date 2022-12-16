import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterOpenSlotComponent } from './footer-open-slot.component';

describe('FooterOpenSlotComponent', () => {
  let component: FooterOpenSlotComponent;
  let fixture: ComponentFixture<FooterOpenSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterOpenSlotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterOpenSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
