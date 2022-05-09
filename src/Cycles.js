/*
  В функцию rangeSum() приходят два целых неотрицательных числа.
  Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно)
  и верните итоговый результат.
*/
export function rangeSum(start, end) {
    let sum = 0;

    for (let i = start + (start % 2); i <= end; i += 2) {
        sum += i;
    }
    return sum;
}

/*
  В функцию iterationCount() приходит неотрицательное число.
  Используя цикл while, выполняйте деление этого числа на два до тех пор, пока результат деления больше 0.1
  и верните количество потребовавшихся итераций (т.е. сколько раз пришлось выполнить деление).
*/
export function iterationCount(a) {
    let cnt = 0;
    while (a > 0.1) {
        cnt++;
        a /= 2;
    }
    return cnt;
}

/*
  В функцию symbolsReplace() приходит строка текста.
  Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания
  и верните итоговый результат.
*/
export function symbolsReplace(message) {
    if (message.length < 3) return message;

    let newMes = '';

    let symNum = 0;
    do {
        newMes = newMes + message.substr(symNum, 2) + '_';
        symNum += 3;
    } while (symNum + 3 < message.length);

    newMes = newMes + message.substring(symNum, message.length);

    return newMes;
}
