import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonLoginComponent } from './digimon-login.component';

describe('DigimonLoginComponent', () => {
  let component: DigimonLoginComponent;
  let fixture: ComponentFixture<DigimonLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigimonLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigimonLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
