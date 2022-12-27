import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountGovernanceComponent } from './account-governance.component';

describe('AccountGovernanceComponent', () => {
  let component: AccountGovernanceComponent;
  let fixture: ComponentFixture<AccountGovernanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountGovernanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountGovernanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
