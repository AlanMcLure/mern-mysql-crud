import { pool } from "../db.js";

export const getTasks = async (req, res) => {
  const [rows] = await req.context.models.Task.findAll();
  return res.send(rows);
}

export const getTask = async (req, res) => {
  const [rows] = await req.context.models.Task.findAll();
  return res.send(rows);
}

export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const [result] = await pool.query('INSERT INTO tasks (title, description) VALUES (?, ?)', [ title, description ]);
    res.json({id: result.insertId, title, description});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const updateTask = async (req, res) => {
  const [rows] = await req.context.models.Task.findAll();
  return res.send(rows);
}

export const deleteTask = async (req, res) => {
  const [rows] = await req.context.models.Task.findAll();
  return res.send(rows);
}