import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
  pure: false
})
export class UsuarioPipe implements PipeTransform {

  transform(items: any[], field: string): any {
    if (!items || !field) {
      return items;
    }

    return items.filter(usuario => usuario.nome.toLowerCase().indexOf(field.toLowerCase()) !== -1);
  }
}
