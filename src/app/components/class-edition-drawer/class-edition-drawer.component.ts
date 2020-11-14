import {Component, OnInit} from '@angular/core';
import {ClassReportService} from '../../services/ClassReport/class-report.service';

@Component({
  selector: 'app-class-edition-drawer',
  templateUrl: './class-edition-drawer.component.html',
  styleUrls: ['./class-edition-drawer.component.css'],
})
export class ClassEditionDrawerComponent implements OnInit {

  public open = false;

  constructor(public reportService: ClassReportService) {
    this.reportService.drawerIsVisibleEmitter.subscribe(value => {
      return this.open = value;
    });
  }

  ngOnInit(): void {}

}
