import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMedicosComponent } from './view-medicos.component';

describe('ViewMedicosComponent', () => {
  let component: ViewMedicosComponent;
  let fixture: ComponentFixture<ViewMedicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMedicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
