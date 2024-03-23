import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoNoticiasCigrComponent } from './listado-noticias-cigr.component';

describe('ListadoNoticiasCigrComponent', () => {
  let component: ListadoNoticiasCigrComponent;
  let fixture: ComponentFixture<ListadoNoticiasCigrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoNoticiasCigrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoNoticiasCigrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
