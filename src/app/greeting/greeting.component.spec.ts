import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GreetingComponent } from './greeting.component';

describe('GreetingComponent', () => {
  let component: GreetingComponent;
  let fixture: ComponentFixture<GreetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreetingComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(GreetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('sollte erstellt werden', () => {
    expect(component).toBeTruthy();
  });

  it('sollte "Hallo, Welt!" anzeigen wenn kein Name gesetzt ist', () => {
    const text = fixture.nativeElement.querySelector('.greeting').textContent;
    expect(text).toContain('Hallo, Welt!');
  });

  it('sollte den übergebenen Namen anzeigen', () => {
    component.name = 'Belal';
    fixture.detectChanges();
    const text = fixture.nativeElement.querySelector('.greeting').textContent;
    expect(text).toContain('Hallo, Belal!');
  });
});
