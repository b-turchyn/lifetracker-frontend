import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChartData } from 'chart.js';

import { BucketService, BucketData } from '../bucket.service';

@Component({
  selector: 'app-buckets',
  templateUrl: './buckets.component.html',
  styleUrls: ['./buckets.component.scss']
})
export class BucketsComponent implements OnInit {
  form: FormGroup;
  bucketTypes: String[] = [];
  barChartData: any;
  barChartOptions = {
    plugins: {
      datalabels: {
        color: '#cd1076',
        formatter: (val: any, ctx: any) => {
          return `${Math.round(val.y * 100)}%`
        }
      }
    }
  }


  constructor(private service: BucketService, private fb: FormBuilder) {
    this.form = this.fb.group({
      bucket: [null, []],
      order: ['alphabetical', []],
      pivot: [3, []],
    })
  }

  ngOnInit(): void {
    this.service.getBucketTypes().subscribe((res: String[]) => {
      this.bucketTypes = res
    })
  }

  updateChart(): void {
    let bucket = this.form.get('bucket')?.value
    let pivot = this.form.get('pivot')?.value
    let order = this.form.get('order')?.value || 'alphabetical'
    
    this.service.getBucketData(bucket, pivot).subscribe((res: BucketData[]) => {
      this.barChartData = {
        datasets: [{
          label: 'Percentage Difference',
          backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
          ],
          data: res.map(a => {
            return {x: a.key, y: a.over.average / a.under.average - 1.0}
          }).filter(a => Math.abs(a.y) > 0.1)
          .sort((a, b) => {
            if (order === 'alphabetical') {
              return a.x < b.x ? -1 : 1
            } else {
              return b.y - a.y
            }
          }) 
        }]
      }
    })
  }
}
