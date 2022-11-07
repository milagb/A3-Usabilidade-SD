import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPacientesComponent } from './edit-pacientes.component';

describe('EditPacientesComponent', () => {
  let component: EditPacientesComponent;
  let fixture: ComponentFixture<EditPacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPacientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
