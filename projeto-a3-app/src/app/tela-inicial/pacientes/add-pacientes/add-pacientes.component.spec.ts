import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPacientesComponent } from './add-pacientes.component';

describe('AddPacientesComponent', () => {
  let component: AddPacientesComponent;
  let fixture: ComponentFixture<AddPacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPacientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
