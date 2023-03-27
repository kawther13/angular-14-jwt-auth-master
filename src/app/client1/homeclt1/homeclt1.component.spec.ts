import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homeclt1Component } from './homeclt1.component';

describe('Homeclt1Component', () => {
  let component: Homeclt1Component;
  let fixture: ComponentFixture<Homeclt1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Homeclt1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homeclt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
