import { Component } from '@angular/core';
import { DataSet } from './LineGraph/line-graph/models/data-point';
import { LineGrapData2, LineGraphData } from './LineGraph/linegraph.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularGraphs';


  lineGraphPoints: DataSet[]

  constructor() {
    let b = false
    setInterval(() => {
      if(b) {
        this.lineGraphPoints = LineGrapData2
      }
      else {
        this.lineGraphPoints = LineGraphData
      }
      b = !b
    }, 10000)
    this.lineGraphPoints = LineGraphData
  }



  private generateRandomDataSetWithColor(color: string, fill: boolean, pointCount: number): DataSet {
    let dataSet: DataSet = { color, fill, data: [] }
    const getRandomNumber = () => Math.floor(Math.random() * 10)
    let prevY = 0
    for(let i = 0; i < pointCount; i++) {
      let newY = prevY + getRandomNumber()
      dataSet.data.push({ x: i, y: newY })
      prevY = newY

    }
    return dataSet
  }
}
