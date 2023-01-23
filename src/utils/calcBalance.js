import { OPERATION_TYPES } from "../types/operations";

const calcBalance = (data) => {
    return data.reduce((prev, current) => {
        if (current.type === OPERATION_TYPES.EXPENSE) {
            return prev -= current.value;
        }

        return prev += current.value;
    }, 0);
}

export default calcBalance;