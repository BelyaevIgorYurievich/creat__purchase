
const initialState = {
  applications: [
      {
          id:'22',
          name:'Заказ рыбы',
          dateCreate: '20.10.2018',
          userName: 'Иван Петров',
          status: 'Принято'
      },{
          id:'32',
          name:'Заказ овощей',
          dateCreate: '20.10.2018',
          userName: 'Иван Петров',
          status: 'Доставлено'
      }
    ]
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
  
      default:
        return state;
    }
  }
  