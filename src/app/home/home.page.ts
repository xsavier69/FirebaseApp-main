import { Component, OnInit } from '@angular/core';
import { Database, object, ref } from '@angular/fire/database';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
   // Declaración e inicialización de variables booleanas para representar el estado de diferentes partes de la casa
   valorSala: boolean = false;
   valorCocina: boolean = false;
   valorComedor: boolean = false;
   valorDormitorio1: boolean = false;
   valorDormitorio2: boolean = false;
   valorBano: boolean = false;
 
   // Constructor del componente HomePage que recibe el servicio de base de datos como parámetro
   constructor(private database: Database) {}
 
   // Método ngOnInit que se ejecuta al inicializar el componente
   ngOnInit() {
     // Suscripción a la ruta "/casa/sala" en la base de datos para obtener el valor booleano asociado a la sala
     const routeSala = ref(this.database, "/casa/sala");
     object(routeSala).subscribe(attributes => {
       this.valorSala = attributes.snapshot.val();
     });
 
     // Suscripción a la ruta "/casa/cocina" en la base de datos para obtener el valor booleano asociado a la cocina
     const routeCocina = ref(this.database, "/casa/cocina");
     object(routeCocina).subscribe(attributes => {
       this.valorCocina = attributes.snapshot.val();
     });
 
     // Suscripción a la ruta "/casa/comedor" en la base de datos para obtener el valor booleano asociado al comedor
     const routeComedor = ref(this.database, "/casa/comedor");
     object(routeComedor).subscribe(attributes => {
       this.valorComedor = attributes.snapshot.val();
     });
 
     // Suscripción a la ruta "/casa/dormitorio1" en la base de datos para obtener el valor booleano asociado al dormitorio 1
     const routeDormitorio1 = ref(this.database, "/casa/dormitorio1");
     object(routeDormitorio1).subscribe(attributes => {
       this.valorDormitorio1 = attributes.snapshot.val();
     });
 
     // Suscripción a la ruta "/casa/dormitorio2" en la base de datos para obtener el valor booleano asociado al dormitorio 2
     const routeDormitorio2 = ref(this.database, "/casa/dormitorio2");
     object(routeDormitorio2).subscribe(attributes => {
       this.valorDormitorio2 = attributes.snapshot.val();
     });
 
     // Suscripción a la ruta "/casa/bano" en la base de datos para obtener el valor booleano asociado al baño
     const routeBano = ref(this.database, "/casa/bano");
     object(routeBano).subscribe(attributes => {
       this.valorBano = attributes.snapshot.val();
     });
   }
 }