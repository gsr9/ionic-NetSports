import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationPage } from './publication.page';

describe('PublicationPage', () => {
  let component: PublicationPage;
  let fixture: ComponentFixture<PublicationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
