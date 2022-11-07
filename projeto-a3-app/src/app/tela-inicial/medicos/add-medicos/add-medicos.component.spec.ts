import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedicosComponent } from './add-medicos.component';

describe('AddMedicosComponent', () => {
  let component: AddMedicosComponent;
  let fixture: ComponentFixture<AddMedicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMedicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
