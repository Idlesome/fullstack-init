import React from 'react';
import Table from 'react-bootstrap/Table';
import { ClientType } from 'types';
import { LoadingStatus } from '../use-clients';
import { ClientTableBody } from './ClientTableBody';
import { ClientTableSkeleton } from './ClientTableSkeleton';

export function ClientTable({
  clients,
  loadingStatus,
}: {
  clients: ClientType[];
  loadingStatus: LoadingStatus;
}) {
  const clientsLoaded = loadingStatus !== 'loading';

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Company</th>
          <th>Created</th>
          <th>ID</th>
        </tr>
      </thead>
      {clientsLoaded ? (
        <ClientTableBody clients={clients} />
      ) : (
        <ClientTableSkeleton />
      )}
    </Table>
  );
}
