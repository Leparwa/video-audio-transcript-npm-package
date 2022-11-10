import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscriptRendererComponent } from './transcript-renderer.component';

describe('TranscriptRendererComponent', () => {
  let component: TranscriptRendererComponent;
  let fixture: ComponentFixture<TranscriptRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranscriptRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranscriptRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
