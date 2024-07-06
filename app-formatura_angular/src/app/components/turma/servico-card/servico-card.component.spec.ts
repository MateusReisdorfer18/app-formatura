import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoCardComponent } from './servico-card.component';

describe('ServicoCardComponent', () => {
  let component: ServicoCardComponent;
  let fixture: ComponentFixture<ServicoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServicoCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
