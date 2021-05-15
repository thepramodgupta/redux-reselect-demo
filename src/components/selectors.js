import { createSelector } from 'reselect';

let i
const selectCounter = (state, counterI) => {
    i=counterI;
    console.log('from selector')
    console.log(i);
    return (state.counter);
};


const selectCounterNumbers = createSelector(
    [selectCounter],
    counter => counter.counterNumber
);

export const SelectCounterSum = createSelector(
    [selectCounterNumbers],
    counterNumber => counterNumber.reduce(
        (accumulatedQuantity, number) =>accumulatedQuantity+number,
    i)
);