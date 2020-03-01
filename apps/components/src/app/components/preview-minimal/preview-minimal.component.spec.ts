import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewMinimalComponent } from './preview-minimal.component';

describe('PreviewMinimalComponent', () => {
  let component: PreviewMinimalComponent;
  let fixture: ComponentFixture<PreviewMinimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewMinimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewMinimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
