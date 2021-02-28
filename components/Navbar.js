import navStyles from '../styles/Navbar.module.css'
import homeStyles from '../styles/Home.module.css'

export default  function Navbar () {
    return (
        <div className={navStyles.nav}>
            <div className={navStyles.container}>
                <h2 className={navStyles.h2}>J<span className={navStyles.bgBlue}>W.</span></h2>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <ul className={navStyles.list}>
                        <li className={navStyles.listItem}>About</li>
                        <li className={navStyles.listItem}>CV</li>

                    </ul>
                    <button className={navStyles.sayHi}>Say Hi!</button>
                </div>

            </div>
        </div>
    )
}