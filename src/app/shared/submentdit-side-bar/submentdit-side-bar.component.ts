import { Component, OnInit } from '@angular/core';
import {SubmentditService} from 'src/app/submentdit/submentdit.service';
import { SubmentditModel } from 'src/app/submentdit/submentdit-response';

@Component({
  selector: 'app-submentdit-side-bar',
  templateUrl: './submentdit-side-bar.component.html',
  styleUrls: ['./submentdit-side-bar.component.css']
})
export class SubmentditSideBarComponent implements OnInit {
  submentdits: Array<SubmentditModel>;
  displayViewAll: boolean;

  constructor(private submentditService: SubmentditService) {
    this.submentditService.getAllSubmentdits().subscribe(data => {
      if(data.length >= 4) {
        this.submentdits = data.splice(0,3);
        this.displayViewAll = true;
      } else {
        this.submentdits = data;
      }
    });
   }

  ngOnInit(): void {
  }

}
