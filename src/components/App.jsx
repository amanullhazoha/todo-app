import './css/global.css';
import ButtonGroups from './Layout/ButtonGroups';
import Footer from './Layout/Footer';
import Header from './Layout/Header';
import Layout from './Layout/Layout';
import MainContent from './Layout/MainContent';

const App = () => (
    <Layout>
        <Header />
        <ButtonGroups />
        <MainContent />
        <Footer />
    </Layout>
);

export default App;
