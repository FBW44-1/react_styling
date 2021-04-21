
import './App.css';
import Article from './components/article/Article';
import Banner from './components/banner/Banner';
import Section from './components/section/Section';
import bridge4 from './images/bridge4.jpeg';

function App() {


    let pStyle = {
        padding: '20px 10px',
        backgroundColor: 'green',
        color: '#fff'
    }

    const imageOne = "https://cdn.getyourguide.com/img/location/54007c07284a6.jpeg/88.jpg";

    const imageTwo = 'http://www.sensimainsp.com/images/bridge1.jpg';

    return (
        <>
            <div className="hasan">
                <h1 style={{ color: 'red', fontSize: '40px', textAlign: 'center' }}>Hello World</h1>
                
                <p style={pStyle}>Lorem ipsum dolor sit amet.</p>
            </div>
            <Banner bannerImageSrc={imageOne} greeting="Hello World"/>
            <Banner bannerImageSrc={imageTwo} greeting="Hey guys" />
            <Banner />
            <Section />
            <Banner bannerImageSrc={bridge4} />
            <Article />
          
        </>

    );
}

export default App;
