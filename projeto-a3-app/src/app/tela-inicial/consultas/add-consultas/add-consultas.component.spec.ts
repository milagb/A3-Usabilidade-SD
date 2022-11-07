import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConsultasComponent } from './add-consultas.component';

describe('AddConsultasComponent', () => {
  let component: AddConsultasComponent;
  let fixture: ComponentFixture<AddConsultasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddConsultasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddConsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
