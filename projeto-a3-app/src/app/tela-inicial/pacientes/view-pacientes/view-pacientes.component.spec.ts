import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPacientesComponent } from './view-pacientes.component';

describe('ViewPacientesComponent', () => {
  let component: ViewPacientesComponent;
  let fixture: ComponentFixture<ViewPacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPacientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
