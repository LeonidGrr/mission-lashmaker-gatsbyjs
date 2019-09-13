import React, {
    useState,
    useEffect,
    useRef,
} from 'react';
import Layout from '../components/layout';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

const IndexPage = props => {
    const { location } = props;
    const [loading, setLoading] = useState('is-loading');
    const [mainTimeout, setMainTimeout] = useState(false);
    const [articleTimeout, setArticleTimeout] = useState(false);
    const [articleState, setArticleState] = useState({
        isArticleVisible: false,
        article: '',
    });
    const timeoutId = useRef(0);
    const wrapperRef = useRef(null);

    const handleOpenArticle = article => {
        setArticleState({
            isArticleVisible: true,
            article,
        });
        setTimeout(() => {
            setMainTimeout(!mainTimeout);
        }, 325);
        setTimeout(() => {
            setArticleTimeout(!articleTimeout);
        }, 350);
    };

    const handleCloseArticle = () => {
        setArticleTimeout(!articleTimeout);
        setTimeout(() => {
            setMainTimeout(!mainTimeout);
        }, 325);
        setTimeout(() => {
            setArticleState({
                isArticleVisible: false,
                article: ''
            });
        }, 350);
    };

    useEffect(() => {
        clearInterval(timeoutId.current);
        timeoutId.current = setTimeout(() => {
            clearInterval(timeoutId.current);
            setLoading('');
        }, 100);
    }, []);

    const handleClickOutside = event => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            if (articleState.isArticleVisible) {
                handleCloseArticle();
            }
        }
    };

    return (
        <Layout location={location}>
            <div className={`body ${loading} ${articleState.isArticleVisible ? 'is-article-visible' : ''}`}>
                <div id="wrapper" onClick={handleClickOutside}>
                    <Header onOpenArticle={handleOpenArticle} timeout={mainTimeout} />
                    <Main
                        isArticleVisible={articleState.isArticleVisible}
                        timeout={mainTimeout}
                        articleTimeout={articleTimeout}
                        article={articleState.article}
                        onCloseArticle={handleCloseArticle}
                        wrapperRef={wrapperRef}
                    />
                    <Footer timeout={mainTimeout} />
                </div>
                <div id="bg"></div>
            </div>
        </Layout>
    );
};

export default IndexPage;