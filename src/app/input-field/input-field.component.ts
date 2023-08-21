import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ServiceService } from '../service.service';
import  countries from '../../assets/countries.json';


@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']

})
export class InputFieldComponent implements OnInit  {
  toppings = new FormControl('');

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  countries: any[] = countries;
  constructor(private formbuilder:FormBuilder,private header:ServiceService) {

  }
  example:FormGroup=this.formbuilder.group({
    phone:['',[Validators.minLength(10)]],
    country:['',Validators.required]
  })
  ngOnInit(): void {
    // console.log(countries,'countries')
    this.header.setTitle('Input-field')
  }
  numValidate(e: KeyboardEvent) {
    const input = e.key;
    const check = /^[0-9]$/;

    if (!check.test(input)) {
      e.preventDefault();
    }
  }
  check_checkbox(_data:any) {
    console.log(_data,'check')
  }
  decimalValidate(e: KeyboardEvent) {
    const input = e.key;
    const check = /^[0-9]*\.?[0-9]*$/;

    if (!check.test(input)) {
      e.preventDefault();
    }
  }

  seprateValidate(e: KeyboardEvent) {
    const input = e.key;
    const check = /^[0-9]$/;

    if (!check.test(input)) {
      e.preventDefault();
    }
  }


 country_details:any
  country_select(){
    this.country_details=this.example.value.country
    // console.log(this.country_details);

  }
}
