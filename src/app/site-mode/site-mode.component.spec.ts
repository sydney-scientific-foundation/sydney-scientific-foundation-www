import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteModeComponent } from './site-mode.component';

describe('SiteModeComponent', () => {
  let component: SiteModeComponent;
  let fixture: ComponentFixture<SiteModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SiteModeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
