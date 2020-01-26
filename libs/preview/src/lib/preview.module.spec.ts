import { async, TestBed } from '@angular/core/testing';
import { PreviewModule } from './preview.module';

describe('PreviewModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PreviewModule]
    }).compilePreview();
  }));

  it('should create', () => {
    expect(PreviewModule).toBeDefined();
  });
});
