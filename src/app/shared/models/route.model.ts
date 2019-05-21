export class Route {
    titulo: string;
    descripcion: string;
    creador: string;
    inicio: string[];
    final: string[];
    key: string;
    fecha: string;

    
    constructor(titulo: string, descripcion: string, creador: string, inicio: string[], final: string[], fecha: string){
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.creador = creador;
        this.inicio = inicio;
        this.final = final;
        this.fecha = fecha;
    }
}