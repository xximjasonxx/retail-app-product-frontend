
import createHistory from 'history/createHashHistory';

const history = createHistory({
    hashType: 'slash',
    basename: '/'
});

export default history;