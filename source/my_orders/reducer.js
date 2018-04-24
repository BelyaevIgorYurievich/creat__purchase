
const initialState = {
  orders: [
    {
        id:'1',
        name:'Заказ рыбы',
        dateCreate: '20.10.2018',
        userName: 'Иван Петров',
        dateExecution: '22.10.2018',
        label: 'Скрочно' 
      },{
        id:'12',
        name:'Заказ рыбы',
        dateCreate: '20.10.2018',
        userName: 'Иван Петров',
        dateExecution: '22.10.2018',
        label: 'Скрочно' 
    }
  ]
};

export default function table(state = initialState, action) {
  switch (action.type) {

    default:
      return state;
  }
}
