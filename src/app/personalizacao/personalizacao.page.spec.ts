import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonalizacaoPage } from './personalizacao.page';

describe('PersonalizacaoPage', () => {
  let component: PersonalizacaoPage;
  let fixture: ComponentFixture<PersonalizacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalizacaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalizacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
