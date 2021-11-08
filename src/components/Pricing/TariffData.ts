import TariffsDataType from "./TariffsDataType";

const Tariffs: TariffsDataType[] = [
  {
    id: 1,
    mode: 'standard',
    title: 'For Starter',
    price: 1499,
    optionsMode: 'extended',
    buttonMode: 'white'
  },
  {
    id: 2,
    mode: 'highlight',
    title: 'For Teams',
    price: 2999,
    optionsMode: 'extended',
    buttonMode: 'green'
  },
  {
    id: 3,
    mode: 'standard',
    title: 'For Company',
    price: 'Custom',
    optionsMode: 'standard',
    buttonMode: 'white'
  },
]

export default Tariffs;
