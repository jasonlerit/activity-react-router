
import '../../style.css'

const GoogleMap = () => {
    return (
        <div className='border-2 border-dark border p-3'>
            <div>
                <h3>Group Address:</h3>
            </div>
            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe className="gmap_iframe" width="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?q=Nihommatsu-shi,%20Fukushima%20Japan&t=k&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                    <a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon/" />
                </div>
            </div>
        </div>
    )
}

export default GoogleMap