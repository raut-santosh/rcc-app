import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StreamReportPage } from './stream-report.page';

describe('StreamReportPage', () => {
  let component: StreamReportPage;
  let fixture: ComponentFixture<StreamReportPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StreamReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
