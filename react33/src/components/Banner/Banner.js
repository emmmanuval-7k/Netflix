import React from 'react'
import './Banner.css'
function Banner() {
    return (
        // <div className='banner'>
        //     <div className='content' >
        //         <h1 className='title'>LOST  </h1>
        //         <div className='banner_buttons' >
        //             <button className='button' >Play</button>
        //             <button className='button' >My list</button>
        //         </div>
        //         <h1 className='description'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content</h1>
        //     </div>
        //     <div className="fade_bottom"></div>
        // </div>

        <section className='banner'>
            <div className='banner1'>
                <div className='content'>
                    <div className='smallcontent'>
                        <div className='imgcontent'>
                            <img className='imglogo' alt='#' src='https://occ-0-2849-3646.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABQ-ZQ3oPc7b85jC6RlYHta0VDciPakkztJ02ojxodAUyFcqA-IlJu8S7qnMSzJSAI9ACorl6WFfAgdtey5bwa9zkb9Y2RKkZdlPzVcmYj1bx.png?r=896' />
                        </div>
                        <div className='details'>
                            <div className='vikings'>
                                {/* <h1 className='h1'>vikings</h1> */}
                            </div>
                            <div className='two'>
                            <h1 className='h1'>vikings</h1><br></br>
                                <span className='title1'>2013 </span>
                                <span className='title1'> | </span>
                                <span className='title1'> A</span>
                                <span className='title1'> |</span>
                                <span className='title1'> 6 Seasons</span>
                                <span className='title1'> |</span>
                                <span className='title1'> Drama</span>
                            </div>
                            <div className='title2'>
                                This gritty drama charts the exploits of Viking hero Ragnar Lothbrok as he extends the Norse reach by challenging an unfit leader who lacks vision.
                            </div>
                            <div className='title3'>
                                <span className='starring'>Starring:</span>
                                <span>  Travis Fimmel,Katheryn Winnick,Clive Standen</span>
                            </div>
                            <div className=' title3'>
                                <span className='starring'>Creators:</span>
                                <span> Michael Hirst</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="smallnavbar" >
                
                {/* <img className="logo1" src=" https://seeklogo.com/images/N/netflix-n-logo-0F1ED3EBEB-seeklogo.com.png" alt=" " /> */}
                 
                <div className='header1'>
                <img className="logo1" src=" https://seeklogo.com/images/N/netflix-n-logo-0F1ED3EBEB-seeklogo.com.png" alt=" " />

                   <h3 className='logo11'> Watch all you want</h3> 
                </div> 
                <button className='join1' type='submit'>JOIN NOW</button>
            </div>
            



        </section>

    )
}

export default Banner
