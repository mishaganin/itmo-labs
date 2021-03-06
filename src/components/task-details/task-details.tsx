import React from 'react';
import './task-details.scss';

interface IState {
    taskText?: string;
}

export default class TaskDetails extends React.Component {
    state = {
        taskText: `Лабораторная работа. uint1024_t
                    Задача
                    Реализовать пользовательский тип для целого беззнакового числа
                    фиксированной длины uint1024_t
                    Для вышеуказанного типа реализовать функции с следующими
                    сигнатурами:
                    1. uint1024_t from_uint(unsigned int x) - генерация из числа
                    2. uint1024_t add_op(uint1024_t x, uint1024_t y) - сложение
                    3. uint1024_t subtr_op(uint1024_t x, uint1024_t y) - вычетание
                    4. uint1024_t mult_op(uint1024_t x, uint1024_t y) - умножение
                    5. void printf_value(uint1024_t x) - вывод в стандартный поток
                    вывода
                    6. void scanf_value(uint1024_t* x) - чтение из стандартного потока
                    ввода
                    Примечание:
                    1. Переполнение - Undefined Behavior
                    2. При реализации думать об оптимальном использовании памяти
                    3. Реализовать программу демонстрирующую работоспособность
                    вышеуказанных функций`
    }
    autoReplacer = (str: string) => {
        return `${str.replaceAll('\n', `<br />`)}`;
    }
    render() {
        return (
            <div className="task">
                <h1 className="container__title task__title">Linear algebra</h1>
                <div className="task__text" dangerouslySetInnerHTML={{ __html: this.autoReplacer(this.state.taskText)}} />
            </div>
        )
    }
}
