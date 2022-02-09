import React from "react";
import Header from "./Header";
import MyContext from "./StateContext";

const API_KEY1 = "api_key=e25f14ed2d760d6f067ca3bba518b593"
const BASE_URL1 = "https://api.themoviedb.org/3"
const API_URL1 = BASE_URL1 + '/discover/movie?sort_by=popularity.desc&' + API_KEY1

const API_KEY2 = "api_key=e25f14ed2d760d6f067ca3bba518b593"
const BASE_URL2 = "https://api.themoviedb.org/3"
const API_URL2 = BASE_URL2 + '/discover/movie?with_genres=18&primary_release_year=2014&' + API_KEY2

const API_KEY3 = "api_key=e25f14ed2d760d6f067ca3bba518b593"
const BASE_URL3 = "https://api.themoviedb.org/3"
const API_URL3 = BASE_URL3 + '/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc&' + API_KEY3

const API_KEY4 = "api_key=e25f14ed2d760d6f067ca3bba518b593"
const BASE_URL4 = "https://api.themoviedb.org/3"
const API_URL4 = BASE_URL4 + '/discover/movie?certification_country=US&certification=R&sort_by=revenue.desc&with_cast=3896&' + API_KEY4
const IMG_URL = "https://image.tmdb.org/t/p/w500"

class MainPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            imageClick: false,
            ClickData: null
        }
        this.handlePopular = this.handlePopular.bind(this)
        this.handleImageClick = this.handleImageClick.bind(this)
        this.handleBackButton = this.handleBackButton.bind(this)
    }
    static contextType = MyContext

    componentDidMount() {
        fetch(API_URL1)
            .then(response => response.json())
            .then(data =>
                this.setState({ list: data.results })
            )
    }
    handlePopular() {
        fetch(API_URL1)
            .then(response => response.json())
            .then(data =>
                this.setState({ list: data.results })
            )
    }
    handleClick(buttonName) {
        debugger
        switch (buttonName) {
            case (buttonName = "toprated"):
                fetch(API_URL2)
                    .then(response => response.json())
                    .then(data =>
                        this.setState({ list: data.results })
                    )
                break;
            case (buttonName = "nowplaying"):
                fetch(API_URL3)
                    .then(response => response.json())
                    .then(data =>
                        this.setState({ list: data.results })
                    )
                break;
             default:
                fetch(API_URL4)
                    .then(response => response.json())
                    .then(data =>
                        this.setState({ list: data.results })
                    )
                break;
        }
    }
    handleImageClick(data) {
        this.setState({
            ClickData: data,
            imageClick: true
        })
    }
    handleBackButton() {
        this.setState({ imageClick: false })
    }

    render() {
        return (
            <>
                {
                    !this.state.imageClick
                        ?
                        <div>
                            {this.context.isLogin ?
                                <div>
                                    <Header checkSignOut={this.props.checkSignOut} />
                                    <div className="nav">
                                        <ul>
                                            <li><button to="/pop" className="main" onClick={this.handlePopular}  > Popular </button></li>
                                            <li><button to="/toprated" className="main" onClick={() => this.handleClick('toprated')}   > Top Rated </button></li>
                                            <li><button to="/nowplaying" className="main" onClick={() => this.handleClick('nowplaying')}   > Now Playing </button></li>
                                            <li><button to="/upcoming" className="main" onClick={() => this.handleClick('upcoming')}   > Upcoming </button></li>
                                        </ul>
                                    </div>
                                    <div className="grid-container">
                                        {this.state.list.map(data => {
                                            return (
                                                <div className="container-item" key={data.id}>
                                                    <div onClick={() => this.handleImageClick(data)} >
                                                        <img src={IMG_URL + data.poster_path} alt="img" width="210px" />
                                                    </div>
                                                    <div className="info-box">
                                                        <p id="idofp">&#x2B50; {data.vote_average}</p>
                                                        <h4 id="idofh4">{data.original_title} abc</h4>
                                                    </div>
                                                </div>
                                            )
                                        }
                                        )
                                        }
                                    </div>
                                </div>
                                :
                                <div>
                                    <Header />
                                    <div className="nav">
                                        <ul>
                                            <li><button to="/pop" className="main" onClick={this.handlePopular}  > Popular </button></li>
                                            <li><button to="/toprated" className="main" onClick={() => this.handleClick('toprated')}   > Top Rated </button></li>
                                            <li><button to="/nowplaying" className="main" onClick={() => this.handleClick('nowplaying')}   > Now Playing </button></li>
                                            <li><button to="/upcoming" className="main" onClick={() => this.handleClick('upcoming')}   > Upcoming </button></li>
                                        </ul>
                                    </div>
                                    <div className="grid-container">
                                        {this.state.list.map(data => {
                                            return (
                                                <div className="container-item" key={data.id}>
                                                    <div >
                                                        <img src={IMG_URL + data.poster_path} alt="img" width="210px" />
                                                    </div>
                                                    <div className="info-box">
                                                        <p id="idofp">&#x2B50; {data.vote_average}</p>
                                                        <h4 id="idofh4">{data.original_title} abc</h4>
                                                    </div>
                                                </div>
                                            )
                                        }
                                        )
                                        }

                                    </div>
                                </div>
                            }

                        </div>

                        :
                        <div className="clickablediv" >
                            <div className="imgbutton">
                                <h1> <button onClick={this.handleBackButton} id="imgbutton" > Back </button></h1>
                            </div>
                            <div className="imgclick">
                                <div>
                                    <img src={IMG_URL + this.state.ClickData.poster_path} alt="img" width="300px" id="clickimgid" />
                                </div>
                                <div className="discriptiondiv">
                                    <div>
                                        <h1 id="titlediv">  {this.state.ClickData.original_title}</h1>
                                    </div>
                                    <div>
                                        <p id="paraimg"> {this.state.ClickData.overview}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                }
            </>

        )
    }
}

export default MainPage;