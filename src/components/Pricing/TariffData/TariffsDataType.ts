type TariffsDataType = {
  id: number,
  mode: 'highlight'|'standard',
  title: string,
  price: number|'Custom',
  optionsMode: 'standard'|'extended',
  buttonMode: 'green'|'white',
}

export default TariffsDataType;
