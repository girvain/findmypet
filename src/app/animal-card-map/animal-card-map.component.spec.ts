import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalCardMapComponent } from './animal-card-map.component';

describe('AnimalCardMapComponent', () => {
  let component: AnimalCardMapComponent;
  let fixture: ComponentFixture<AnimalCardMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalCardMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalCardMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
