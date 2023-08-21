import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendCodingComponent } from './backend-coding.component';

describe('BackendCodingComponent', () => {
  let component: BackendCodingComponent;
  let fixture: ComponentFixture<BackendCodingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackendCodingComponent]
    });
    fixture = TestBed.createComponent(BackendCodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
