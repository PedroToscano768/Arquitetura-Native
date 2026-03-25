import { useState } from 'react';
import { ItemService } from '../Services/ItemService';

export const ItemViewModel = () => {
  const [items, setItems] = useState(ItemService.getAllItems());
  const [nomeDigitado, setNomeDigitado] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  const handleAdicionarItem = () => {
    setMensagemErro(''); 
    try {
      ItemService.addItem(nomeDigitado);
      setItems([...ItemService.getAllItems()]); 
      setNomeDigitado('');
      return true;
    } catch (error: any) {
      setMensagemErro(error.message);
      return false;
    }
  };

  const handleRemoverItem = (id: string) => {
    ItemService.deleteItem(id);
    setItems([...ItemService.getAllItems()]);
  };

  return {
    items,
    nomeDigitado,
    setNomeDigitado,
    mensagemErro,
    handleAdicionarItem,
    handleRemoverItem,
    refreshItems: () => setItems([...ItemService.getAllItems()])
  };
};