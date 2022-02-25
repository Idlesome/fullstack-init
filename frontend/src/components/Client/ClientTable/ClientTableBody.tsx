import React from 'react';
import { ClientType } from 'types';
import { parseISO, format } from 'date-fns';

const getFormattedDate = (client: ClientType) => {
  const parsedDate = parseISO(client.createdAt);
  return format(parsedDate, 'kk:mm dd/MM/yyyy');
};

export function ClientTableBody({ clients }: { clients: ClientType[] }) {
  return (
    <tbody>
      {clients.map((client, index) => (
        <tr key={index}>
          <td>{client.name}</td>
          <td>{client.company}</td>
          <td>{client.email}</td>
          <td>{getFormattedDate(client)}</td>
          <td>{client._id}</td>
        </tr>
      ))}
    </tbody>
  );
}
