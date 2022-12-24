import React, { useEffect, useState } from "react";
import { FiArrowLeft, FiLink, FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";
import LinkItem from "../../components/LinkItem";
import { deleteLink, getLinksSave } from "../../services/storeLink";
import "./links.css";
const Links = () => {
  const [myLinks, setMyLinks] = useState([]);
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [emptyList, setEmptyList] = useState(false);

  useEffect(() => {
    async function getLinks() {
      const result = await getLinksSave("@incurtaLink");

      if (result.length === 0) {
        setEmptyList(true);
      }

      setMyLinks(result);
    }
    getLinks();
  }, []);

  function handleOpenLink(link) {
    setData(link);
    setShowModal(true);
  }

  function handleDelete(linkId) {
    const result = setMyLinks(deleteLink(myLinks, linkId));
    if (result.length === 0) {
      setEmptyList(true);
    }

    setMyLinks(result);
  }

  return (
    <div className="links-container">
      <div className="links-header">
        <Link to="/">
          <FiArrowLeft size={38} color="#fff" style={{ cursor: "pointer" }} />
        </Link>
        <h1>Meus Links</h1>
      </div>

      {emptyList && (
        <div className="empty-text">
          <h1>Sua lista está vazia...</h1>
        </div>
      )}

      {myLinks.map((Link, index) => (
        <div key={index} className="links-item">
          <button className="link" onClick={() => handleOpenLink(Link)}>
            <FiLink size={24} color="#fff" />
            {Link.long_url}
          </button>
          <button className="link-delete" onClick={() => handleDelete(Link.id)}>
            <FiTrash size={24} color="#ff5454" />
          </button>
        </div>
      ))}

      {showModal && (
        <LinkItem closeModal={() => setShowModal(false)} content={data} />
      )}
    </div>
  );
};

export default Links;
