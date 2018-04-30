import { v4 } from 'uuid';

export const orderData = [
    {
        title: 'Мясо, птицаб дичь',
        id: v4(),
        unit: null,
        levl:0,
        children: [
            {
                title: 'Баранина',
                id: v4(),
                unit: null,
                levl: 1,
                children: [
                    {
                        title: 'Баран целый',
                        id: v4(),
                        children: null,
                        levl: 2,
                        unit: 'шт'
                    },
                    {
                        title: 'Баранина гуляш',
                        id: v4(),
                        children: null,
                        levl: 2,
                        unit: 'кг'
                    }
                ]
            },
            {
                title: 'Говядина',
                id: v4(),
                unit: null,
                levl: 1,
                children: [
                    {
                        title: 'Вырезка',
                        id: v4(),
                        children: null,
                        levl: 2,
                        unit: 'кг'
                    },
                    {
                        title: 'Грудинка',
                        id: v4(),
                        children: null,
                        levl: 2,
                        unit: 'кг'
                    }
                ]
            },
            {
                title: 'Курица',
                id: v4(),
                unit: null,
                levl: 1,
                children: [
                    {
                        title: 'Курица целая',
                        id: v4(),
                        children: null,
                        levl: 2,
                        unit: 'кг'
                    },
                    {
                        title: 'Ножки',
                        id: v4(),
                        children: null,
                        levl: 2,
                        unit: 'кг'
                    }
                ]
            }
        ]
    },
    {
        title: 'Рыба и морепродукты',
        id: v4(),
        unit: null,
        levl:0,
        children: [
            {
                title: 'Икра',
                id: v4(),   
                unit: null,
                levl:1,
                children: [
                    {
                        title: 'Красная',
                        id: v4(),
                        children: null,
                        levl: 2,
                        unit: 'кг'
                    }
                ]
            },
            {
                title: 'Щука',
                id: v4(),   
                unit: null,
                levl:1,
                children:[
                    {
                        title: 'Тушка щуки',
                        id: v4(),   
                        unit: 'кг',
                        levl:2,
                        children:null
                    }
                ]
            }
        ]
    }
]