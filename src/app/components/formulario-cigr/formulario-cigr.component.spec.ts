import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCigrComponent } from './formulario-cigr.component';

describe('FormularioCigrComponent', () => {
  let component: FormularioCigrComponent;
  let fixture: ComponentFixture<FormularioCigrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCigrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioCigrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
