import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BucketsComponent } from './buckets/buckets.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgChartsModule, NgChartsConfiguration } from 'ng2-charts';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@NgModule({
  declarations: [
    AppComponent,
    BucketsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    NgChartsModule.forRoot({plugins: [ChartDataLabels]} as NgChartsConfiguration),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
