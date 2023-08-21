import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendCodingComponent } from './frontend-coding.component';

describe('FrontendCodingComponent', () => {
  let component: FrontendCodingComponent;
  let fixture: ComponentFixture<FrontendCodingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrontendCodingComponent]
    });
    fixture = TestBed.createComponent(FrontendCodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
