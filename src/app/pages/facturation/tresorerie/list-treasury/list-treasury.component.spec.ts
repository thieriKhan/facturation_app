/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListTreasuryComponent } from './list-treasury.component';

describe('ListTreasuryComponent', () => {
  let component: ListTreasuryComponent;
  let fixture: ComponentFixture<ListTreasuryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTreasuryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTreasuryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
