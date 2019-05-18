import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WallItemComponent } from './wall-item.component';

describe('WallItemComponent', () => {
  let component: WallItemComponent;
  let fixture: ComponentFixture<WallItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WallItemComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WallItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
