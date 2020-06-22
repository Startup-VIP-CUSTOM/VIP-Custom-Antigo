import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InclojaPage } from './incloja.page';

describe('InclojaPage', () => {
  let component: InclojaPage;
  let fixture: ComponentFixture<InclojaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InclojaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InclojaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
