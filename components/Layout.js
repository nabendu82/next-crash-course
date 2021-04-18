import styles from '../styles/Layout.module.css'
import Navbar from './Navbar'
import Header from './Header'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <main className={styles.main}>
                    <Header />
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout
