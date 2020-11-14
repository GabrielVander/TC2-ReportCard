import {Injectable} from '@angular/core';
import {ClassReport} from '../../model/class-report';

@Injectable({
  providedIn: 'root'
})
export class ClassReportService {

  private reports: ClassReport[] = [
    {
      className: 'Algorithms',
      grade: ClassReportService.getRandomNumber(0, 10, 2),
      attendance: Math.floor(ClassReportService.getRandomNumber(0, 1, 4))
    },
    {
      className: 'Artificial Intelligence',
      grade: ClassReportService.getRandomNumber(0, 10, 2),
      attendance: ClassReportService.getRandomNumber(0, 1, 4)
    },
    {
      className: 'Calculus',
      grade: ClassReportService.getRandomNumber(0, 10, 2),
      attendance: ClassReportService.getRandomNumber(0, 1, 4)
    },
    {
      className: 'Computer Architecture',
      grade: ClassReportService.getRandomNumber(0, 10, 2),
      attendance: ClassReportService.getRandomNumber(0, 1, 4)
    },
    {
      className: 'Computer Science Theory',
      grade: ClassReportService.getRandomNumber(0, 10, 2),
      attendance: ClassReportService.getRandomNumber(0, 1, 4)
    },
    {
      className: 'Computer Theory',
      grade: ClassReportService.getRandomNumber(0, 10, 2),
      attendance: ClassReportService.getRandomNumber(0, 1, 4)
    },
    {
      className: 'Data Logic',
      grade: ClassReportService.getRandomNumber(0, 10, 2),
      attendance: ClassReportService.getRandomNumber(0, 1, 4)
    },
    {
      className: 'Data Management',
      grade: ClassReportService.getRandomNumber(0, 10, 2),
      attendance: ClassReportService.getRandomNumber(0, 1, 4)
    },
    {
      className: 'Design Physics',
      grade: ClassReportService.getRandomNumber(0, 10, 2),
      attendance: ClassReportService.getRandomNumber(0, 1, 4)
    },
    {
      className: 'Device Utilization',
      grade: ClassReportService.getRandomNumber(0, 10, 2),
      attendance: ClassReportService.getRandomNumber(0, 1, 4)
    },
    {
      className: 'Electronic Design',
      grade: ClassReportService.getRandomNumber(0, 10, 2),
      attendance: ClassReportService.getRandomNumber(0, 1, 4)
    },
    {
      className: 'Files and Databases',
      grade: ClassReportService.getRandomNumber(0, 10, 2),
      attendance: ClassReportService.getRandomNumber(0, 1, 4)
    },
    {
      className: 'Information Management',
      grade: ClassReportService.getRandomNumber(0, 10, 2),
      attendance: ClassReportService.getRandomNumber(0, 1, 4)
    },
    {
      className: 'Logic Design',
      grade: ClassReportService.getRandomNumber(0, 10, 2),
      attendance: ClassReportService.getRandomNumber(0, 1, 4)
    },
    {
      className: 'Machine Language',
      grade: ClassReportService.getRandomNumber(0, 10, 2),
      attendance: ClassReportService.getRandomNumber(0, 1, 4)
    },
    {
      className: 'Network Fundamentals',
      grade: ClassReportService.getRandomNumber(0, 10, 2),
      attendance: ClassReportService.getRandomNumber(0, 1, 4)
    },
    {
      className: 'Operating Systems',
      grade: ClassReportService.getRandomNumber(0, 10, 2),
      attendance: ClassReportService.getRandomNumber(0, 1, 4)
    }
  ];

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
}
