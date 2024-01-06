import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  tableData : any;
  constructor(public list : ListService) { }

  ngOnInit(): void {
    this.list.listing().subscribe((res: any) => {
      if(res.length){
        this.tableData = res;
      }
    })
  }

}
