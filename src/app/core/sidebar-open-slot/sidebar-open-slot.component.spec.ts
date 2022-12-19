import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarOpenSlotComponent } from './sidebar-open-slot.component';

describe('SidebarOpenSlotComponent', () => {
  let component: SidebarOpenSlotComponent;
  let fixture: ComponentFixture<SidebarOpenSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SidebarOpenSlotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarOpenSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
