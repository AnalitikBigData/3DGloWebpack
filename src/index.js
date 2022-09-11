import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import priceCalc from './modules/priceCalc';
import container from './modules/container';
import tabs from './modules/tabs';
import slider from './modules/slider';
import sendForm from './modules/sendForm';

timer('1 october 2022');
menu();
modal();
priceCalc(100);
container();
tabs();
slider();
sendForm({ 
    formId1: 'form1', 
    someElem: [{
            type : 'block',
            id : 'total'
        }
    ]
}, 
    {formId2 : 'form2'},
    {formId3 : 'form3'}
);