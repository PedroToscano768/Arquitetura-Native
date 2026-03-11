import { Item } from '../Models/item'; 

class Service {
  private items: Item[] = [];

  getAllItems(): Item[] {
    return this.items;
  }

  addItem(nome: string): void {
    const formatoNome = nome.trim();

    if (formatoNome.length <= 2) {
      throw new Error("O nome deve ter mais de 2 caracteres");
    }

    const existe = this.items.some(
      (item) => item.nome.toLowerCase() === formatoNome.toLowerCase()
    );

    if (existe) {
      throw new Error("Já existe um item com esse nome");
    }

    const novoItem: Item = {
      id: Math.random().toString(36).substring(7),
      nome: formatoNome
    };

    this.items.push(novoItem);
  }
}

export const ItemService = new Service();
