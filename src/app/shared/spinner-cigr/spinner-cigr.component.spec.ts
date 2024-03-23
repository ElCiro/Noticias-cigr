import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerCigrComponent } from './spinner-cigr.component';

describe('SpinnerCigrComponent', () => {
  let component: SpinnerCigrComponent;
  let fixture: ComponentFixture<SpinnerCigrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinnerCigrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinnerCigrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
