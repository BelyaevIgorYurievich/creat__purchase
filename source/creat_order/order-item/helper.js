import { ordersTypes, ordersVariations } from './data/orderType';

export function getData(dataType, id) {
    
    switch(dataType) {
        case 'ordersTypes':
            return ordersTypes;
        case 'ordersVariations':
            return ordersVariations.filter(({parenId}) => id === parenId)
    }
}