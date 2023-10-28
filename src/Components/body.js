import React from "react";
import ad from './massage.mp4'



function Body() {
    return (
        <div className="root">
            <div className="card">
                <h1 className="hl">Think Health. </h1>
                <div className="p1">
                    <h1>Welcome 💆 </h1>
                    <p>Welcome to Family Massage Center, a serene oasis of relaxation and rejuvenation in the heart of New York. Our doors open at 9 AM to invite you into a world of tranquility and well-being, where our dedicated team of experienced massage therapists awaits to help you unwind and escape the stresses of daily life. Whether you seek relief from muscle tension, stress, or simply desire a pampering experience, we offer a wide range of massage therapies to suit your specific needs.</p>
                </div>
                <div className="p2">
                    <h1> Our Services 🥇  </h1>
                    <p>
                        At Family massage center, we believe that every individual is unique, and so are their needs. Our menu of services includes Swedish, deep tissue, hot stone, aromatherapy, and many more massage modalities to cater to your preferences. We take pride in tailoring each session to meet your specific goals, whether it's pain relief, relaxation, or a combination of both. Our expert therapists are dedicated to providing you with a personalized and transformative massage experience.
                    </p>
                </div>

                <div className="p3">
                    <h1>Expert Therapists 🤓   </h1>

                    <p>
                        Our team consists of highly skilled and certified massage therapists who are passionate about their craft. They possess a deep understanding of anatomy and physiology, ensuring that your massage experience is not only enjoyable but also effective in promoting your overall well-being. With their knowledge and nurturing touch, you can trust that you're in good hands at Family massage center.
                    </p>
                </div>

                <div className="p4">
                    <h1>Visit Us Today 🤞</h1>

                    <p>
                        We are open from 9 AM to 6 PM, Monday through Saturday, to accommodate your busy schedule. Whether you're looking for a brief escape during your lunch break or a longer, indulgent session on the weekend, we're here to provide you with the care you deserve. Make a reservation today and take the first step towards a more relaxed and balanced you. We look forward to welcoming you at Family massage center and helping you on your journey to wellness.
                    </p>
                </div>

                <h1 className="ms">Think Massage!</h1>
            </div>

            <div className="vdo">
                <h1>
                    Benefits of Massages
                </h1>
                <video width="700" height="400" controls>
                    <source src={ad} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="contact">
                <button>Learn About Us</button>
                <button>Contact Us today</button>
            </div>



            <hr />

            <div className="add">
                <h1>Family Wellness Massage Therapy</h1>
                <p>9876, Main street,Suite 123, New York, NY12345</p>
                <p>9876453210</p>
            </div>



        </div>
    )
}

export default Body;