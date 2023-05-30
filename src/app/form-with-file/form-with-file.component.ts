import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../models/product';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-form-with-file',
  templateUrl: './form-with-file.component.html',
  styleUrls: ['./form-with-file.component.scss']
})
export class FormWithFileComponent implements OnInit {

  public form:FormGroup;
  
  product: Product;  // Objeto para agrupar todos los datos recibidos por el formulario se encuentra en el models
  formDataFile:FormData; //Un tipo de dato que recibe solo String y una para guardar archivos
  name:String = ''; // dato del form
  cantidad:number = 0; // dato del form
  precio:number = 0; // dato del form

  constructor(private formData:FormBuilder, private service:ServiceService) { 
    // Se agrupa los datos del formulario y se los inicializa en vacio 
    this.form = this.formData.group({
      name:'',
      cantidad: '',
      precio: '',
      file: ''
    });
    
   }

   ngOnInit(): void {
   }

   // Metodo para enviar los datos al backend 
   setValue(){
    // se obtienen los datos de las etiquetas de la vista 
    this.name = this.form.get('name')?.value;
    this.cantidad = this.form.get('cantidad')?.value;
    this.precio = this.form.get('precio')?.value;
    // se declaran los valores en el objeto
    this.product = {
      name: this.name = this.form.get('name')?.value,
      amount: this.cantidad = this.form.get('cantidad')?.value,
      price: this.precio = this.form.get('precio')?.value,
    }
    // IMPORTANTE se conviente el objeto de tipo Product en un String usando JSON.stringify y se lo añade a al FormData con la
    // etiqueta ("data") ==> se busca con esas etiquetas
    this.formDataFile.append("data",JSON.stringify(this.product));
    // Se consume el endpoint y se registran los datos
    this.service.postProduct(this.formDataFile).subscribe();
   }

  // Metodo para agarrar al archivo
  onFileSelected(event:any) {
    // Se logra obtener los datos del archivo seleccionado con un evento  se agarran varias imagenes
    const file:File = event.target.files[0];
    // Se valida si la imagen existe 
    if (file) {
        this.formDataFile = new FormData();
    // Se añade el archivo con la etiqueta "file" 
        this.formDataFile.append("file", file);
    }
}

}
