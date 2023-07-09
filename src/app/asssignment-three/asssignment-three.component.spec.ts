import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsssignmentThreeComponent } from './asssignment-three.component';

describe('AsssignmentThreeComponent', () => {
  let component: AsssignmentThreeComponent;
  let fixture: ComponentFixture<AsssignmentThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsssignmentThreeComponent]
    });
    fixture = TestBed.createComponent(AsssignmentThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
