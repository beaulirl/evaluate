import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GeneralEvaluateComponent from './App';

const DATA = [
		   {title: "Качество работы", description: "Аккуратность, внимательность, качество и приемлемость выполняемой работы"},
           {title: "Продуктивность", description: "Объём и эффективность выполняемой работы в установленный период рабочего времени"},
           {title: "Самостоятельность", description: "Способность выполнять работу с минимальным контролем со стороны руководителя, стремление к изучению смежных областей системы и работы других групп"},
           {title: "Работа в команде", description: "Взаимодействие с другими сотрудниками, конфликтность, лояльность"},
           {title: "Дисциплина", description: "Стремление закончить работу в срок, наличие/отсутствие взысканий и т.п."},
           {title: "Надёжность / организованность", description: "Умение не подводить коллег, способность распределять время и расставлять приоритеты"}
    ]

ReactDOM.render(<GeneralEvaluateComponent evaluateData={DATA} />, document.getElementById('root'));

