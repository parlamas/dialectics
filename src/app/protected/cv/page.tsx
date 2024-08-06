// src/app/protected/cv/page.tsx
import React from 'react';

const CVPage = () => {
  return (
    <div style={{ fontSize: '10pt' }}>
      <head>
        <meta charSet="utf-8" />
        <title>CV</title>
        <style>
          {`
            body { font-size: 10pt; }
            .textColor { color: blue; }
          `}
        </style>
      </head>
      <div
        style={{
          width: '80%',
          height: '1000px',
          fontSize: '25pt',
          backgroundColor: 'beige',
          margin: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        <div>
          <p className="textColor">TEST</p>
        </div>
      </div>
    </div>
  );
};

export default CVPage;