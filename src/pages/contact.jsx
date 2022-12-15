
import ContactInfo from '../components/contact/ContactInfo'
import GoogleMap from '../components/contact/GoogleMap'

const Contact = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 my-2">
                    <ContactInfo />
                </div>
                <div className="col-md-6 my-2">
                    <GoogleMap />
                </div>
            </div>
        </div>
    )
}

export default Contact