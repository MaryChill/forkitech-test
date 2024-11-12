'use client'
import Link from "next/link";
import {useState} from "react";
import Toggle from "@/components/UI/toggle/Toggle";

export default function Nav() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [menu, setMenu] = useState(false)
    const [notice, setNotice] = useState(false)
    setTimeout(() => {
        setNotice(true)
    }, 10000)
    const navClass = ["nav__white"]
    const noticeClass = ['nav__notice']
    function handleToggle(index) {
        setActiveIndex((prevIndex) => (prevIndex === index ? 0 : index))
    }
    const list =['Преимущества Tele2', 'Тарифы', 'Акции и спецпредложения', 'Промотариф Tele2', 'Технология eSIM', 'Подключение нового абонента']
    menu && navClass.push("nav__white--active")
    notice && noticeClass.push("nav__notice--active")
    return (
        <nav className='nav'>
            <div className='nav__black'>
                <div className="container nav__wrapper">
                    <Link href="/">
                        <img src="/svg/logo.svg" alt="tele2"/>
                    </Link>
                    <div className='nav__btns'>
                        <span className='nav__map'>Москва и область</span>
                        <button onClick={() => setNotice(false)}>
                            <img className={noticeClass.join(' ').trim()} src="/svg/bell.svg" alt="tele2"/>
                        </button>
                        <button className="nav__menu" onClick={() => setMenu(prevState => !prevState)}>
                            <img src={menu ? '/svg/close.svg' : '/svg/menu.svg'} alt=""/>
                        </button>
                    </div>
                </div>
            </div>
            <div className={navClass.join(' ').trim()}>
                <ul className='nav__list container'>
                {list.map((el, index) =>
                        <li key={index}><Toggle handleToggle={() => handleToggle(index)} isActive={activeIndex === index} setMenu={setMenu}>{el}</Toggle></li>
                    )}
                </ul>
            </div>
        </nav>
    )
}