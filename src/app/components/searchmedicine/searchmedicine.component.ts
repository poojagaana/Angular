import { Component, OnInit, Input} from '@angular/core';
import { FetchmedicineComponent } from '../fetchmedicine/fetchmedicine.component';

@Component({
  selector: 'app-searchmedicine',
  templateUrl: './searchmedicine.component.html',
  styleUrls: ['./searchmedicine.component.css']
})
export class SearchmedicineComponent implements OnInit {
  @Input() name;
  obj
  showMedicine = false
  showError = false
  child

  constructor() { }

  ngOnInit() {
    this.child = new FetchmedicineComponent();
    this.obj = null;
  }
  search(){
    this.obj = this.child.fetch(this.name);
    if(this.obj != null)
    {
      this.showError = false;
      this.showMedicine = true;
    }
    else{
      this.showError =true;
      this.showMedicine = false;
    }
  }
}
