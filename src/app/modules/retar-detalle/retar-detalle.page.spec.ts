import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetarDetallePage } from './retar-detalle.page';

describe('RetarDetallePage', () => {
  let component: RetarDetallePage;
  let fixture: ComponentFixture<RetarDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetarDetallePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetarDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
