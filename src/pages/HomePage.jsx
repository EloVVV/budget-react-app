import { formatMoney } from "../utils";
import { OPERATION_TYPES } from "../types/operations";
import { useState } from "react";

const INCOME_CATEGORIES = {
    salary: "Зарплата",
    transfer: "Перевод",
    cashback: "Кэшбек"
};

const EXPENSE_CATEGORIES = {
    products: "Продукты",
    car: "Автомобиль",
    services: "Коммунальные услуги"
};

const CATEGORIES = {...INCOME_CATEGORIES, ...EXPENSE_CATEGORIES};

const initialItems = [

];


const HomePage = () => {

    const [items, setItems] = useState(initialItems);

    const [balance, setBalance] = useState(0);

    const [category, setCategory] = useState('none');

    const onChangeCategoryHandle = (e) => setCategory(e.target.value);

    const onChangeBalanceHandle = (event) => {
        setBalance((prevState) => {
            const value = parseInt(event.target.value) || 0;
        
            if (!isNaN(value)) {
                prevState = value;
            }

            return prevState;
        });
    }

    const onAddItemHandle = () => {
        setItems((prevState) => {
            prevState = [...prevState];
        
            prevState.push({
                id: Date.now(),
                category: category,
                value: balance,
                type: getItemType(category),
                date: new Date()
            });

            return prevState
        });
        setBalance(0);
    }

    // Функция определения типа операции
    const getItemType = (category) => {
        if (Object.keys(INCOME_CATEGORIES).includes(category)) {
            return OPERATION_TYPES.INCOME;
        }

        return OPERATION_TYPES.EXPENSE;
    }
    
    return (
        <section>
            <div className="container">
                <div className="balance">
                    <h2>
                        {formatMoney(30000)}
                    </h2>
                </div>
                <form onSubmit={e => e.preventDefault(e)} className="add_operations">
                    <div className="title">
                        Добавить операцию
                    </div>
                    <div className="add_operations-content">
                        {/* <div className="operations-inputs">
                           
                        </div> */}
                        <input 
                        type="text" 
                        className="operation" 
                        placeholder="30 000"
                        value={balance}
                        onChange={(e) => onChangeBalanceHandle(e)}
                        />
                        <select onChange={(e) => onChangeCategoryHandle(e)} name="category" id="">
                            <option value="none">Не выбрано</option>

                            {
                                Object.keys(CATEGORIES).map((category) => {
                                    return (
                                        <option key={category} value={category}>
                                            {CATEGORIES[category]}
                                        </option>
                                    );
                                })
                            }
                        </select>
                        <button onClick={onAddItemHandle} className="button add_operation">Добавить операцию</button>
                    </div>
                </form>
                <div className="operations">
                    
                    <h2 className="operation_title">
                        Операции
                    </h2>
                    <div className="operations-filter">
                        <button className="button sm">Все операции</button>
                        <button className="button sm green">Все доходы</button>
                        <button className="button sm red">Все расходы</button>
                    </div>
                    <div className="operations-box">
                        {
                            items.map((item) => {
                                return (
                                    <div key={item.id} className="operation">
                                        <div className="operation_info">
                                            <div className={`circle ${item.type === OPERATION_TYPES.INCOME ? "income" : "expense"}`}>
                                                {
                                                    item.type === OPERATION_TYPES.INCOME ?
                                                    <i className="fa-solid fa-money-bill"></i>
                                                    :
                                                    <i className="fa-solid fa-shop"></i>
                                                }
                                                
                                                
                                            </div>
                                            
                                            <p className="category">Категория: {CATEGORIES[item.category]}</p>
                                            <p className="total">{formatMoney(item.value)}</p>
                                        </div>
                                        <div className="operation_actions">
                                            <button className="button delete_button">Удалить</button>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div className="pagination">
                        <button className="pagination_button">
                            1
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomePage;