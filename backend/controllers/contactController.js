import ContactModel from "../models/contactModel.js";

// send message
export const sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    const newMessage = await ContactModel.create({
      name,
      email,
      message,
    });

    return res.status(201).json({
      message: "Message sent successfully",
      data: newMessage,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Error while sending message",
      error: err.message,
    });
  }
};

// get all messages

export const getMessages = async (req, res) => {
  try {
    const messages = await ContactModel.find().sort({ createdAt: -1 });

    if (messages.length === 0) {
      return res.status(200).json({
        message: "No messages found",
        totalMessages: 0,
        data: [],
      });
    }
    return res
      .status(200)
      .json({ totalMessages: messages.length, data: messages });
  } catch (err) {
    return res.status(500).json({
      message: "Error while getting all messages",
      error: err.message,
    });
  }
};

// delete message

export const deleteMessage = async (req, res) => {
  try {
    const messageID = req.params.id;
    const deletedMessage = await ContactModel.findByIdAndDelete(messageID);

    if (!deletedMessage) {
      return res.status(404).json({ message: "Message not found" });
    }
    return res.status(200).json({ message: "Message deleted successfully" });
  } catch (err) {
    return res.status(500).json({
      message: "Error while deleting message",
      error: err.message,
    });
  }
};
