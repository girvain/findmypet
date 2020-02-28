import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPetFormComponent } from './search-pet-form.component';

describe('SearchPetFormComponent', () => {
  let component: SearchPetFormComponent;
  let fixture: ComponentFixture<SearchPetFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPetFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
