import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CepComponent } from './cep.component';

describe('CepComponent', () => {
  let component: CepComponent;
  let fixture: ComponentFixture<CepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
