import { Request, Response } from 'express';
import { Client } from './client.model';

export async function index(request: Request, response: Response) {
  const clients = await Client.find();
  response.send(clients);
}

export async function get(request: Request, response: Response) {
  const clients = await Client.findOne({
    _id: request.params.id,
  });
  response.send(clients);
}

export async function store(request: Request, response: Response) {
  const client = new Client({
    name: 'Other Name',
    email: 'something@example.com',
    company: 'New Co',
  });
  await client.save();
  response.send(client);
}

export async function remove(request: Request, response: Response) {
  try {
    await Client.deleteOne({ _id: request.params.id });
    response.status(204).send();
  } catch {
    response.status(404);
    response.send({ error: 'Client not found' });
  }
}
