import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePublicationPage } from './create-publication.page';

describe('CreatePublicationPage', () => {
  let component: CreatePublicationPage;
  let fixture: ComponentFixture<CreatePublicationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePublicationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePublicationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
