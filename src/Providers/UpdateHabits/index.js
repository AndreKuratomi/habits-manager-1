import { createContext, useState, useContext } from "react";
import api from "../../Services/api";

const UpdateContext = createContext();

const token = JSON.parse(localStorage.getItem("@Habits:access"));

export const UpdateProvider = ({ children }) => {
  const [update, setUpdate] = useState({});

  const updateElements = (id, data) => {
    api
      .patch(`/habits/${id}/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  };

  const updateGoal = (id, data) => {
    api
      .patch(`/goals/${id}/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  };

  return (
    <UpdateContext.Provider
      value={{ updateElements, update, setUpdate, updateGoal }}
    >
      {children}
    </UpdateContext.Provider>
  );
};

export const useUpdate = () => useContext(UpdateContext);
