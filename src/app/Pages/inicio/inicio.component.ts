import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Formulario, FormularioRactive } from 'src/app/Interface';
import { DjangoAPIService } from 'src/app/Services/django-api.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  public resultados: string = "";
  public form:FormularioRactive;

  public name: string = "name";
  constructor(private django: DjangoAPIService, private fb: FormBuilder) {
    this.form = this.fb.group({
      name: new FormControl("user001", Validators.required)
    }) as FormularioRactive;
  }

  ngOnInit(): void {
    const mydata: Formulario = {name:"User-001"}
    this.form.patchValue(mydata);
  }

  Get() {
    this.django.MetodoGet().subscribe((data) => {
      this.resultados = data.data;
    })
  }

  Post() {

    if (this.form.valid) {
      let name = this.form.value.name;
      console.log(name);
      this.django.MetodoPost({ nombre: name }).subscribe((data) => {
        this.resultados = data.data;
      })
    } else {
      alert("El campo de texto esta vacio");
    }
  }

}
