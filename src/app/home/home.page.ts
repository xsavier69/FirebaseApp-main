import { Component, OnInit } from '@angular/core';
import { Database, object, ref } from '@angular/fire/database';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  valorSala: boolean = false;
  valorCocina: boolean = false;
  valorComedor: boolean = false;
  valorDormitorio1: boolean = false;
  valorDormitorio2: boolean = false;
  valorBano: boolean = false;

  constructor(private database: Database) {}

  ngOnInit() {
    const routeSala = ref(this.database, "/casa/sala");
    object(routeSala).subscribe(attributes => {
      this.valorSala = attributes.snapshot.val();
    });

    const routeCocina = ref(this.database, "/casa/cocina");
    object(routeCocina).subscribe(attributes => {
      this.valorCocina = attributes.snapshot.val();
    });

    const routeComedor = ref(this.database, "/casa/comedor");
    object(routeComedor).subscribe(attributes => {
      this.valorComedor = attributes.snapshot.val();
    });

    const routeDormitorio1 = ref(this.database, "/casa/dormitorio1");
    object(routeDormitorio1).subscribe(attributes => {
      this.valorDormitorio1 = attributes.snapshot.val();
    });

    const routeDormitorio2 = ref(this.database, "/casa/dormitorio2");
    object(routeDormitorio2).subscribe(attributes => {
      this.valorDormitorio2 = attributes.snapshot.val();
    });

    const routeBano = ref(this.database, "/casa/bano");
    object(routeBano).subscribe(attributes => {
      this.valorBano = attributes.snapshot.val();
    });
  }
}