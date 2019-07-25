import { Component, OnInit } from '@angular/core';

const medicines = [
  { name: 'dolo', quantity: '250mg'},
  { name: 'paracetamol', quantity: '500mg' },
  { name: 'penicilin', quantity: '200mg' },
  { name: 'crocin', quantity: '300mg' },
];


@Component({
  selector: 'app-fetchmedicine',
  templateUrl: './fetchmedicine.component.html',
  styleUrls: ['./fetchmedicine.component.css']
})
export class FetchmedicineComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    
    
  }
  fetch(name){
      for(let i in medicines){
        if(medicines[i].name == name)
        {
          return medicines[i];
        }
      }
    }
}
