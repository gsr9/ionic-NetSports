import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEventPage } from './show-event.page';

describe('ShowEventPage', () => {
  let component: ShowEventPage;
  let fixture: ComponentFixture<ShowEventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowEventPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
