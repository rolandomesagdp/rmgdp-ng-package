import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolandoLibraryComponent } from './rolando-library.component';

describe('RolandoLibraryComponent', () => {
  let component: RolandoLibraryComponent;
  let fixture: ComponentFixture<RolandoLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RolandoLibraryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RolandoLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
