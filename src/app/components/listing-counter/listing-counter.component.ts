import { GenericService } from './../../core/services/generic.service'
import { Component, OnInit } from '@angular/core'
import { TreeTableModule } from 'primeng/treetable'
import { TreeNode } from 'primeng/api'

@Component({
  selector: 'app-listing-counter',
  templateUrl: './listing-counter.component.html',
  styleUrls: ['./listing-counter.component.scss'],
})
export class ListingCounterComponent implements OnInit {
 
  files2!: TreeNode[]
  cols!: any[]
  result: any = []

  body: any
  constructor(private genericService: GenericService) {}

  ngOnInit(): void {
    this.genericService.getCounter().subscribe((result) => {
      this.result = result
      let output: any = []
      this.result.forEach((element, key) => {
        !element.ParentId
          ? output.push({
              data: { Id: element['Id'], Name: element.Name },
              children: this.getChildren(element['Id'], this.result),
            }) && this.result.splice(key, 1)
          : null
      })

      this.body = { data: output }
      this.files2 = this.body.data
      this.body.data.forEach((element) => {
        !element['children'].length ? delete element['children'] : null
      })
    })
  }

  getChildren(id: number, data: any): any {
    let children: any = []

    this.result.forEach((element, key) => {
      if (element['ParentId'] === id) {
        let kids = this.getChildren(element['Id'], data)
        !kids.length
          ? children.push({
              data: { Id: element.Id, Name: element.Name },
            }) && data.splice(key, 1)
          : children.push({
              data: { Id: element.Id, Name: element.Name },
              children: kids,
            }) && data.splice(key, 1)
      }
    })

    return children
  }
}
