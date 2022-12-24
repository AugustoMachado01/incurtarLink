import { FiClipboard, FiX } from "react-icons/fi";
import "./link-item.css";

const LinkItem = ({ closeModal, content }) => {
  async function copyLink() {
    //funcao para fazer o copy past
    await navigator.clipboard.writeText(content.link);
    alert("url copiada com sucesso");
  }
  return (
    <div className="modal-container">
      <div className="modal-header">
        <h2>Link encurtado</h2>
        <button onClick={closeModal}>
          <FiX size={28} color="#000" />
        </button>
      </div>
      <span>{content.long_url}</span>
      <button className="modal-link" onClick={copyLink}>
        {content.id}
        <FiClipboard size={20} color="#fff" />
      </button>
    </div>
  );
};

export default LinkItem;
