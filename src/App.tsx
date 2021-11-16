import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { Category } from './types/Category';
import { categories } from './data/categories';
import { items } from './data/items'
import {getCurrentMonth} from './helpers/dataFilter'
import {filterListByMonth} from './helpers/dataFilter'
import {TableArea} from './components/TableArea'
import { InfoArea } from './components/InfoArea'
const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

const handleMonthChange = (newMonth: string) => {
  setCurrentMonth(newMonth);
}

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Finanças Pessoais</C.HeaderText>
      </C.Header>
      <C.Body>
      <InfoArea 
      currentMonth={currentMonth}
      onMonthChange={handleMonthChange} />

      

      {/* Area de inserção */}



      {/* Area de itens */}
      <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  );
}

export default App; 