import './App.css';
import fileSaver from 'file-saver';
import { useState } from 'react';

// import { load } from 'cheerio';

function App() {
  const [template, setTemplate] = useState('aag');
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  /* const [fullMemeUrl, setFullMemeUrl] = useState(
    'https://api.memegen.link/images/aag.png',
  ); */
  const fullMemeUrl =
    'https://api.memegen.link/images/' +
    template +
    '/' +
    topText +
    '/' +
    bottomText +
    '.png';
  const saveFile = () => {
    fileSaver.saveAs(fullMemeUrl, fullMemeUrl);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={fullMemeUrl}
          className="App-memeImage"
          alt="meme"
          data-test-id="meme-image"
        />
        <p>
          Edit <code>the meme</code> and save to reload.
        </p>

        {/* <a
          className="App-link"
          href={fullMemeUrl}
          target="_blank"
          rel="noopener noreferrer"
        ></a> */}
        <button data-test-id="generate-meme" onClick={saveFile}>
          Download
        </button>
      </header>
      <label>
        Top text
        <br />
        <br />
        <input
          // 2. Use state variable (connect it to the input)
          value={topText} // {colorLuminosity}
          // 3. Update the state variable when the user types something
          onChange={(event) => {
            setTopText(event.currentTarget.value);
          }}
        />
      </label>
      <br />
      <br />
      <label>
        Bottom text
        <br />
        <br />
        <input
          // 2. Use state variable (connect it to the input)
          value={bottomText} // {colorLuminosity}
          // 3. Update the state variable when the user types something
          onChange={(event) => {
            setBottomText(event.currentTarget.value);
          }}
        />
      </label>
      <br />
      <br />
      <label htmlFor="templates">Meme template</label>
      <br />
      <br />
      <select
        id="templates"
        name="templates"
        value={template}
        onChange={(event) => {
          setTemplate(event.currentTarget.value);
        }}
      >
        <option value="aag">Ancient Aliens Guy</option>
        <option value="ackbar">It's A Trap!</option>
        <option value="doge">doge</option>
      </select>
      <br />
      <br />
    </div>
  );
}

export default App;
