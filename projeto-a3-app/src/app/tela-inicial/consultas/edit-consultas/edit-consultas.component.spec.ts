import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditConsultasComponent } from './edit-consultas.component';

describe('EditConsultasComponent', () => {
  let component: EditConsultasComponent;
  let fixture: ComponentFixture<EditConsultasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditConsultasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditConsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
