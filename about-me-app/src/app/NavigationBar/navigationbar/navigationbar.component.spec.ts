import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationbarComponent } from './navigationbar.component';

describe('NavigationbarComponent', () => {
  let component: NavigationbarComponent;
  let fixture: ComponentFixture<NavigationbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationbarComponent]
    });
    fixture = TestBed.createComponent(NavigationbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
