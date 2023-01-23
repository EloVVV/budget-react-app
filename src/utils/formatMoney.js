// Функция форм. для денег

import formatNumber from "./formatNumber";

const formatMoney = (value, format = "руб.") => {
    return `${formatNumber(value)} ${format}`;
}

export default formatMoney;