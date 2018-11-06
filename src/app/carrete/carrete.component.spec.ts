import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarreteComponent } from './carrete.component';

describe('CarreteComponent', () => {
  let component: CarreteComponent;
  let fixture: ComponentFixture<CarreteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarreteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarreteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
