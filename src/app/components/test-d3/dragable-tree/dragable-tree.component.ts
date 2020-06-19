import { Component, OnInit } from '@angular/core';
import {DragPosition, TreeNode} from '../../../models/models';
import {arrayToMatrix, getDummyData} from '../../../utills/generic';


@Component({
  selector: 'app-dragable-tree',
  templateUrl: './dragable-tree.component.html',
  styleUrls: ['./dragable-tree.component.css']
})
export class DragableTreeComponent implements OnInit {

  numbers: TreeNode[][] =  Array.from(Array(20).keys())
  .map(num => getDummyData(num + 1, 1000).map(value => {
    return new TreeNode(value, new DragPosition(0, 0));
  }));
  
  nodeStyle3;


  constructor() { }

  ngOnInit() {
  }



changeDrag(event: DragEvent) {
    this.nodeStyle3 = {
      left : `${event.x - 102}px`,
      top: `${event.y - 89}px`
    };
}

changeDragNode(event: DragEvent, node: TreeNode) {
  node.position.left = event.x - 102;
  node.position.top = event.y - 89;
  // this.nodeStyle3 = {
  //   left : `${event.x - 102}px`,
  //   top: `${event.y - 89}px`
  // };
}


}
