import {EventEmitter, Injectable} from '@angular/core';
import {ClassReport} from '../../model/class-report';
import {TableItem} from '../../model/table-item';

@Injectable({
  providedIn: 'root'
})
export class ClassReportService {

  public selectedItemEmitter: EventEmitter<TableItem> = new EventEmitter<TableItem>();
  private reports: ClassReport[] = [
    {
      className: 'Algorithms',
      grade: ClassReportService.getRandomNumber(0, 10, 2),
      attendance: ClassReportService.getRandomNumber(0, 100, 2)
    },
    {
      className: 'Artificial Intelligence',
      grade: ClassReportService.getRandomNumber(0, 10, 2),
      attendance: ClassReportService.getRandomNumber(0, 100, 2)
    },
    {
      className: 'Calculus',
      grade: ClassReportService.getRandomNumber(0, 10, 2),
      attendance: ClassReportService.getRandomNumber(0, 100, 2)
    },
    {
      className: 'Computer Architecture',
      grade: ClassReportService.getRandomNumber(0, 10, 2),
      attendance: ClassReportService.getRandomNumber(0, 100, 2)
    },
    {
      className: 'Computer Science Theory',
      grade: ClassReportService.getRandomNumber(0, 10, 2),
      attendance: ClassReportService.getRandomNumber(0, 100, 2)
    },
    {
      className: 'Computer Theory',
      grade: ClassReportService.getRandomNumber(0, 10, 2),
      attendance: ClassReportService.getRandomNumber(0, 100, 2)
    },
    {
      className: 'Data Logic',
      grade: ClassReportService.getRandomNumber(0, 10, 2),
      attendance: ClassReportService.getRandomNumber(0, 100, 2)
    },
    {
      className: 'Data Management',
      grade: ClassReportService.getRandomNumber(0, 10, 2),
      attendance: ClassReportService.getRandomNumber(0, 100, 2)
    },
    {
      className: 'Design Physics',
      grade: ClassReportService.getRandomNumber(0, 10, 2),
      attendance: ClassReportService.getRandomNumber(0, 100, 2)
    },
    {
      className: 'Device Utilization',
      grade: ClassReportService.getRandomNumber(0, 10, 2),
      attendance: ClassReportService.getRandomNumber(0, 100, 2)
    },
    {
      className: 'Electronic Design',
      grade: ClassReportService.getRandomNumber(0, 10, 2),
      attendance: ClassReportService.getRandomNumber(0, 100, 2)
    },
    {
      className: 'Files and Databases',
      grade: ClassReportService.getRandomNumber(0, 10, 2),
      attendance: ClassReportService.getRandomNumber(0, 100, 2)
    },
    {
      className: 'Information Management',
      grade: ClassReportService.getRandomNumber(0, 10, 2),
      attendance: ClassReportService.getRandomNumber(0, 100, 2)
    },
    {
      className: 'Logic Design',
      grade: ClassReportService.getRandomNumber(0, 10, 2),
      attendance: ClassReportService.getRandomNumber(0, 100, 2)
    },
    {
      className: 'Machine Language',
      grade: ClassReportService.getRandomNumber(0, 10, 2),
      attendance: ClassReportService.getRandomNumber(0, 100, 2)
    },
    {
      className: 'Network Fundamentals',
      grade: ClassReportService.getRandomNumber(0, 10, 2),
      attendance: ClassReportService.getRandomNumber(0, 100, 2)
    },
    {
      className: 'Operating Systems',
      grade: ClassReportService.getRandomNumber(0, 10, 2),
      attendance: ClassReportService.getRandomNumber(0, 100, 2)
    }
  ];
  private selectedItem: TableItem;

  constructor() {
  }

  private static getRandomNumber(min = 0, max = 1, decimalPlaces = 0): number {
    const rand = Math.random() < 0.5
      ? ((1 - Math.random()) * (max - min) + min)
      : (Math.random() * (max - min) + min);
    const power = Math.pow(10, decimalPlaces);
    return Math.floor(rand * power) / power;
  }

  getReports(): ClassReport[] {
    return this.reports;
  }

  openDrawer(tableItem: TableItem): void {
    tableItem.selected = true;
    this.selectedItem = tableItem;
    this.selectedItemEmitter.emit(this.selectedItem);
  }

  closeDrawer(): void {
    this.selectedItem.selected = false;
    this.selectedItem = null;
    this.selectedItemEmitter.emit(this.selectedItem);
  }

  updateItem(item: ClassReport): void {
    this.selectedItem.item = item;
    this.selectedItemEmitter.emit(this.selectedItem);
  }

}
