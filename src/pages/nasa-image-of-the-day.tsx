import React from 'react';
import Layout from '../components/layout';

import { NASA_API_URL, key } from '../constants';

const url = `${NASA_API_URL}?api_key=${key}`;

type NasaImage = {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
};

class NasaImageOfTheDay extends React.Component<{}, { image: NasaImage[] }> {
  constructor() {
    // @ts-ignore
    super();
    this.state = { image: [] };
  }

  componentDidMount() {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Images are not fetched!');
        }
        return response.json();
      })
      .then(json => this.setState({ image: [json] }))
      .catch(err => {
        throw Error(err.message);
      });
  }

  render() {
    return (
      <Layout>
        <h2>🚀 Astronomy Picture of the Day 🪐</h2>
        <center>
          🌌 Each day a different image or photograph of our fascinating
          universe is featured, along with a brief explanation written by a
          professional astronomer.
        </center>
        <a href="https://apod.nasa.gov/apod/astropix.html">Source</a>
        {this.state.image.length === 0
          ? '🏋️Loading image...🏋️'
          : this.state.image.map(img => (
              <figure key={img.date}>
                <img src={img.url} />
                <h2>{img.title}</h2>
                <center>{img.date}</center>
                <br />
                <p>{img.explanation}</p>
                <center>©️ {img.copyright}</center>
              </figure>
            ))}
      </Layout>
    );
  }
}

export default NasaImageOfTheDay;
