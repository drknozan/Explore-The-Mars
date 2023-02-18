import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from "./mainLayout.module.css";

const MainLayout = ({ children }) => {
    return (
        <div className={styles.container}>
            <Header />
            { children }
            <Footer />
        </div>
    )
}

export default MainLayout;