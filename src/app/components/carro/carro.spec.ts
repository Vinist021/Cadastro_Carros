import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carro } from './carro';

describe('Carro', () => {
  let component: Carro;
  let fixture: ComponentFixture<Carro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Carro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Carro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
