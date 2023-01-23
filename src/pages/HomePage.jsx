import { formatMoney, calcBalance, getItemType } from "../utils";
import { OPERATION_TYPES } from "../types/operations";
import { useEffect, useState } from "react";
import { filterExpense, filterIncome } from "../utils/filter";
import {CATEGORIES} from "../data/categories";

const initialItems = [
    {
        id: 1,
        category: "products",
        value: 3000,
        type: OPERATION_TYPES.EXPENSE,
        date: new Date()
    },
    {
        id: 2,
        category: "salary",
        value: 50315,
        type: OPERATION_TYPES.INCOME,
        date: new Date()
    }
];

const initialBalanceState = 0;

const HomePage = () => {

    const [balance, setBalance] = useState(initialBalanceState);

    const [items, setItems] = useState(initialItems);

    const [formBalance, setFormBalance] = useState(0);

    const [category, setCategory] = useState('none');

    useEffect(() => {
        setBalance(calcBalance(items));
    }, [items]);
    
    const onChangeCategoryHandle = (e) => setCategory(e.target.value);

    const onChangeBalanceHandle = (event) => {
        setFormBalance((prevState) => {
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
                value: formBalance,
                type: getItemType(category),
                date: new Date()
            });

            return prevState
        });
        setFormBalance(0);
    }

   

    const onClickAllFilterHandle = () => {
        setItems(initialItems);
    }

    const onClickIncomeFilterHandle = () => {
        setItems(filterIncome(initialItems));
    }

    const onClickExpenseFilterHandle = () => {
        setItems(filterExpense(initialItems));
    }


    
    return (
        <section>
            <div className="container">
                <div className="balance">
                    <h2>
                        {formatMoney(balance)}
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
                        value={formBalance}
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
                        <button onClick={onClickAllFilterHandle} className="button sm">Все операции</button>
                        <button onClick={onClickIncomeFilterHandle} className="button sm green">Все доходы</button>
                        <button onClick={onClickExpenseFilterHandle} className="button sm red">Все расходы</button>
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