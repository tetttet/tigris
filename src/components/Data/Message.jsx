import { useState } from "react";
import base_url from "./../../url.js";

const Message = () => {
  const [messages, setMessages] = useState([]);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    comment: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Проверка на пустые данные
    if (!formData.first_name || !formData.last_name || !formData.email || !formData.comment) {
      alert("Пожалуйста, заполните все поля.");
      return;
    }

    try {
      const res = await fetch(`${base_url}/api/v1/messages/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Проверка успешного статуса ответа
      if (!res.ok) {
        throw new Error("Не удалось добавить сообщение");
      }

      const newMessage = await res.json();
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setFormData({ first_name: "", last_name: "", email: "", comment: "" });
    } catch (err) {
      console.error("Error adding message:", err);
      alert("Произошла ошибка при добавлении сообщения.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="mb-2 font-semibold text-gray-900">Add a Message</h2>
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          value={formData.first_name}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full mb-2"
          required
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={formData.last_name}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full mb-2"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full mb-2"
          required
        />
        <textarea
          name="comment"
          placeholder="Comment"
          value={formData.comment}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full mb-2"
          required
        />
        <button type="submit" className="primary-button text-white p-2 rounded">Send Message</button>
      </form>
    </div>
  )
}

export default Message