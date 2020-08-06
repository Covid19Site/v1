import React from 'react';
import NewsItem from './NewsItem';

function ShowNews(items) {
  return <div>{items.map((item) => <NewsItem key={item.title} {...item} />)}</div>;
}

class News extends React.Component {
  render() {
    let news = require('../../data_resource/news');
    return (
        <div className="News">
          <div>
            <h1>COVID-19 NEWS</h1>
            <h5>Click the card to view the content</h5>
            <div className="News">{ShowNews(news)}</div>
          </div>

        </div>
    );
  }
}

export default News;