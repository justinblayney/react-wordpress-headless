import FetchContent from './Page.js';

function HomePage() {
 return (
    <div className="container-fluid">
      <FetchContent pageId={'home'} />
    </div>
  );
}

export default HomePage;
