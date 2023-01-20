const HomePage = () => {
    
    return (
        <section>
            <div className="container">
                <div className="balance">
                    <h2>
                        30 000 руб.
                    </h2>
                </div>
                <div className="add_operations">
                    <div className="title">
                        Добавить операцию
                    </div>
                    <div className="add_operations-content">
                        <div className="operations-inputs">
                            <input 
                            type="number" 
                            className="operation" 
                            placeholder="30 0000"/>
                            <select name="category" id="">
                                <option value="products">Продукты</option>
                            </select>
                        </div>
                        <button className="button add_operation">Добавить операцию</button>
                    </div>
                </div>
                <div className="operations">
                    <h2 className="operation_title">
                        Операции
                    </h2>
                    <div className="operations-filte">
                        <p>Все операции</p>
                        <p>Все доходы</p>
                        <p>Все расходы</p>
                    </div>
                    <div className="operations-box">
                        <div className="operation">
                            <div className="operation_info">
                                <h4 className="total">Сумма: 12412</h4>
                                <p className="category">Категория: Название</p>
                            </div>
                            <div className="operation_actions">
                                <button className="button delete_button">Удалить</button>
                            </div>
                        </div>
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