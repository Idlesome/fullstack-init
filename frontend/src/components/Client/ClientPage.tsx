import React, { useState } from 'react';
import { ClientType } from 'types';
import { ErrorBoundary } from '../Common/ErrorBoundary';
import { Layout } from '../Common/Global/Layout';
import { ClientSearch } from './ClientSearch';
import { ClientTable } from './ClientTable/ClientTable';
import { LoadingStatus, useClients } from './use-clients';

export function ClientPage() {
  const [searchString, setSearchString] = useState('');
  // TODO: use status in a more meaningful way
  const { clients, status }: { clients: ClientType[]; status: LoadingStatus } =
    useClients(searchString);

  return (
    <Layout>
      <h1>Clients</h1>
      <ErrorBoundary>
        <ClientSearch setSearchString={setSearchString} />
        <ClientTable clients={clients} loadingStatus={status} />
      </ErrorBoundary>
    </Layout>
  );
}
