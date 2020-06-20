/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8080");

function Home() {
  const [state, setState] = useState({ message: "", name: "" });
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on("message", ({ name, message }) => {
      setChat((chat) => [...chat, { name, message }]);
    });
  }, []);

  const onMessageSubmit = (e) => {
    e.preventDefault();
    const { name, message } = state;
    socket.emit("message", { name, message });
    setState({ message: "", name });
  };

  const onTextChange = (e) => {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;

    setState({ ...state, [target.name]: value });
  };

  const renderChat = () => {
    console.log(chat);

    return chat.map(({ name, message }, index) => (
      <div key={index}>
        <h3>
          {name}: <span> {message}</span>
        </h3>
      </div>
    ));
  };

  return (
    <div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <form onSubmit={onMessageSubmit}>
                <h1>Messenger</h1>
                <input
                  type="text"
                  name="name"
                  value={state.name}
                  onChange={onTextChange}
                />
                <input
                  type="text"
                  name="message"
                  value={state.message}
                  onChange={onTextChange}
                />
                <button type="submit">Send</button>
              </form>
              <div className="render-chat">
                <h1>Chat</h1>
                {renderChat()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Home);
