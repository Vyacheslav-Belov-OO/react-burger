import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../../services/actions/actions';
import {App} from '../app'

const NewsFeed = () => {
    // Вытаскиваем селектором нужные данные из хранилища
    const { feed, feedRequest, feedFailed } = useSelector(state => state.news);

    // Получаем метод dispatch
    const dispatch = useDispatch();
    
    useEffect(()=> {
        // Отправляем экшен-функцию
        dispatch(getData())
    }, [])
    
    // Используем условный рендеринг для разных состояний хранилища
    if (feedFailed) {
        return <p>Произошла ошибка при получении данных</p>
    } else if (feedRequest) {
        return <p>Загрузка...</p>
    } else {
        return <>{feed.map(post => <App key={post.id} {...post} />)}</>;
    }
} 