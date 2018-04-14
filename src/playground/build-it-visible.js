const app = {
  title: 'Visibility Toggle',
  details: 'Hey. These are some details you can now see!',
  buttonWords: 'Show details',
  detailsVisibility: false
};

const toggleDetails = () => {
  if (app.buttonWords === 'Show details') {
    app.buttonWords = 'Hide details'
    app.detailsVisibility = true
  } else {
    app.buttonWords = 'Show details'
    app.detailsVisibility = false
  }
  renderApp();
};

const appRoot = document.getElementById('app');

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={toggleDetails}>{app.buttonWords}</button>
      <p>{app.detailsVisibility ? app.details : null}</p>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

renderApp();
