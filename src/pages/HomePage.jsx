// INCOME - доходы
//  EXPENSE - расходы

const OPERATION_TYPES = {
    INCOME: "income",
    EXPENSE: "expence"
};

const OPERATIONS = [
    {
        id: 1,
        category: "products",
        value: 3000,
        type: "expense",
        date: new Date()
    },
    {
        id: 2,
        category: "salary",
        value: 50315,
        type: "income",
        date: new Date()
    }
];

// Форматирование чисел
const formatNumber = (value) => {
    return Intl.NumberFormat('ru-Ru').format(parseInt(value));
}

// Функция форм. для денег

const formatMoney = (value) => {
    return `${formatNumber(value)} руб.`;
}

const HomePage = () => {
    
    return (
        <section>
            <div className="container">
                <div className="balance">
                    <h2>
                        {formatMoney(30000)}
                    </h2>
                </div>
                <div className="add_operations">
                    <div className="title">
                        Добавить операцию
                    </div>
                    <div className="add_operations-content">
                        {/* <div className="operations-inputs">
                           
                        </div> */}
                        <input 
                        type="text" 
                        className="operation" 
                        placeholder="30 000"/>
                        <select name="category" id="">
                            <option value="products">Продукты</option>
                        </select>
                        <button className="button add_operation">Добавить операцию</button>
                    </div>
                </div>
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
                            OPERATIONS.map((operation) => {
                                return (
                                    <div key={operation.id} className="operation">
                                        <div className="operation_info">
                                            <div className={`circle ${operation.type === OPERATION_TYPES.INCOME ? "income" : "expense"}`}>
                                                {
                                                    operation.type === OPERATION_TYPES.INCOME ?
                                                    <i className="fa-solid fa-money-bill"></i>
                                                    :
                                                    <i className="fa-solid fa-shop"></i>
                                                }
                                                
                                                
                                            </div>
                                            
                                            <p className="category">Категория: {operation.category}</p>
                                            <p className="total">{formatMoney(operation.value)}</p>
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