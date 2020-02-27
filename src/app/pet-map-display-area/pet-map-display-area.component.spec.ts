import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetMapDisplayAreaComponent } from './pet-map-display-area.component';

describe('PetMapDisplayAreaComponent', () => {
  let component: PetMapDisplayAreaComponent;
  let fixture: ComponentFixture<PetMapDisplayAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetMapDisplayAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetMapDisplayAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
