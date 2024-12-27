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
    <>
      <Header />
      <Diseases/>
      {/* <PatientVideos/> */}
      <Location/>
      <ImageSlideShow/>
      <Footer/>
      <div className="home">
        <Posts posts={posts} />
      </div>
    </>
  );
}
