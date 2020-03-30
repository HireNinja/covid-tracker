//service to resolve Ip to a Location.
import Api from './api';
class Home extends Api {
    constructor(session) {
        super('/home');
        this.session = session;
    }
}
export default Home;