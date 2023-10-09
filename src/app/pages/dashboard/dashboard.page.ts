import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  @ViewChild('lineChartCanvas') lineChartCanvas!: ElementRef;
  data: any = [];
  chart!: Chart;

  constructor(private apiService : ApiService) { }

  ngOnInit() {
    this.createChart1();
    this.createChart2();
  }

  createChart1() {
    const ctx = document.getElementById('chart1') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Label 1', 'Label 2', 'Label 3'],
        datasets: [
          {
            label: 'Chart 1 Data',
            data: [10, 20, 30],
          },
        ],
      },
    });
  }

  createChart2() {
    const ctx = document.getElementById('chart2') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Label A', 'Label B', 'Label C'],
        datasets: [
          {
            label: 'Chart 2 Data',
            data: [50, 30, 70],
          },
        ],
      },
    });
  }
}
