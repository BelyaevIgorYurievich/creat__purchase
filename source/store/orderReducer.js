
const initialState = {
  orders: [
    {
        id:'1',
        name:'Заказ рыбы',
        dateCreate: '20.10.2018',
        userName: 'Иван Петров',
        status: 'на соглосовании'
      },{
        id:'12',
        name:'Заказ рыбы',
        dateCreate: '20.10.2018',
        userName: 'Иван Петров',
        status: 'В работе'
    }
  ]
};

export default function (state = initialState, action) {
  switch (action.type) {

    default:
      return state;
  }
}
