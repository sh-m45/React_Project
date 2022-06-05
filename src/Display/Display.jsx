import axios from 'axios';
import React, { Component } from 'react'
import prodectedRoute from './../libs/protectedRoute';
class Display extends Component {
  state =
    {
      articals: []
    }
  getNews = async () => {
    let { data } = await axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2022-05-05&sortBy=publishedAt&apiKey=d9bc31bb58ff463da53a93525edba9b1`);
    // console.log(data.articles);
    this.setState({ articals: data.articles });
    //console.log(this.state.articals);

  }

  componentDidMount() {
    this.getNews();
  }


  render() {
    return (
      <div className="pt-5">
        <div className="container">
          <div className="row vh-100 align-items-center justify-content-center text-white pt-4">
            {this.state.articals.length > 0? this.state.articals.map((article, index) => <div key={index} className="col-md-3">
              <div className="artical">
                <img className="w-100" src={article.urlToImage} alt="img api" />
                <h4 className="fw-bold"> {article.title} </h4>
                <p>{article.description}</p>
                
              </div>
            </div>):<h2 className='text-center'>Loading ....</h2>}
          </div>
        </div>
      </div>
    )
  }
}

export default prodectedRoute(Display)