import React from 'react'
import possibilityImage from '../../assets/possibility.png'
import './possibility.css'
const Possibility = () => {
    return (
        <div className="gpt3__possibility sectoin__padding" id="possibility">
            <div className="gpt3__possibility-content">
                <h4>هرچه زود تر شروع کن</h4>
                <h1 className="gradient__text">تکنولژی  <br /> فراتر از تصورات</h1>
                <p> تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی</p>
                <h4>هرچه زود تر کسب کارتو را بنداز</h4>
            </div>
            <div className="gpt3__possibility-image">
                <img src={possibilityImage} alt="Possibility" />
            </div>

        </div>
    )
}

export default Possibility ;


