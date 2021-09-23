import React from 'react';

import 'shared/App.css';

import Page from 'shared/Page';

function App(props) {

console.log(props);
  return (
    <div className="App">
      {
        props.contentType === "page" && 
          <Page contentId={props.contentId}/>
      }

      {/* <Contents></Contents>
      <Footer></Footer> */}
    </div>
  );
}

export default App;
