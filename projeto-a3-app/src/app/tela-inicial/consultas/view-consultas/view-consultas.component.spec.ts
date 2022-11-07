import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewConsultasComponent } from './view-consultas.component';

describe('ViewConsultasComponent', () => {
  let component: ViewConsultasComponent;
  let fixture: ComponentFixture<ViewConsultasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewConsultasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewConsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
