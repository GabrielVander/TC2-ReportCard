import {Component, OnInit} from '@angular/core';
import {ClassReportService} from '../../services/ClassReport/class-report.service';
import {TableItem} from '../../model/table-item';

@Component({
  selector: 'app-report-table',
  templateUrl: './report-table.component.html',
  styleUrls: ['./report-table.component.css'],
})
export class ReportTableComponent implements OnInit {

  public tableData: TableItem[];
  public disableEdit = false;

  constructor(public reportService: ClassReportService) {
    this.tableData = reportService.getReports().map(report => ({
      selected: false,
      item: {
        ...report,
        attendance: Math.round(((report.attendance * 100) + Number.EPSILON) * 100) / 100
      },
    }));
    this.reportService.drawerIsVisibleEmitter.subscribe(value => {
      return this.disableEdit = value;
    });
  }

  ngOnInit(): void {
  }

}