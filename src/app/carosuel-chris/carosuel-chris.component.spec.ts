import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarosuelChrisComponent } from './carosuel-chris.component';

describe('CarosuelChrisComponent', () => {
  let component: CarosuelChrisComponent;
  let fixture: ComponentFixture<CarosuelChrisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarosuelChrisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarosuelChrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
