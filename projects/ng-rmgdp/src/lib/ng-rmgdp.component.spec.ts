import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgRmgdpComponent } from './ng-rmgdp.component';

describe('NgRmgdpComponent', () => {
  let component: NgRmgdpComponent;
  let fixture: ComponentFixture<NgRmgdpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgRmgdpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgRmgdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
