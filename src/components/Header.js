import React from 'react';
import PropTypes from 'prop-types';

const Header = props => (
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
        <div className="logo">
            <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Александра Гребенщикова</h1>
                <p>Профессиональное наращивание и ламинирование ресниц</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('certificates') }}>Сертификаты</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('portfolio') }}>Портфолио</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('pricing') }}>Услуги и цены</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('reviews') }}>Отзывы</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('contact') }}>Контакты</a></li>
            </ul>
        </nav>
    </header>
);

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
};

export default Header;
