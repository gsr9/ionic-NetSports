import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WallPage } from './wall.page';

describe('WallPage', () => {
  let component: WallPage;
  let fixture: ComponentFixture<WallPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WallPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
