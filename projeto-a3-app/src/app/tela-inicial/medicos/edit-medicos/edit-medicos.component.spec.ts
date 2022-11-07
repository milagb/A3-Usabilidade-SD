import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMedicosComponent } from './edit-medicos.component';

describe('EditMedicosComponent', () => {
  let component: EditMedicosComponent;
  let fixture: ComponentFixture<EditMedicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMedicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
