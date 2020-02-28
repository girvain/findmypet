import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPetFormComponent } from './upload-pet-form.component';

describe('UploadPetFormComponent', () => {
  let component: UploadPetFormComponent;
  let fixture: ComponentFixture<UploadPetFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadPetFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadPetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
