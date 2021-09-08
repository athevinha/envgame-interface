import "./Chat.css";
import avatar_unknow from "./avatar.jpg";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ChatService from "../../service/chat.service";
import { ToastContainer, toast } from "react-toastify";
import ScrollToBottom from "react-scroll-to-bottom";
import io from "socket.io-client";

const socket = io("https://envgame-chat.herokuapp.com/");
export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chat: "",
      listchat: [],
      scrollPixelsY: 0,
    };
    ChatService.getAll().then((req) => {
      this.setState({ listchat: req.data });
    });
    this.chat_content = React.createRef();
  }
  componentDidMount() {}
  componentWillUnmount() {
    let { user } = this.props;
  }
  onChat = (e) => {
    this.setState({ chat: e.target.value });
  };

  onSubmitChat = (e) => {
    e.preventDefault();
    if (this.state.chat != "") {
      const d = new Date();
      let mess_obj = {
        username:
          this.props.user.username == null
            ? "Unknown"
            : this.props.user.username,
        mess: this.state.chat,
        image:
          this.props.user.avatar == null
            ? avatar_unknow
            : this.props.user.avatar,
        time: `${d.getHours()}:${d.getMinutes()} | ${d.getDate()}/${
          d.getMonth() + 1
        }/${d.getFullYear()}`,
        color: "",
      };
      socket.emit("send message", mess_obj);
      // let { listchat } = this.state;
      // listchat.push(mess_obj);
      // this.setState({ listchat: listchat, chat: "" });
      // ChatService.create(mess_obj).then((res) => {});
    }
  };
  componentDidMount() {
    socket.on("send message", (res) => {
      let chat_content = res.data;
      let { listchat } = this.state;
      listchat.push(chat_content);
      this.setState({ listchat: listchat, chat: "" });
      ChatService.create(chat_content).then((res) => {});
    });
  }
  render() {
    return (
      <ScrollToBottom className="auto">
        <div className="background-iframe ">
          <div className="enter"></div>
          <div className="enter"></div>
          <ToastContainer />
          {/* Same as */}
          <ToastContainer />
          <div className="messages chat_router">
            {this.state.listchat.map((mess_obj, id) => {
              return (
                <div className="message" key={id}>
                  <span>
                    <img src={mess_obj.image} className="image_chat" />
                    <i className="time_chat">
                      <small>{mess_obj.time}</small>
                    </i>
                    {" | "}
                    <b>{mess_obj.username}:</b> {mess_obj.mess}{" "}
                  </span>
                </div>
              );
            })}
            <div className="enter"></div>
            <div className="enter"></div>
            <div className="enter"></div>
            <div className="enter"></div>

            <form
              class="form-group"
              className="input_chat"
              onSubmit={this.onSubmitChat}
            >
              <input
                type="text"
                className="form-control input_T input_chat_mess"
                onChange={this.onChat}
                value={this.state.chat}
                aria-describedby="helpId"
                placeholder="Send Message..."
              />
              <button type="submit" className="btn btn-info submit_chat">
                <i class="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </ScrollToBottom>
    );
  }
}
