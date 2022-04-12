import { Component, Input, OnInit } from '@angular/core';
import { DataSet } from './models/data-point';

@Component({
  selector: 'app-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.scss']
})
export class LineGraphComponent implements OnInit {

  svgViewBox: string = '0 0 100 100'

  private _dataSets: (DataSet & { path?: string })[] = []
  @Input() set dataSets(dataSets: (DataSet & { path?: string })[]) {
    this._dataSets = dataSets
    this.buildPaths()
  }
  get dataSets(): (DataSet & { path?: string })[] {
    return this._dataSets
  }

  constructor() { }

  ngOnInit(): void {

  }

  private buildPaths() {
    // Calculate mins/maxes
    let xPoints = this.dataSets.flatMap(x => x.data).map(x => x.x)
    let yPoints = this.dataSets.flatMap(x => x.data).map(x => x.y)
    let minY = Math.min(...yPoints)
    let maxY = Math.max(...yPoints)
    let minX = Math.min(...xPoints)
    let maxX = Math.max(...xPoints)

    // Set viewbox to match mins & maxes
    this.svgViewBox = `${minX} ${minY} ${maxX} ${maxY}`

    for(let dataSet of this.dataSets) {
      let pathParts = []
      for(let p of dataSet.data) {
        pathParts.push(`L${p.x} ${maxY - p.y}`)
      }
      dataSet.path = [
        // Move to bottom
      `M0 ${maxY}`,
      ...pathParts,
      // Line to bottom-right
      `L${maxX} ${maxY}`].join(' ') + ' Z'
    }
  }

}
