//service to resolve Ip to a Location.
import Api from './api';
class Location extends Api {
    constructor(session) {
        super('/location');
        this.session = session;
    }
    setLocationInSession() {
        this.session.set('location', JSON.stringify(this.location));
    }
}
export default Location;