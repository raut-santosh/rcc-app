import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataMasterPage } from './data-master.page';

describe('DataMasterPage', () => {
  let component: DataMasterPage;
  let fixture: ComponentFixture<DataMasterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DataMasterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
