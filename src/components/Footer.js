import React from 'react'

function Footer() {
  return (
<div className="footer-clean">
        <footer>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-4 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="/">Web design</a></li>
                            <li><a href="/">Development</a></li>
                            <li><a href="/">Hosting</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="/">Company</a></li>
                            <li><a href="/">Team</a></li>
                            <li><a href="/">Legacy</a></li>
                        </ul>
                    </div>
                    <divs className="col-sm-4 col-md-3 item">
                        <h3>Careers</h3>
                        <ul>
                            <li><a href="/">Job openings</a></li>
                            <li><a href="/">Employee success</a></li>
                            <li><a href="/">Benefits</a></li>
                        </ul>
                    </divs>
                    <div className="col-lg-3 item social"><a href="/"><i className="icon ion-social-facebook"></i></a><a href="/"><i className="icon ion-social-twitter"></i></a><a href="/"><i className="icon ion-social-snapchat"></i></a><a href="/"><i className="icon ion-social-instagram"></i></a>
                        <p className="copyright">Waqar Ahmed Khan © 2023</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer
