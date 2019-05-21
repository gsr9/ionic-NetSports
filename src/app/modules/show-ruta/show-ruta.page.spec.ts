import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRutaPage } from './show-ruta.page';

describe('ShowRutaPage', () => {
  let component: ShowRutaPage;
  let fixture: ComponentFixture<ShowRutaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowRutaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRutaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
