import React from "react";
import "./Sprite.css";

class Sprite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState({ update: true });
  }

  componentDidUpdate() {}

  render() {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: `
<svg width="0" height="0" class="hidden">
  <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="more_vert">
    <path d="M0 0h24v24H0V0z" fill="none"></path>
    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
  </symbol>
  <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="exit_to_app">
    <path d="M0 0h24v24H0V0z" fill="none"></path>
    <path d="M10.79 16.29c.39.39 1.02.39 1.41 0l3.59-3.59a.996.996 0 000-1.41L12.2 7.7a.996.996 0 10-1.41 1.41L12.67 11H4c-.55 0-1 .45-1 1s.45 1 1 1h8.67l-1.88 1.88c-.39.39-.38 1.03 0 1.41zM19 3H5a2 2 0 00-2 2v3c0 .55.45 1 1 1s1-.45 1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1v3c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
  </symbol>
  <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="undo">
    <path d="M0 0h24v24H0V0z" fill="none"></path>
    <path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L3.71 8.71C3.08 8.08 2 8.52 2 9.41V15c0 .55.45 1 1 1h5.59c.89 0 1.34-1.08.71-1.71l-1.91-1.91c1.39-1.16 3.16-1.88 5.12-1.88 3.16 0 5.89 1.84 7.19 4.5.27.56.91.84 1.5.64.71-.23 1.07-1.04.75-1.72C20.23 10.42 16.65 8 12.5 8z"></path>
  </symbol>
  <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="get_app">
    <path d="M0 0h24v24H0V0z" fill="none"></path>
    <path d="M16.59 9H15V4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v5H7.41c-.89 0-1.34 1.08-.71 1.71l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.63-.63.19-1.71-.7-1.71zM5 19c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1z"></path>
  </symbol>
  <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="delete">
    <path d="M0 0h24v24H0V0z" fill="none"></path>
    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"></path>
  </symbol>
  <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="cancel">
    <path d="M0 0h24v24H0V0z" fill="none" opacity=".87"></path>
    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm4.3 14.3a.996.996 0 01-1.41 0L12 13.41 9.11 16.3a.996.996 0 11-1.41-1.41L10.59 12 7.7 9.11A.996.996 0 119.11 7.7L12 10.59l2.89-2.89a.996.996 0 111.41 1.41L13.41 12l2.89 2.89c.38.38.38 1.02 0 1.41z"></path>
  </symbol>
  <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="block">
    <path d="M0 0h24v24H0V0z" fill="none"></path>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9A7.902 7.902 0 014 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1A7.902 7.902 0 0120 12c0 4.42-3.58 8-8 8z"></path>
  </symbol>
  <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="done_outline">
    <path d="M0 0h24v24H0V0z" fill="none"></path>
    <path d="M20.47 5.63c.39.39.39 1.01 0 1.4L9.13 18.37a.984.984 0 01-1.4 0l-4.2-4.2a.984.984 0 010-1.4.984.984 0 011.4 0l3.5 3.5L19.07 5.63a.984.984 0 011.4 0zm-2.11-2.12l-9.93 9.93-2.79-2.79c-.78-.78-2.05-.78-2.83 0l-1.4 1.4c-.78.78-.78 2.05 0 2.83l5.6 5.6c.78.78 2.05.78 2.83 0L22.59 7.74c.78-.78.78-2.05 0-2.83l-1.4-1.4c-.79-.78-2.05-.78-2.83 0z"></path>
  </symbol>
</svg>`,
        }}
      ></div>
    );
  }
}

export default Sprite;
