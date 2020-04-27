import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireAjoutFraisComponent } from './formulaire-ajout-frais.component';

describe('FormulaireAjoutFraisComponent', () => {
  let component: FormulaireAjoutFraisComponent;
  let fixture: ComponentFixture<FormulaireAjoutFraisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaireAjoutFraisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireAjoutFraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
