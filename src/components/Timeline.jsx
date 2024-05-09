import React, { useCallback } from "react";
import "../styles/Timeline.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import timelineParticlesConfig from "../ts-particles-config-files/timeline-particles-config";

function Timeline() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    // <section id="timeline">
    //   <Particles
    //     id="timeline-ts-particles"
    //     init={particlesInit}
    //     options={timelineParticlesConfig}
    //   ></Particles>
    //   <div className="single-timeline">
    //     <h1 className="inshaallaah">Inshaallaah ...</h1>

    //     <div className="wrapper" data-aos="fade-up" data-aos-delay="100">
    //       <div className="content">
    //         <h1>Nikaah</h1>
    //         <p>
    //           On Thursday, 02<sup>nd</sup> June, 2024,
    //           <br />
    //           22<sup>nd</sup> Zil-Qaida, 1445 Hijri,
    //           <br />
    //           Time: 12:30 PM.
    //         </p>

    //         <h2>Nikaah At:</h2>
    //         <p>
    //           Masjid-e-Chanda Hussaini Roza,
    //           <br /> Adoni.
    //         </p>

    //         <h2>Valima Lunch Follows:</h2>
    //         <p>
    //           Mehboobia Palace,
    //           <br /> Musheerabad Main Road,
    //           <br /> SKD Colony,Adoni.
    //           {/* <br /> Kavadiguda, Hyderabad
    //           <br /> Telangana - 500020. */}
    //           <br /> Time: 02:00 PM.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </section>

        <section id="timeline">
            <Particles
                id="timeline-ts-particles"
                init={particlesInit}
                options={timelineParticlesConfig}
            ></Particles>
            <div className="multi-timeline">
                <h1 className="inshaallaah">Inshaallaah ...</h1>
                <div className="wrapper">
                    {/* shukrana included */}
                     <>
                         <div className="row">
                             <div className="col-lg-6 left" data-aos="fade-down">
                                 <h1>Shukrana</h1>
                                 <p>
                                     On Saturday, 01<sup>st</sup> June, 2024.
                                     <br />
                                     24<sup>th</sup> Zil-Qaida, 1445 Hijri,
                                     <br />
                                     Time: 09:00 PM.
                                 </p>

                                 <h2>Venue:</h2>
                                 <p>
                                     Danish Function Hall,
                                     <br /> Yemmiganur By-pass Road,
                                     {/* <br /> Tirumala Nagar, */}
                                     <br /> Adoni.
                                 </p>
                                 {/* <p>
                                     NSJ Function Hall,
                                     <br /> Arts College Road,
                                     <br /> Tirumala Nagar,
                                     <br /> Adoni.
                                 </p> */}
                             </div>

                             <div
                                 className="col-lg-6 right"
                                 data-aos="fade-down"
                             ></div>
                         </div>
                         <div className="row">
                             <div
                                 className="col-lg-6 left next"
                                 data-aos="fade-down"
                                 data-aos-offset="200"
                             ></div>
                             <div
                                 className="col-lg-6 right next"
                                 data-aos="fade-down"
                                 data-aos-offset="200"
                             >
                                 <h1>Nikaah</h1>
                                 <p>
                                     On Sunday, 02<sup>nd</sup> June, 2024,
                                     <br />
                                     25<sup>st</sup> Zil-Qaida, 1445 Hijri,
                                     <br /> Time: 12:45 PM.
                                 </p>

                             {/* <h2>Nikah At:</h2>
                                 <p>
                                     Bebadal Jung Masjid,
                                     <br /> Adoni.
                                 </p>

                                 <h2>Lunch Follows:</h2>
                                 <p>
                                     NSJ Function Hall,
                                     <br /> Arts College Road,
                                     <br /> Tirumala Nagar,
                                     <br /> Adoni.
                                 </p> */}

                                 <h2>Venue:</h2>
                                 <p>
                                     Danish Function Hall,
                                     <br /> Yemmiganur By-pass Road,
                                     {/* <br /> Tirumala Nagar, */}
                                     <br /> Adoni.
                                 </p>
                             </div>
                         </div>
                         <div className="row">
                             <div
                                 className="col-lg-6 left next"
                                 data-aos="fade-down"
                                 data-aos-offset="200"
                                 data-aos-delay="100"
                             >
                                 <h1>Valima</h1>

                                 <p>
                                     On Monday, 03<sup>rd</sup> June, 2024,
                                     <br />
                                     26<sup>st</sup> Zil-Qaida, 1445 Hijri,
                                     <br />
                                     Time: 02:00 PM.
                                 </p>

                                 <h2>Venue:</h2>
                                 {/* <p>
                                     International Function Hall,
                                     <br /> SKD Colony - 3<sup>rd</sup> Road,
                                     <br /> Adoni.
                                 </p> */}
                                 <p>
                                     Danish Function Hall,
                                     <br /> Yemmiganur By-pass Road,
                                     {/* <br /> Tirumala Nagar, */}
                                     <br /> Adoni.
                                 </p>
                             </div>
                             <div
                                 className="col-lg-6 right next"
                                 data-aos="fade-down"
                                 data-aos-offset="200"
                                 data-aos-delay="100"
                             ></div>
                         </div>
                    </>                

                    {/* shukrana excluded */}
                     {/* <>
                        <div className="row">
                            <div
                                className="col-lg-6 left next"
                                data-aos="fade-down"
                                data-aos-offset="200"
                            >
                                <h1>Nikaah</h1>
                                <p>
                                    On Friday, 24<sup>th</sup> June, 2023,
                                    <br />
                                    10<sup>th</sup> Jamaad-il-awwal, 1445 Hijri,
                                    <br />
                                    Time: After Namaaz-e-Jumaah.
                                </p>

                                <h2>Nikaah At:</h2>
                                <p>
                                    Masjid-e-Noor,
                                    <br /> Pension Lane, Mohammed Nagar,
                                    <br /> New Bowenpally,
                                    <br /> Secunderabad.
                                </p>

                                <h2>Dinner Follows:</h2>
                                <p>
                                    Heritage Function Palace,
                                    <br /> Musheerabad Main Road,
                                    <br /> Musheerabad, Bakaram,
                                    <br /> Kavadiguda, Hyderabad
                                    <br /> Telangana - 500020.
                                    <br /> Time: 09:00 PM.
                                </p>
                            </div>
                            <div
                                className="col-lg-6 right next"
                                data-aos="fade-down"
                                data-aos-offset="200"
                            ></div>
                        </div>
                        <div className="row">
                            <div
                                className="col-lg-6 left next"
                                data-aos="fade-down"
                                data-aos-offset="200"
                                data-aos-delay="100"
                            ></div>
                            <div
                                className="col-lg-6 right next"
                                data-aos="fade-down"
                                data-aos-offset="200"
                                data-aos-delay="100"
                            >
                                <h1>Valima</h1>
                                <p>
                                    On Sunday, 26<sup>th</sup> June, 2023,
                                    <br />
                                    12<sup>th</sup> Jamaad-il-awwal, 1445 Hijri,
                                    <br />
                                    Time: 08:00 PM.
                                </p>
                                <h2>Venue:</h2>
                                <p>
                                    786 Garden Function Hall,
                                    <br /> Moula Ali Road, S.P. Nagar,
                                    <br /> Moula Ali, Secunderabad Road,
                                    <br /> Moula Ali, Hyderabad.
                                </p>
                            </div>
                        </div>
                    </> */}
                </div>
            </div>
        </section>
  );
}

export default Timeline;
