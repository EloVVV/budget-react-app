// Форматирование чисел
const formatNumber = (value) => {
    return Intl.NumberFormat('ru-Ru').format(parseInt(value));
}

export default formatNumber;