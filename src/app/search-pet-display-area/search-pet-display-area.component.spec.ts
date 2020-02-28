import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPetDisplayAreaComponent } from './search-pet-display-area.component';

describe('SearchPetDisplayAreaComponent', () => {
  let component: SearchPetDisplayAreaComponent;
  let fixture: ComponentFixture<SearchPetDisplayAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPetDisplayAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPetDisplayAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
