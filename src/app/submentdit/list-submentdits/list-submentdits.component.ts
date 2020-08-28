import { Component, OnInit } from '@angular/core';
import { SubmentditModel } from '../submentdit-response';
import { SubmentditService } from '../submentdit.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-list-submentdits',
  templateUrl: './list-submentdits.component.html',
  styleUrls: ['./list-submentdits.component.css']
})
export class ListSubmentditsComponent implements OnInit {

  submentdits: Array<SubmentditModel>;
  constructor(private submentditService: SubmentditService) { }

  ngOnInit() {
    this.submentditService.getAllSubmentdits().subscribe(data => {
      this.submentdits = data;
    }, error => {
      throwError(error);
    })
  }
}