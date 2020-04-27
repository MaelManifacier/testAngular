import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionJourComponent } from './selection-jour.component';

describe('SelectionJourComponent', () => {
  let component: SelectionJourComponent;
  let fixture: ComponentFixture<SelectionJourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionJourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionJourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
