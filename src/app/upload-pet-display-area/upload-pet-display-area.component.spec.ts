import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPetDisplayAreaComponent } from './upload-pet-display-area.component';

describe('UploadPetDisplayAreaComponent', () => {
  let component: UploadPetDisplayAreaComponent;
  let fixture: ComponentFixture<UploadPetDisplayAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadPetDisplayAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadPetDisplayAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
