import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavOpenSlotComponent } from './nav-open-slot.component';

describe('NavOpenSlotComponent', () => {
  let component: NavOpenSlotComponent;
  let fixture: ComponentFixture<NavOpenSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NavOpenSlotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavOpenSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
