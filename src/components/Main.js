import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { DiscussionEmbed } from 'disqus-react';
import SocialExpert from '../svg/social-expert';
import Discount from '../svg/discount';
import Resume from '../svg/resume';
import Superwoman from '../svg/superwoman';
import Thanks from '../svg/thanks';

const disqusConfig = {
    shortname: "sasha-lashmaker",
    config: { identifier: "reviews" },
}

const Main = props => {
    const data = useStaticQuery(graphql`
        query {
            allFile {
                nodes {
                    name
                    relativeDirectory
                    publicURL
                }
            }
        }
    `);
    const portfolio = data.allFile.nodes.filter(node => node.relativeDirectory === "portfolio");
    const certificates = data.allFile.nodes.filter(node => node.relativeDirectory === "certificates");
    const {
        onCloseArticle,
        timeout,
        article,
        articleTimeout,
        wrapperRef,
    } = props;

    let close = <div className="close" onClick={onCloseArticle}></div>

    return (
        <div ref={wrapperRef} id="main" style={timeout ? { display: 'flex' } : { display: 'none' }}>
            <article id="certificates" className={`${article === 'certificates' ? 'active' : ''} ${articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
                <h2 className="major">Мои сертификаты</h2>
                {
                    certificates.map(certificate => {
                        return <span key={certificate.name} className="image main"><img src={`${certificate.publicURL}`} alt={`${certificate.name}`} /></span>
                    })
                }
                <Resume />
                {close}
            </article>

            <article id="portfolio" className={`${article === 'portfolio' ? 'active' : ''} ${articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
                <h2 className="major">Мои работы</h2>
                {
                    portfolio.map(photo => {
                        return <span key={photo.name} className="image main"><img src={`${photo.publicURL}`} alt={`${photo.name}`} /></span>
                    })
                }
                <Superwoman />
                {close}
            </article>

            <article id="pricing" className={`${article === 'pricing' ? 'active' : ''} ${articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
                <h2 className="major">Список услуг<br/> и цены</h2>
                <ul>
                        <li>Неполный объем - 1600 рублей</li>
                        <br/>
                        <li>Классическое наращивание ресниц - 1800 рублей</li>
                        <br/>
                        <li>1,5 объем - 2000 рублей</li>
                        <br/>
                        <li>2D - 2200 рублей</li>
                        <br/>
                        <li>2/3 D - 2400 рублей</li>
                        <br/>
                        <li>3D - 2600 рублей </li>
                        <br/>
                        <li>Ламинирование ресниц - 2000 рублей</li>
                        <br/>
                        <li>Ламинирование+ботокс ресниц - 2300 рублей</li>
                        <br/>
                        <li>Декорирование ресниц - от 200 рублей</li>
                        <br/>
                        <li>Снятие чужого наращивания - 300 рублей</li>
                        <br/>
                        <li>Архитектура бровей - 1000 рублей</li>
                        <br/>
                        <li>Коррекция бровей - 300 рублей</li>
                        <br/>
                        <li>Окрашивание бровей - 400 рублей</li>
                </ul>
                <Discount />
                {close}
            </article>

            <article id="reviews" className={`${article === 'reviews' ? 'active' : ''} ${articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
                <h2 className="major">Ваши отзывы</h2>
                <DiscussionEmbed {...disqusConfig} />
                <Thanks />
                {close}
            </article>

            <article id="contact" className={`${article === 'contact' ? 'active' : ''} ${articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
                <h2 className="major">Контакты</h2>
                <p>Москва, Тропарево-Никулино</p>
                <p>станции метро "Озёрная", "Юго-Западная"</p>
                <p>ул.Никулинская д.23/1</p>
                <p>Cалон красоты "Для Вас" </p>
                <h3>Записывайтесь по телефону</h3>
                <h2>+79773317782</h2>
                <ul className="icons">
                    <li><a href="https://wa.me/79773317782" className="icon fa-whatsapp"><span className="label">Whatsapp</span></a></li>
                    <li><a href="https://www.instagram.com/sasha.lashmaker/" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                    <li><a href="https://github.com/LeonidGrr/mission-lashmaker-gatsbyjs" className="icon fa-github"><span className="label">GitHub</span></a></li>
                </ul>
                <SocialExpert />
                {close}
            </article>
        </div>
    );
};

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
};

export default Main;