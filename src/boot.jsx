var Main = require('./main.jsx');
require('./main.less');

React.render(<Main
                width={600}
                height={300} />,
    document.getElementById('container'));