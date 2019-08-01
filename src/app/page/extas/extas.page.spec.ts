import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtasPage } from './extas.page';

describe('ExtasPage', () => {
  let component: ExtasPage;
  let fixture: ComponentFixture<ExtasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
