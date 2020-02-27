import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalCardDisplayAreaComponent } from './animal-card-display-area.component';

describe('AnimalCardDisplayAreaComponent', () => {
  let component: AnimalCardDisplayAreaComponent;
  let fixture: ComponentFixture<AnimalCardDisplayAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalCardDisplayAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalCardDisplayAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
