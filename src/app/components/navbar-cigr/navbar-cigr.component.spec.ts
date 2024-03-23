import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarCigrComponent } from './navbar-cigr.component';

describe('NavbarCigrComponent', () => {
  let component: NavbarCigrComponent;
  let fixture: ComponentFixture<NavbarCigrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarCigrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarCigrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
