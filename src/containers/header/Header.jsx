import React from 'react'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
import './header.css'
const Header = () => {
    return (
        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">
                    بیایید با این سایت چیز های  شگفت انگیز بسازیم
                </h1>
                <p>
                   بهترین موقعیت برای ساخت یک سایت جدید برای توسعه کسب و کارتان 
                   امید وارم در  با سخت یک سایت قدمی بزرگ در کارتان بردارید 
                   با آرزوی موفقیت 
                </p>

                <div className="gpt3__header-content__input">
                    <input type="email" placeholder='ایمیل خود را بنویسید'/>
                    <button>همین الان شروع کن</button>
                </div>

                <div className="gpt3__header-content__people">
                    <img src={people} alt="people" />  <p>تمام افرادی که در یک روز اخیر  درخواست داده اند</p>
                </div>
            </div>

            <div className="gpt3__header-image">
                <img src={ai}  />
            </div>
        </div>
    )
}

export default Header ;