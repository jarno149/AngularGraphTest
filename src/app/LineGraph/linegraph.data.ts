export const LineGraphData = [
  {
    color: '#157fa9',
    fill: true,
    data: [
      { x: 0, y: 0 },
      { x: 1, y: 3 },
      { x: 2, y: 6 },
      { x: 3, y: 7 },
      { x: 4, y: 10 },
      { x: 5, y: 12 },
      { x: 6, y: 15 },
      { x: 7, y: 12 },
      { x: 8, y: 18 },
      { x: 9, y: 25 },
      { x: 10, y: 27 },
      { x: 11, y: 30 },
      { x: 12, y: 36 },
      { x: 13, y: 38 },
      { x: 14, y: 43 },
      { x: 15, y: 50 },
    ]
  },
  {
    color: '#3b9dc4',
    fill: true,
    data: [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 3 },
      { x: 3, y: 3 },
      { x: 4, y: 5 },
      { x: 5, y: 6 },
      { x: 6, y: 11 },
      { x: 7, y: 9 },
      { x: 8, y: 13 },
      { x: 9, y: 20 },
      { x: 10, y: 21 },
      { x: 11, y: 24 },
      { x: 12, y: 25 },
      { x: 13, y: 31 },
      { x: 14, y: 35 },
      { x: 15, y: 44 },
    ]
  },
  {
    color: '#5bb9de',
    fill: true,
    data: [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
      { x: 3, y: 0 },
      { x: 4, y: 0 },
      { x: 5, y: 2 },
      { x: 6, y: 4 },
      { x: 7, y: 5 },
      { x: 8, y: 5 },
      { x: 9, y: 11 },
      { x: 10, y: 13 },
      { x: 11, y: 15 },
      { x: 12, y: 16 },
      { x: 13, y: 17 },
      { x: 14, y: 19 },
      { x: 15, y: 25 },
    ]
  },
  {
    color: '#e8d20c',
    fill: false,
    data: [
      { x: 0, y: 0 },
      { x: 1, y: 1 },
      { x: 2, y: 2 },
      { x: 3, y: 5 },
      { x: 4, y: 4 },
      { x: 5, y: 8 },
      { x: 6, y: 12 },
      { x: 7, y: 15 },
      { x: 8, y: 19 },
      { x: 9, y: 25 },
      { x: 10, y: 26 },
      { x: 11, y: 25 },
      { x: 12, y: 30 },
      { x: 13, y: 38 },
      { x: 14, y: 41 },
      { x: 15, y: 48 },
    ]
  }
]

export const LineGrapData2 = LineGraphData.map(d => {
  let copy = JSON.parse(JSON.stringify(d))
  copy.data = copy.data.map((x: any) => { x.y *= Math.random(); return x })
  return copy
})
