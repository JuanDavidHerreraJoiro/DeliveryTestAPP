import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-delivery-date',
  templateUrl: './delivery-date.component.html',
  styleUrls: ['./delivery-date.component.css']
})
export class DeliveryDateComponent implements OnInit {

  public formdelivery: FormGroup = this.fb.group({
    fecha:[''],
    hora:['']
  });

  ngOnInit(): void {}

  constructor(private fb :FormBuilder){}

  Enviar():void{
    if (this.formdelivery.invalid) {
      console.log(this.formdelivery.value);
    }
  }
  
}
