import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAjoutFraisComponent } from './page-ajout-frais.component';

describe('PageAjoutFraisComponent', () => {
  let component: PageAjoutFraisComponent;
  let fixture: ComponentFixture<PageAjoutFraisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAjoutFraisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAjoutFraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
