import React from "react";
import data from "../../Asset/data.json";
import Modal from "react-modal";
import CalenderWidget from "../CalenderWidget";

const UserList = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [ind, setInd] = React.useState(0);

  const openModal = (ind) => {
    setIsOpen(true);
    setInd(ind);
  };

  function closeModal() {
    setIsOpen(false);
  }
  function handleCloseModal () {
      setIsOpen(false)
  }

  const ModalWin = () => (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      <CalenderWidget ind={ind} />
      <button className="btn btn-primary offset-5 mt-5" onClick={handleCloseModal}>close</button>
    </Modal>
  );

  return (
    <div>
      {modalIsOpen && ModalWin()}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Name</th>
            <th scope="col">Time Zone</th>
          </tr>
        </thead>
        <tbody>
          {data.members.map((e, i) => (
            <tr key={i} onClick={() => openModal(i)}>
              <th scope="row">{e.id}</th>
              <td> {e.real_name} </td>
              <td>{e.tz}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default UserList;
