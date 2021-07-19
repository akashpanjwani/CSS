import * as React from 'react';
import styles from './SpPage.module.scss';
import { ISpPageProps } from './ISpPageProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { SPComponentLoader } from '@microsoft/sp-loader';
import * as jQuery from "jquery";
import * as bootstrap from "bootstrap";
import "@pnp/polyfill-ie11";
import OwlCarousel from 'react-owl-carousel';

require('../../../common/css/bootstrapiso.css');
require('../../../common/css/custom.css');
require('../../../common/css/reponsive.css');
SPComponentLoader.loadCss('https://use.fontawesome.com/releases/v5.8.2/css/all.css');
SPComponentLoader.loadCss('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');


export default class SpPage extends React.Component<ISpPageProps, {}> {

  public constructor(props: ISpPageProps) {
    super(props);

  }

  public async componentDidMount() {

  }

  public render(): React.ReactElement<ISpPageProps> {
    return (
      <div className={`${styles.divBack}`}>
        <img className={styles.imgCss} src="https://cheddarmediaglobal.sharepoint.com/sites/Sustainability-SCC/SiteAssets/Homepage/img/homepage_desktop.png" alt="Italian Trulli" />
        <div className="home-outer" id="homePage">
          <div className="home-main">
            <div className="home-section-one space-80" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear" >
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <h1 className="text-white">Organisation</h1>
                    <h1 className="text-white">& Governance</h1>
                    <p>Our leadership is committed to building sustainability goals into our business operations and ensuring rigorous governance of our progress.</p>
                  </div>
                  <div className="col-md-6 text-right">
                    <a href="https://cheddarmediaglobal.sharepoint.com/sites/Sustainability-SCC/SitePages/SWG-&-Organisation.aspx" target="_blank" data-interception="off">
                      <div className="organisation-image">
                        <img src="https://cheddarmediaglobal.sharepoint.com/sites/Sustainability-SCC/SiteAssets/Homepage/img/icon%20organisation%20&%20governance-stamp.png" alt="Organisation" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="home-section-two space-bottom-80">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-4 justify-content-center">
                    <div className="orange">
                      <div className="discription-box">
                        <h1>People</h1>
                        <p>We care for our People and the People in the communities we operate our business in.</p>
                      </div>

                      <div className="gray-box-outer">
                        <div className="gray-box">
                          <div className="gray-image">
                            <img src="https://cheddarmediaglobal.sharepoint.com/sites/Sustainability-SCC/SiteAssets/Homepage/img/icon safety 02.png" alt="safety" />
                          </div>
                          <h4>Safety</h4>
                        </div>
                      </div>
                      <div className="gray-box-outer">
                        <div className="gray-box">
                          <div className="gray-image">
                            <img src="https://cheddarmediaglobal.sharepoint.com/sites/Sustainability-SCC/SiteAssets/Homepage/img/icon%20communities%2002.png" alt="Communities" />
                          </div>
                          <h4>Communities</h4>
                        </div>
                      </div>
                      <div className="gray-box-outer">
                        <div className="gray-box">
                          <div className="gray-image">
                            <img src="https://cheddarmediaglobal.sharepoint.com/sites/Sustainability-SCC/SiteAssets/Homepage/img/icon%20diversity%20&%20induction%2002.png" alt="diversity & induction" />
                          </div>
                          <h4>Diversity & Induction</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 justify-content-center">
                    <div className="blue">
                      <div className="discription-box">
                        <h1>Planet</h1>
                        <p>We care for our Planet and we are committed to minimise the impact of our business on the environment.</p>
                      </div>
                      <a href="https://cheddarmediaglobal.sharepoint.com/sites/Sustainability-SCC/SitePages/Climate.aspx" target="_blank" data-interception="off">
                        <div className="gray-box-outerActive">
                          <div className="gray-box">
                            <div className="gray-image">
                              <img src="https://cheddarmediaglobal.sharepoint.com/sites/Sustainability-SCC/SiteAssets/Homepage/img/icon%20climate%2002.png" alt="climate" />
                            </div>
                            <h4>Climate</h4>
                          </div>
                        </div>
                      </a>
                      <div className="gray-box-outer">
                        <div className="gray-box">
                          <div className="gray-image">
                            <img src="https://cheddarmediaglobal.sharepoint.com/sites/Sustainability-SCC/SiteAssets/Homepage/img/icon%20water%2002.png" alt="water" />
                          </div>
                          <h4>Water</h4>
                        </div>
                      </div>
                      <div className="gray-box-outer">
                        <div className="gray-box">
                          <div className="gray-image">
                            <img src="https://cheddarmediaglobal.sharepoint.com/sites/Sustainability-SCC/SiteAssets/Homepage/img/icon%20packaging%2002.png" alt="packaging" />
                          </div>
                          <h4>Packaging</h4>
                        </div>
                      </div>
                      <div className="gray-box-outer">
                        <div className="gray-box">
                          <div className="gray-image">
                            <img src="https://cheddarmediaglobal.sharepoint.com/sites/Sustainability-SCC/SiteAssets/Homepage/img/icon%20water%2002.png" alt="waste" />
                          </div>
                          <h4>Waste</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 justify-content-center">
                    <div className="green" >
                      <div className="discription-box">
                        <h1>Product</h1>
                        <p>We take care to ensure our Products meet the needs and expectations of our consumers, customers and partners.</p>
                      </div>

                      <div className="gray-box-outer">
                        <div className="gray-box">
                          <div className="gray-image">
                            <img src="https://cheddarmediaglobal.sharepoint.com/sites/Sustainability-SCC/SiteAssets/Homepage/img/icon%20choice%2002.png" alt="choice" />
                          </div>
                          <h4>Choice</h4>
                        </div>
                      </div>

                      <div className="gray-box-outer">
                        <div className="gray-box">
                          <div className="gray-image">
                            <img src="https://cheddarmediaglobal.sharepoint.com/sites/Sustainability-SCC/SiteAssets/Homepage/img/icon%20sourcing%2002.png" alt="sourcing" />
                          </div>
                          <h4>Sourcing</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-section-four  space-80" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">
          <div className="home-main">
            {/* <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h3>Market & SCS Teams</h3>
                  <div className="strategy">
                    <div className="accordion" id="marketExample">
                      <div className="card">
                        <div className="card-header" id="headingOne">
                          <h4 className="collapsed" data-toggle="collapse" data-target="#market1" aria-expanded="false" aria-controls="market1">
                            SCS Contacts
                          </h4>
                        </div>
                        <div id="market1" className="collapse" aria-labelledby="market1" data-parent="#marketExample">
                          <div className="card-body">
                            <div className="team-box">
                              <div className="team-icon">
                                <img src="https://cheddarmediaglobal.sharepoint.com/sites/Sustainability-SCC/SiteAssets/Homepage/img/team placeholder.png" alt="meet" />
                              </div>
                              <div className="team-content">
                                <p className="team-title">First name, Last name</p>
                                <p className="team-title">Title</p>
                                <p className="team-email">Email</p>
                                <p className="client-mobile">Mobile</p>
                              </div>
                            </div>
                            <div className="team-box">
                              <div className="team-icon">
                                <img src="https://cheddarmediaglobal.sharepoint.com/sites/Sustainability-SCC/SiteAssets/Homepage/img/team placeholder.png" alt="meet" />
                              </div>
                              <div className="team-content">
                                <p className="team-title">First name, Last name</p>
                                <p className="team-title">Title</p>
                                <p className="team-email">Email</p>
                                <p className="client-mobile">Mobile</p>
                              </div>
                            </div>
                            <div className="team-box">
                              <div className="team-icon">
                                <img src="https://cheddarmediaglobal.sharepoint.com/sites/Sustainability-SCC/SiteAssets/Homepage/img/team placeholder.png" alt="meet" />
                              </div>
                              <div className="team-content">
                                <p className="team-title">First name, Last name</p>
                                <p className="team-title">Title</p>
                                <p className="team-email">Email</p>
                                <p className="client-mobile">Mobile</p>
                              </div>
                            </div>
                            <div className="team-box">
                              <div className="team-icon">
                                <img src="https://cheddarmediaglobal.sharepoint.com/sites/Sustainability-SCC/SiteAssets/Homepage/img/team placeholder.png" alt="meet" />
                              </div>
                              <div className="team-content">
                                <p className="team-title">First name, Last name</p>
                                <p className="team-title">Title</p>
                                <p className="team-email">Email</p>
                                <p className="client-mobile">Mobile</p>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingtwo">
                          <h4 className="collapsed" data-toggle="collapse" data-target="#market2" aria-expanded="false" aria-controls="market2">
                            Market Contacts
                          </h4>
                        </div>
                        <div id="market2" className="collapse" aria-labelledby="market2" data-parent="#marketExample">
                          <div className="card-body">
                            <div className="team-box">
                              <div className="team-icon">
                                <img src="https://cheddarmediaglobal.sharepoint.com/sites/Sustainability-SCC/SiteAssets/Homepage/img/team placeholder.png" alt="meet" />
                              </div>
                              <div className="team-content">
                                <p className="team-title">First name, Last name</p>
                                <p className="team-title">Title</p>
                                <p className="team-email">Email</p>
                                <p className="client-mobile">Mobile</p>
                              </div>
                            </div>
                            <div className="team-box">
                              <div className="team-icon">
                                <img src="https://cheddarmediaglobal.sharepoint.com/sites/Sustainability-SCC/SiteAssets/Homepage/img/team placeholder.png" alt="meet" />
                              </div>
                              <div className="team-content">
                                <p className="team-title">First name, Last name</p>
                                <p className="team-title">Title</p>
                                <p className="team-email">Email</p>
                                <p className="client-mobile">Mobile</p>
                              </div>
                            </div>
                            <div className="team-box">
                              <div className="team-icon">
                                <img src="https://cheddarmediaglobal.sharepoint.com/sites/Sustainability-SCC/SiteAssets/Homepage/img/team placeholder.png" alt="meet" />
                              </div>
                              <div className="team-content">
                                <p className="team-title">First name, Last name</p>
                                <p className="team-title">Title</p>
                                <p className="team-email">Email</p>
                                <p className="client-mobile">Mobile</p>
                              </div>
                            </div>
                            <div className="team-box">
                              <div className="team-icon">
                                <img src="https://cheddarmediaglobal.sharepoint.com/sites/Sustainability-SCC/SiteAssets/Homepage/img/team placeholder.png" alt="meet" />
                              </div>
                              <div className="team-content">
                                <p className="team-title">First name, Last name</p>
                                <p className="team-title">Title</p>
                                <p className="team-email">Email</p>
                                <p className="client-mobile">Mobile</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingthree">
                          <h4 className="collapsed" data-toggle="collapse" data-target="#market3" aria-expanded="false" aria-controls="market3">
                            BU Contacts
                          </h4>
                        </div>
                        <div id="market3" className="collapse" aria-labelledby="market3" data-parent="#marketExample">
                          <div className="card-body">
                            <div className="team-box">
                              <div className="team-icon">
                                <img src="https://cheddarmediaglobal.sharepoint.com/sites/Sustainability-SCC/SiteAssets/Homepage/img/team placeholder.png" alt="meet" />
                              </div>
                              <div className="team-content">
                                <p className="team-title">First name, Last name</p>
                                <p className="team-title">Title</p>
                                <p className="team-email">Email</p>
                                <p className="client-mobile">Mobile</p>
                              </div>
                            </div>
                            <div className="team-box">
                              <div className="team-icon">
                                <img src="https://cheddarmediaglobal.sharepoint.com/sites/Sustainability-SCC/SiteAssets/Homepage/img/team placeholder.png" alt="meet" />
                              </div>
                              <div className="team-content">
                                <p className="team-title">First name, Last name</p>
                                <p className="team-title">Title</p>
                                <p className="team-email">Email</p>
                                <p className="client-mobile">Mobile</p>
                              </div>
                            </div>
                            <div className="team-box">
                              <div className="team-icon">
                                <img src="https://cheddarmediaglobal.sharepoint.com/sites/Sustainability-SCC/SiteAssets/Homepage/img/team placeholder.png" alt="meet" />
                              </div>
                              <div className="team-content">
                                <p className="team-title">First name, Last name</p>
                                <p className="team-title">Title</p>
                                <p className="team-email">Email</p>
                                <p className="client-mobile">Mobile</p>
                              </div>
                            </div>
                            <div className="team-box">
                              <div className="team-icon">
                                <img src="https://cheddarmediaglobal.sharepoint.com/sites/Sustainability-SCC/SiteAssets/Homepage/img/team placeholder.png" alt="meet" />
                              </div>
                              <div className="team-content">
                                <p className="team-title">First name, Last name</p>
                                <p className="team-title">Title</p>
                                <p className="team-email">Email</p>
                                <p className="client-mobile">Mobile</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingfour">
                          <h4 className="collapsed" data-toggle="collapse" data-target="#market4" aria-expanded="false" aria-controls="market4">
                            KO SME’s
                          </h4>
                        </div>
                        <div id="market4" className="collapse" aria-labelledby="market4" data-parent="#marketExample">
                          <div className="card-body">
                            <div className="team-box">
                              <div className="team-icon">
                                <img src="https://cheddarmediaglobal.sharepoint.com/sites/Sustainability-SCC/SiteAssets/Homepage/img/team placeholder.png" alt="meet" />
                              </div>
                              <div className="team-content">
                                <p className="team-title">First name, Last name</p>
                                <p className="team-title">Title</p>
                                <p className="team-email">Email</p>
                                <p className="client-mobile">Mobile</p>
                              </div>
                            </div>
                            <div className="team-box">
                              <div className="team-icon">
                                <img src="https://cheddarmediaglobal.sharepoint.com/sites/Sustainability-SCC/SiteAssets/Homepage/img/team placeholder.png" alt="meet" />
                              </div>
                              <div className="team-content">
                                <p className="team-title">First name, Last name</p>
                                <p className="team-title">Title</p>
                                <p className="team-email">Email</p>
                                <p className="client-mobile">Mobile</p>
                              </div>
                            </div>
                            <div className="team-box">
                              <div className="team-icon">
                                <img src="https://cheddarmediaglobal.sharepoint.com/sites/Sustainability-SCC/SiteAssets/Homepage/img/team placeholder.png" alt="meet" />
                              </div>
                              <div className="team-content">
                                <p className="team-title">First name, Last name</p>
                                <p className="team-title">Title</p>
                                <p className="team-email">Email</p>
                                <p className="client-mobile">Mobile</p>
                              </div>
                            </div>
                            <div className="team-box">
                              <div className="team-icon">
                                <img src="https://cheddarmediaglobal.sharepoint.com/sites/Sustainability-SCC/SiteAssets/Homepage/img/team placeholder.png" alt="meet" />
                              </div>
                              <div className="team-content">
                                <p className="team-title">First name, Last name</p>
                                <p className="team-title">Title</p>
                                <p className="team-email">Email</p>
                                <p className="client-mobile">Mobile</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <h3>Meet The Team</h3>
                  <div id="meet-team" className="owl-carousel owl-theme owl-loaded">
                    <div className="item">
                      <div className="client-box">
                        <div className="client-icon">
                          <img src="https://cheddarmediaglobal.sharepoint.com/sites/Sustainability-SCC/SiteAssets/Homepage/img/team placeholder.png" alt="meet" />
                        </div>
                        <div className="client-content">
                          <h4 className="client-title">Person’s Name</h4>
                          <h4 className="client-country">Title, Country</h4>
                          <p className="client-text">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor”</p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="client-box">
                        <div className="client-icon">
                          <img src="https://cheddarmediaglobal.sharepoint.com/sites/Sustainability-SCC/SiteAssets/Homepage/img/team placeholder.png" alt="meet" />
                        </div>
                        <div className="client-content">
                          <h4 className="client-title">Person’s Name 2</h4>
                          <h4 className="client-country">Title, Country</h4>
                          <p className="client-text">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor”</p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="client-box">
                        <div className="client-icon">
                          <img src="https://cheddarmediaglobal.sharepoint.com/sites/Sustainability-SCC/SiteAssets/Homepage/img/team placeholder.png" alt="meet" />
                        </div>
                        <div className="client-content">
                          <h4 className="client-title">Person’s Name 3</h4>
                          <h4 className="client-country">Title, Country</h4>
                          <p className="client-text">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor”</p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="client-box">
                        <div className="client-icon">
                          <img src="https://cheddarmediaglobal.sharepoint.com/sites/Sustainability-SCC/SiteAssets/Homepage/img/team placeholder.png" alt="meet" />
                        </div>
                        <div className="client-content">
                          <h4 className="client-title">Person’s Name 4</h4>
                          <h4 className="client-country">Title, Country</h4>
                          <p className="client-text">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor”</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div >

      </div >

    );
  }
}
