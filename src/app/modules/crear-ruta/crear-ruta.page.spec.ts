import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRutaPage } from './crear-ruta.page';

describe('CrearRutaPage', () => {
  let component: CrearRutaPage;
  let fixture: ComponentFixture<CrearRutaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearRutaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearRutaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
