import React, { useState } from "react";
import { FiLink } from "react-icons/fi";
import LinkItem from "../../components/LinkItem";
import Menu from "../../components/Menu";
import api from "../../services/api";
import { saveLink } from "../../services/storeLink";
import "./home.css";

const Home = () => {
  const [link, setLink] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({});

  async function handleShortLink() {
    try {
      const response = await api.post("/shorten", {
        long_url: link,
      });

      saveLink("@incurtaLink", response.data);
      setData(response.data);
      setShowModal(true);
    } catch {
      alert("error 404");
      setLink("");
    }
  }

  return (
    <div className="container-Home">
      <div className="logo">
        <img src="/logo2.png" alt="sujeitoLinkLogo" />
        <h1>SujeitoLinks</h1>
        <span>Cole seu link para encurtar👇</span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color="#fff" />
          <input
            placeholder="Cole seu link aqui..."
            value={link}
            onChange={(event) => setLink(event.target.value)}
          />
        </div>
        <button onClick={handleShortLink}>Gerar Link</button>
      </div>
      <Menu />

      {showModal && (
        <LinkItem content={data} closeModal={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default Home;
