import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateComponent } from './certificate';

describe('Certificate', () => {
  let component: CertificateComponent;
  let fixture: ComponentFixture<CertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
