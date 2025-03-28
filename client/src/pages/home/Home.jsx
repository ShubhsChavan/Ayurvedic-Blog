import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router";
import Diseases from "../../components/diseases/Diseases";
import Location from "../../components/locations/Location";
import PatientVideos from "../../components/patientvideos/PatientVideos";
import ImageSlideShow from "../../components/imageslideshow/ImageSlideShow";
import DiseaseInfoModal from "../../components/diseaseinfomodal/DiseaseInfoModal";
import Footer from "../../components/footer/Footer";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <div className="home-container">
      <Header />
      <Diseases/>
      {/* <PatientVideos/> */}
      <Location/>
      <ImageSlideShow/>
      <Footer/>
      <div className="home">
        <Posts posts={posts} />
      </div>
      <div className="whatsapp-icon">
      <a
        href="https://wa.me/918412839460?text=Hello,%20I%20want%20to%20book%20appoinment!t"
        target="_blank"
        style={{ position: 'fixed', bottom: '30px', right: '20px', zIndex: 1000 }}
      >
        <img
          src='\assets\Images\whatsapp.svg' 
          alt="WhatsApp"
          style={{ width: '60px', height: '60px' }}
        />
      </a>
      </div>
    </div>
  );
}
