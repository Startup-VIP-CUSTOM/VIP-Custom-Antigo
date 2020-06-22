import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EscolherlojaPage } from './escolherloja.page';

describe('EscolherlojaPage', () => {
  let component: EscolherlojaPage;
  let fixture: ComponentFixture<EscolherlojaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscolherlojaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EscolherlojaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
