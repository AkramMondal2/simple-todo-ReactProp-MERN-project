import { useState } from "react";
import DeleteModal from "./DeleteModal";
import { Link } from "react-router-dom";

const Card = ({ title, id, getAll }) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [todoId, setTodoId] = useState();

  return (
    <div className="flex gap-4 justify-center items-center mt-4">
      <div className="w-44">{title}</div>
      <Link to={`updateTodo/${id}`}>
        <button className="bg-black text-white p-2  rounded">Edit</button>
      </Link>
      <button
        onClick={() => {
          setDeleteModal(true);
          setTodoId(id);
        }}
        className="bg-black text-white p-2 rounded"
      >
        Delete
      </button>
      {deleteModal && (
        <DeleteModal
          setDeleteModal={setDeleteModal}
          todoId={todoId}
          getAll={getAll}
        />
      )}
    </div>
  );
};

export default Card;
