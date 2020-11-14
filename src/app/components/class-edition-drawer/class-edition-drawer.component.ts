import {Component, OnInit} from '@angular/core';
import {ClassReportService} from '../../services/ClassReport/class-report.service';
import {ClassReport} from '../../model/class-report';
import {TableItem} from '../../model/table-item';

@Component({
  selector: 'app-class-edition-drawer',
  templateUrl: './class-edition-drawer.component.html',
  styleUrls: ['./class-edition-drawer.component.css'],
})
export class ClassEditionDrawerComponent implements OnInit {

  public item: ClassReport = null;

  constructor(public reportService: ClassReportService) {
    this.reportService.selectedItemEmitter.subscribe((value: TableItem) => {
      return this.item = value ? value.item : null;
    });
  }

  ngOnInit(): void {
  }

  updateClassName(value: string): void {
    this.reportService.updateItem({
      ...this.item,
      className: value,
    });
  }

  updateGrade(value: number): void {
    this.reportService.updateItem({
      ...this.item,
      grade: value,
    });
  }

  updateAttendance(value: number): void {
    this.reportService.updateItem({
      ...this.item,
      attendance: value,
    });
  }

}
