import { Component, Input, OnInit } from '@angular/core';

import { server } from '../../config'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {  Button, Card, CardBody, CardTitle,  CardText, Row, Col,  ListGroupItem,
  ListGroup, } from "reactstrap";
  
@Component({
  selector: 'app-listas-compras',
  templateUrl: './listas-compras.component.html',
  styleUrls: ['./listas-compras.component.css']
})
export class ListasComprasComponent implements OnInit {
  @Input() participantes: any = null;
  constructor() { }

  ngOnInit(): void {
  }

}
