import React, { Component } from "react";
import "../../assets/css/socialHeader.scss";

export default class Content extends Component {
   
    render() {
        return(
             <div>
                <div className="row" style={{ paddingTop: '20px', margin:'20px' }}>
                    <div className="col-12">
                        <table className="table dt-responsive">
                            <tbody>
                                <tr>
                                    <td className="top-row" style={{borderTop:'none'}}>
                                        <div className="row">
                                            <div className="col-12 ml-4">3/03/20</div>
                                            <div className="col-12 ml-5">
                                                <div className="social-arrow-down"></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="first-col" style={{borderTop:'none'}}>
                                        <p>Eric Wong sold Zoom (ZM) at $161.</p>
                                    </td>
                                    <td className="first-col" style={{borderTop:'none'}}>
                                        <p>ZM is now $207.43</p>
                                    </td>
                                    <td className="first-col" style={{borderTop:'none'}}>
                                        <i className="fa fa-comment-alt" style={{color:'#ffcccb'}}></i>
                                        <sub>2</sub>
                                    </td>
                                    <td style={{border:'none'}}>
                                        <div className="arrow-up mb-1"></div>
                                        <div className="arrow-down"></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="bb-br">
                                    <div className="row">
                                            <div className="col-12 ml-4">3/01/20</div>
                                            <div className="col-12 ml-5">
                                                <div className="social-arrow-up"></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="bb">
                                        <p>Jack Johnson bought Zoom (ZM) at $163.</p>
                                    </td>
                                    <td className="bb">
                                        <p>ZM is now $207.43</p>
                                    </td>
                                    <td className="bb">
                                        <i className="fa fa-comment-alt" style={{color:'#ffcccb'}}></i>
                                        <sub>3</sub>
                                    </td>
                                    <td style={{border:'none'}}>
                                        <div className="arrow-up mb-1"></div>
                                        <div className="arrow-down"></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="bb-br">
                                        <div className="row">
                                            <div className="col-12 ml-4">2/14/20</div>
                                            <div className="col-12 ml-5">
                                                <div className="social-arrow-down"></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="bb">
                                        <p>Michael Johnson gave 5 shares of Apple (APPL) to Josephine Smith.</p>
                                    </td>
                                    <td className="bb">
                                        <div>APPL is now <p style={{color:'#e80016'}}>5.34%</p></div>
                                    </td>
                                    <td className="bb">
                                        <i className="fa fa-comment-alt" style={{color:'#ffcccb'}}></i>
                                    </td>
                                    <td style={{border:'none'}}>
                                        <div className="arrow-up mb-1"></div>
                                        <div className="arrow-down"></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="bb-br">
                                        <div className="row">
                                            <div className="col-12 ml-4">1/13/20</div>
                                            <div className="col-12 ml-5">
                                                <div className="social-arrow-down"></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="bb">
                                        <p>John Williams recommends selling Square (SQ) to Kelly McKarthy at $85</p>
                                    </td>
                                    <td className="bb">
                                        <p>SQ is now $90</p>
                                    </td>
                                    <td className="bb">
                                        <i className="fa fa-comment-alt" style={{color:'#ffcccb'}}></i>
                                    </td>
                                    <td style={{border:'none'}}>
                                        <div className="arrow-up mb-1"></div>
                                        <div className="arrow-down"></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="bb-br">
                                        <div className="row">
                                            <div className="col-12 ml-4">1/13/20</div>
                                            <div className="col-12 ml-5">
                                                <div className="social-arrow-down"></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="bb">
                                        <p>Patrick McDonough recommends buying SouthWestern Airlines (LUV) to Jeremeny Lett at $40.</p>
                                    </td>
                                    <td className="bb">
                                        <p>LUV is now $38</p>
                                    </td>
                                    <td className="bb">
                                        <i className="fa fa-comment-alt" style={{color:'#ffcccb'}}></i>
                                    </td>
                                    <td style={{border:'none'}}>
                                        <div className="arrow-up mb-1"></div>
                                        <div className="arrow-down"></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="bb-br">
                                        <div className="row">
                                            <div className="col-12 ml-4">1/03/20</div>
                                        </div>
                                    </td>
                                    <td className="bb">
                                        <p>Matthew Elmond bought Luke Finny's January 1st portfolio.</p>
                                    </td>
                                    <td className="bb"></td>
                                    <td className="bb">
                                        <i className="fa fa-comment-alt" style={{color:'#ffcccb'}}></i>
                                        <sub>1</sub>
                                    </td>
                                    <td style={{border:'none'}}>
                                        <div className="arrow-up mb-1"></div>
                                        <div className="arrow-down"></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="bb-br">
                                        <div className="row">
                                            <div className="col-12 ml-4">12/25/20</div>
                                        </div>
                                    </td>
                                    <td className="bb">
                                        <p>Jack Thompson sold Jared Lee's December 25th portfolio.</p>
                                    </td>
                                    <td className="bb"></td>
                                    <td className="bb">
                                        <i className="fa fa-comment-alt" style={{color:'#ffcccb'}}></i>
                                        <sub>1</sub>
                                    </td>
                                    <td style={{border:'none'}}>
                                        <div className="arrow-up mb-1"></div>
                                        <div className="arrow-down"></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="top-row bt-bb"></td>
                                    <td className='bt-bb'></td>
                                    <td className='bt-bb'></td>
                                    <td className='bt-bb'></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}