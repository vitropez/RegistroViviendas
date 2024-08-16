class Edificio {
  calle;
  numero;
  codigoPostal;

  constructor(calle, numero, codigoPostal) {
    this.calle = calle;
    this.numero = numero;
    this.codigoPostal = codigoPostal;
  }
  //esta variable almacena las instancias de la clase en un array
  static misEdificios = [];
  //esta variable tiene los nombres de las instancias de la clase
  static misCasas = ["casaA", "casaB", "casaC", "CasaD", "casaE", "casaF"];
  //esta variable es donde se guardan las plantas de las casas
  static edificioViviendas = [];
  //esta variable guarda las plantas a las casas
  static nuevaPlanta = 0;
  //esta variable guarda  los pisos de las plantas
  static nuevoPiso = 0;

  static crearCasas() {
    let index = 0;
    let calle = prompt("introduce el nombre de la calle");
    let numero = prompt("introduce el numero de la calle");
    let codigoPostal = prompt("introduce el codigo postal");
    this.misCasas[index] = new Edificio(calle, numero, codigoPostal);
    let $resultadoEjercicio = document.getElementById("resultado");
    $resultadoEjercicio.innerHTML += `construida nueva casa en calle: ${this.misCasas[index].calle}, nº:${this.misCasas[index].numero} , CP: ${this.misCasas[index].codigoPostal} <br\>`;
    this.misEdificios.push(this.misCasas[index]);

    index++;
  }
  //esta variable la utilizo para mostrar en pantalla la eleccion de las casas que se han creado en los enunciados del prompt
  static misCasa = ["casaA", "casaB", "casaC", "casaD", "casaE", "casaF"];

  static imprimeCalle() {
    let mostrarWeb = miCalle();
    let datosEdificio = prompt(
      `intoduce el nombre de la casa para conocer su calle:${mostrarWeb}`
    );
    let indexCasa = this.misCasa.indexOf(datosEdificio);
    let conversor = indexCasa;

    let $datosCasa = document.getElementById("datos");
    $datosCasa.innerHTML = `La calle de la ${this.misCasa[conversor]} es: ${this.misEdificios[conversor].calle}.`;
  }
  static imprimeNumero() {
    let mostrarWeb = miCalle();
    let datosEdificio = prompt(
      `intoduce el numero de la casa para conocer su numero:${mostrarWeb}`
    );
    let indexCasa = this.misCasa.indexOf(datosEdificio);
    let conversor = indexCasa;
    let $datosCasa = document.getElementById("datos");
    $datosCasa.innerHTML = `El numero de la ${this.misCasa[conversor]} es: ${this.misEdificios[conversor].numero}.`;
  }

  static imprimeCodigoPostal() {
    let mostrarWeb = miCalle();
    let datosEdificio = prompt(
      `intoduce el numero de la casa para conocer su codigo postal: ${mostrarWeb}`
    );
    let indexCasa = this.misCasa.indexOf(datosEdificio);
    let conversor = indexCasa;
    let $datosCasa = document.getElementById("datos");
    $datosCasa.innerHTML = `El codigo postal de la ${this.misCasa[conversor]} es: ${this.misEdificios[conversor].codigoPostal}.`;
  }
  static modificar() {
    let eleccion = prompt(
      "elige que deseas modificar calle:[c],numero:[n],codigo postal:[p]"
    );
    switch (eleccion) {
      case "c":
        let nuevaCalle = prompt("introduce el nuevo nombre");
        Edificio.modificarCalle(nuevaCalle);
        break;
      case "n":
        let nuevoNumero = prompt("introduce el nuevo numero");
        Edificio.modificarNumero(nuevoNumero);
        break;
      case "p":
        let nuevoCP = prompt("introduce el nuevo codigo postal");
        Edificio.modificarCodigoPostal(nuevoCP);
    }
  }

  static modificarCalle(calle) {
    let mostrarWeb = miCalle();
    let datosEdificio = prompt(
      `intoduce el nombre de la casa que quieres modificar:${mostrarWeb}`
    );
    let indexCasa = this.misCasa.indexOf(datosEdificio);
    let conversor = indexCasa;

    this.misEdificios[conversor].calle = calle;
    let $datosCasa = document.getElementById("datos");
    $datosCasa.innerHTML = `La nueva calle de la ${this.misCasa[conversor]} es: ${this.misEdificios[conversor].calle}.`;
  }

  static modificarNumero(numero) {
    let mostrarWeb = miCalle();
    let datosEdificio = prompt(
      `intoduce el nombre de la casa que quieres modificar:${mostrarWeb}`
    );
    let indexCasa = this.misCasa.indexOf(datosEdificio);
    let conversor = indexCasa;
    this.misEdificios[conversor].numero = numero;
    let $datosCasa = document.getElementById("datos");
    $datosCasa.innerHTML = `El nuevo numero de la ${this.misCasa[conversor]} es: ${this.misEdificios[conversor].numero}.`;
  }

  static modificarCodigoPostal(codigo) {
    let mostrarWeb = miCalle();
    let datosEdificio = prompt(
      `intoduce el numero de la casa que quieres modificar:${mostrarWeb}`
    );
    let indexCasa = this.misCasa.indexOf(datosEdificio);
    let conversor = indexCasa;
    this.misEdificios[conversor].codigoPostal = codigo;
    let $datosCasa = document.getElementById("datos");
    $datosCasa.innerHTML = `El nuevo codigo postal de la ${this.misCasa[conversor]} es: ${this.misEdificios[conversor].codigoPostal}.`;
  }
  //las plantas empiezan en la planta 0 como si fuera un bajo,(si elegimos dos plantas se crea la planta 0 y la planta 1)
  static agregarPlantasYPuertas(plantasA, puertasA) {
    let mostrarWeb = miCalle();
    this.nuevaPlanta;
    this.nuevaPlanta += plantasA;
    this.nuevoPiso += puertasA;

    let datosEdificio = prompt(
      `intoduce el numero de la casa que quieres modificar:${mostrarWeb}`
    );
    let indexCasa = this.misCasa.indexOf(datosEdificio);
    let conversor = indexCasa;

    if (this.misEdificios[conversor].edificioViviendas != null) {
      for (let i = this.nuevaPlanta - plantasA; i < this.nuevaPlanta; i++) {
        let nuevosPisos = [];
        for (let j = this.nuevoPiso - puertasA; j < this.nuevoPiso; j++) {
          nuevosPisos.push("");
        }

        this.misEdificios[conversor].edificioViviendas.push(nuevosPisos);
      }
    } else {
      this.misEdificios[conversor].edificioViviendas = new Array(plantasA);

      for (let i = 0; i < plantasA; i++) {
        this.misEdificios[conversor].edificioViviendas[i] = new Array(puertasA);
        for (let j = 0; j < puertasA; j++) {
          this.misEdificios[conversor].edificioViviendas[i][j] = "";
        }
      }
    }
  }

  static agregarPropietario(nombre, planta, puerta) {
    let mostrarWeb = miCalle();
    let datosEdificio = prompt(
      `intoduce el nombre de la casa que quieres modificar: ${mostrarWeb}`
    );
    let indexCasa = this.misCasa.indexOf(datosEdificio);
    let conversor = indexCasa;
    this.misEdificios[conversor].edificioViviendas[planta][puerta] = nombre;
    let $datosCasa = document.getElementById("datos");
    $datosCasa.innerHTML = `${nombre} es ahora el propietario de la puerta ${puerta} de la planta ${planta}.`;
  }

  static propietarios() {
    let nombre = prompt(`intoduce el nombre del propietario`);
    let planta = prompt("introduce la planta del piso");
    let puerta = prompt("introduce el numero de puerta del nuevo propietario");
    this.agregarPropietario(nombre, planta, puerta);
  }

  static imprimePlantas() {
    let mostrarWeb = miCalle();
    let $datosCasa = document.getElementById("datos");
    $datosCasa.innerHTML = "";
    let datosEdificio = prompt(
      `intoduce el nombre de la casa que quieres modificar:${mostrarWeb}`
    );
    let indexCasa = this.misCasa.indexOf(datosEdificio);
    let conversor = indexCasa;

    for (
      let i = 0;
      i < this.misEdificios[conversor].edificioViviendas.length;
      i++
    ) {
      for (
        let j = 0;
        j < this.misEdificios[conversor].edificioViviendas[i].length;
        j++
      ) {
        let $elementoDatos = document.createElement("p");
        $elementoDatos.innerHTML = `Propietario del piso ${j} de la planta ${i}:${this.misEdificios[conversor].edificioViviendas[i][j]}`;

        $datosCasa.appendChild($elementoDatos);
      }
    }
  }

  static añadirPlantas() {
    let construir = prompt("deseas agregar plantas a tu casa?(s/n)");
    if (construir === "s") {
      let plantas = parseInt(prompt("introduce el numero de plantas"));
      let puertas = parseInt(
        prompt("introduce el numero de puertas por planta")
      );
      this.agregarPlantasYPuertas(plantas, puertas);
    }
  }
}
//este metodo me sirve para que se muestren en el prompt solo las casas que se han creado
const miCalle = function () {
  let mostrarWeb = " ";
  for (let i = 0; i < Edificio.misEdificios.length; i++) {
    mostrarWeb += Edificio.misCasa[i] + ",";
  }
  return mostrarWeb;
};
