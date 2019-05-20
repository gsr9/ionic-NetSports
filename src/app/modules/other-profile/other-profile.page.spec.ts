import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherProfilePage } from './other-profile.page';

describe('OtherProfilePage', () => {
  let component: OtherProfilePage;
  let fixture: ComponentFixture<OtherProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
