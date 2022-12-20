import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WlSidebarComponent } from './wl-sidebar.component';

describe('WlSidebarComponent', () => {
  let component: WlSidebarComponent;
  let fixture: ComponentFixture<WlSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ WlSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WlSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
