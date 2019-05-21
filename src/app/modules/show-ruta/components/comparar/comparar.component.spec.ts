import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompararComponent } from './comparar.component';

describe('CompararComponent', () => {
  let component: CompararComponent;
  let fixture: ComponentFixture<CompararComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompararComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompararComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
