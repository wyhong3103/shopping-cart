import '../styles/Home.css';
import bg from '../assets/bg.jpg';

const Home = () => {
    return(
        <div className='home-bg' 
            style={
                {
                    backgroundImage : `url(${bg})`,
                    backgroundSize : "cover"
                    
                }
            }
        >
            <div className="home-cont">
                <div class="home-flex">
                    <h1>GamingWizard</h1>
                    <p>We have everything you need.</p>
                </div>
            </div>
        </div>
    )
}

export default Home;