import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import CardComponent from './components/CardComponent';
import CardClass from './components/CardClass';
import img1 from './assets/image/pexels-adrienn.jpg'
import img2 from './assets/image/pexels-apg.jpg'
import img3 from './assets/image/pexels-bhoopal.jpg'
import img4 from './assets/image/pexels-gianne.jpg'
import img5 from './assets/image/pexels-phil.jpg'
import img6 from './assets/image/pexels-pixabay.jpg'
import img7 from './assets/image/pexels-tuấn-kiệt.jpg'
import img8 from './assets/image/pexels-tuấn.jpg'
import img9 from './assets/image/pixabay.jpg'
import img10 from './assets/image/tuấn-kiệt-jr.jpg'

function App() {
  return (
    <div className="App">
      <div style={{ display: 'flex' }}>
        <CardComponent title="Mehul" sub="Waghela" image={img1} />
        <CardComponent title="Mehul" sub="Waghela" image={img2} />
        <CardComponent title="Mehul" sub="Waghela" image={img3} />
        <CardComponent title="Mehul" sub="Waghela" image={img4} />
        <CardComponent title="Mehul" sub="Waghela" image={img5} />
        <CardComponent title="Mehul" sub="Waghela" image={img6} />
        <CardComponent title="Mehul" sub="Waghela" image={img7} />
        <CardComponent title="Mehul" sub="Waghela" image={img8} />
        <CardComponent title="Mehul" sub="Waghela" image={img9} />
        <CardComponent title="Mehul" sub="Waghela" image={img10} />
      </div>
      <div style={{ display: 'flex' }}>
        <CardClass title="Mehul" sub="Waghela" image={img1} />
        <CardClass title="Mehul" sub="Waghela" image={img2} />
        <CardClass title="Mehul" sub="Waghela" image={img3} />
        <CardClass title="Mehul" sub="Waghela" image={img4} />
        <CardClass title="Mehul" sub="Waghela" image={img5} />
        <CardClass title="Mehul" sub="Waghela" image={img6} />
        <CardClass title="Mehul" sub="Waghela" image={img7} />
        <CardClass title="Mehul" sub="Waghela" image={img8} />
        <CardClass title="Mehul" sub="Waghela" image={img9} />
        <CardClass title="Mehul" sub="Waghela" image={img10} />
      </div>
    </div>
  );
}

export default App;
