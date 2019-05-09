import { Component } from '@angular/core';
import { ExcelExporterService } from 'erpsaascmp';

const exampleFileName = 'Clients';

@Component({
  selector: 'shw-excel-exporter',
  templateUrl: './excel-exporter.component.html',
  styleUrls: ['./excel-exporter.component.scss']
})
export class ExcelExporterComponent {
  contractCode =
`exportAsExcelFile(
  collection: any[],
  excelFileName: string,
  sheetName?: string,
  includeTimestamp = false
)`;

  collectionCode =
`collection: any[] = [
  { company: 'Tagchat', email: 'pbrodeau0@wiley.com',
    city: 'Zouparria do Monte', plan: 'Pro' },
  { company: 'Twinder', email: 'zheinsius1@archive.org',
    city: 'Moravský Krumlov', plan: 'Emprendedor' },
  { company: 'Meedoo', email: 'dmacduffie2@netlog.com',
    city: 'Sūrak', plan: 'Emprendedor' },
  { company: 'Thoughtbeat', email: 'daseef3@xing.com',
    city: 'Duiwelskloof', plan: 'Negocios' }
];`;

  collection: any[] = [
    { company: 'Tagchat', email: 'pbrodeau0@wiley.com',
      city: 'Zouparria do Monte', plan: 'Pro' },
    { company: 'Twinder', email: 'zheinsius1@archive.org',
      city: 'Moravský Krumlov', plan: 'Emprendedor' },
    { company: 'Meedoo', email: 'dmacduffie2@netlog.com',
      city: 'Sūrak', plan: 'Emprendedor' },
    { company: 'Thoughtbeat', email: 'daseef3@xing.com',
      city: 'Duiwelskloof', plan: 'Negocios' }
  ];

  constructor(private excelExporterService: ExcelExporterService) { }

  basicExport() {
    this.excelExporterService.exportAsExcelFile(this.collection, exampleFileName);
  }

  exportWithSheetName() {
    this.excelExporterService.exportAsExcelFile(this.collection, exampleFileName, 'Ejemplo');
  }

  exportWithTimestamp() {
    this.excelExporterService.exportAsExcelFile(this.collection, exampleFileName, null, true);
  }
}
