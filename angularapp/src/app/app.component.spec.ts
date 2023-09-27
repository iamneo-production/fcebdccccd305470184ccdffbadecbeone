import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports : [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should set ageGroup to "Invalid age" if age is less than 0', () => {
    component.age = -1;
    component.checkAge();
    expect(component.ageGroup).toEqual('Invalid age');
  });
  
  it('should set ageGroup to "Foetus Infancy" if age is less than 1', () => {
    component.age = 0;
    component.checkAge();
    expect(component.ageGroup).toEqual('Foetus Infancy');
  });

  // Mine


  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize age to 0', () => {
    expect(component.age).toEqual(0);
  });

  it('should initialize ageGroup to an empty string', () => {
    expect(component.ageGroup).toEqual('');
  });

  it('should set ageGroup to "Invalid age" when age is less than 0', () => {
    component.age = -1;
    component.checkAge();
    expect(component.ageGroup).toEqual('Invalid age');
  });

  it('should set ageGroup to "Invalid age" when age is greater than 120', () => {
    component.age = 121;
    component.checkAge();
    expect(component.ageGroup).toEqual('Invalid age');
  });

  it('should set ageGroup to "Foetus Infancy" when age is less than 1', () => {
    component.age = 0;
    component.checkAge();
    expect(component.ageGroup).toEqual('Foetus Infancy');
  });

  it('should set ageGroup to "Toddler years" when age is between 1 and 2', () => {
    component.age = 1;
    component.checkAge();
    expect(component.ageGroup).toEqual('Toddler years');
  });

  it('should set ageGroup to "Childhood" when age is between 3 and 11', () => {
    component.age = 5;
    component.checkAge();
    expect(component.ageGroup).toEqual('Childhood');
  });

  it('should set ageGroup to "Teenage" when age is between 12 and 17', () => {
    component.age = 15;
    component.checkAge();
    expect(component.ageGroup).toEqual('Teenage');
  });

  it('should set ageGroup to "Adult" when age is between 18 and 64', () => {
    component.age = 30;
    component.checkAge();
    expect(component.ageGroup).toEqual('Adult');
  });

  it('should set ageGroup to "Senior citizen" when age is 65 or greater', () => {
    component.age = 70;
    component.checkAge();
    expect(component.ageGroup).toEqual('Senior citizen');
  });

});        