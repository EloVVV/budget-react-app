import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserPage = () => {
    const params = useParams();

    const [user, setUser] = useState({});

    // Извлекаем данные
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        .then((response) => response.json())
        .then((data) => setUser(data));
    }, []);

    return (
        <div>
            <p>Имя:</p>
            <h2>{user.name}</h2>
            <br></br>
            <p>Почта:</p>
            <h2>{user.email}</h2>
            <br></br>
            <p>Веб-сайт:</p>
            <h2>{user.website}</h2>
            <br></br>
            <p>Логин:</p>
            <h2>{user.username}</h2>
            <br></br>
            <p>Город:</p>
            <h2>{user?.address?.city}</h2>
        </div>
    );
}

export default UserPage;