import { Component } from "react";
import Layout from "../components/layout";

import { NASA_API_URL, key } from '../constants';

type NasaImage = {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
  _isFallback?: boolean;
};

type State = {
  image: NasaImage[];
  error: string | null;
  isLoading: boolean;
};

class NasaImageOfTheDay extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      image: [],
      error: null,
      isLoading: true,
    };
  }

  componentDidMount() {
    const apiKey = key || 'DEMO_KEY';
    const url = `${NASA_API_URL}?api_key=${apiKey}`;
    const fetchStartTime = Date.now();

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    fetch(url, { signal: controller.signal })
      .then(response => {
        const duration = Date.now() - fetchStartTime;
        console.log(`NASA API: ${response.status} (${duration}ms)`);
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        clearTimeout(timeoutId);
        console.log('NASA data loaded:', json.title);
        this.setState({
          image: [json],
          error: null,
          isLoading: false,
        });
      })
      .catch(err => {
        clearTimeout(timeoutId);
        console.log('Using fallback image');
        
        const fallbackData = {
          copyright: "NASA",
          date: new Date().toISOString().split('T')[0],
          explanation: "The NASA API is currently unreachable from your network. This could be due to firewall restrictions, network issues, or SSL certificate problems.",
          hdurl: "/earth.png",
          media_type: "image",
          service_version: "v1",
          title: "Earth (NASA API Unreachable - Showing Local Fallback)",
          url: "/earth.png",
          _isFallback: true,
        };
        
        this.setState({
          image: [fallbackData],
          error: null,
          isLoading: false,
        });
      });
  }

  render() {
    const { image, error, isLoading } = this.state;

    return (
      <Layout>
        <h2>🚀 Astronomy Picture of the Day 🪐</h2>
        <center>
          🌌 Each day a different image or photograph of our fascinating
          universe is featured, along with a brief explanation written by a
          professional astronomer.
        </center>
        <a href="https://apod.nasa.gov/apod/astropix.html">Source</a>
        
        {error && (
          <div style={{ color: 'red', padding: '20px', textAlign: 'center' }}>
            <p>⚠️ Error: {error}</p>
            <p>Please check your NASA API key configuration.</p>
          </div>
        )}
        
        {isLoading && !error && (
          <div style={{ textAlign: 'center', padding: '20px' }}>
            🏋️ Loading image... 🏋️
          </div>
        )}
        
        {!isLoading && !error && image.length > 0 && image.map(img => (
          <figure key={img.date}>
            {img._isFallback && (
              <div style={{ 
                backgroundColor: '#fff3cd', 
                border: '1px solid #ffc107', 
                padding: '15px', 
                marginBottom: '20px',
                borderRadius: '5px'
              }}>
                <strong>⚠️ Network Issue Detected</strong>
                <p style={{ margin: '10px 0 0 0', fontSize: '14px' }}>
                  Unable to reach NASA API from your network. Showing demo data instead.
                  <br />
                  Possible causes: VPN, firewall, or SSL certificate issues.
                </p>
              </div>
            )}
            <img src={img.url} alt={img.title || 'NASA Astronomy Picture of the Day'} />
            <h2>{img.title}</h2>
            <center>{img.date}</center>
            <br />
            <p>{img.explanation}</p>
            {img.copyright && <center>©️ {img.copyright}</center>}
          </figure>
        ))}
      </Layout>
    );
  }
}

export default NasaImageOfTheDay;
