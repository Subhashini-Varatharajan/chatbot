import { Component,Input } from '@angular/core';
import { NavServiceService } from '../service/nav-service.service';


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {

  constructor(private CsData: NavServiceService) {}

  ngOnInit(): void {
    // const val = document.querySelector('input[name="rate"]:checked').value;
  }
  SearchData = '';
  @Input() pathHead :any;
  tenants = this.CsData.tenants;
  Dsply = '';
  onChange(val:any){

    this.Dsply = val.target.value;
  }
}
