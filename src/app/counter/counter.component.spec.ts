import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('sollte erstellt werden', () => {
    expect(component).toBeTruthy();
  });

  it('sollte mit count = 0 starten', () => {
    expect(component.count).toBe(0);
  });

  it('sollte hochzählen bei increment()', () => {
    component.increment();
    expect(component.count).toBe(1);
  });

  it('sollte nicht unter 0 fallen bei decrement()', () => {
    component.decrement();
    expect(component.count).toBe(0);
  });

  it('sollte auf 0 zurücksetzen bei reset()', () => {
    component.increment();
    component.increment();
    component.reset();
    expect(component.count).toBe(0);
  });
});
