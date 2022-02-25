import React, { useEffect, useState } from 'react';
import { ClientType } from 'types';
import * as Api from './Api';

export type LoadingStatus = 'initial' | 'loading' | 'complete' | 'failed';

export function useClients(searchString: string) {
  const [clients, setClients] = useState<ClientType[]>([]);
  const [status, setStatus] = useState<LoadingStatus>('initial');

  useEffect(() => {
    const loadClients = async () => {
      setStatus('loading');
      setClients(await Api.fetchClientIndex());
      setStatus('complete');
    };
    loadClients();
  }, []);

  return {
    status,
    clients: clients.filter((client: ClientType) => {
      return (
        client.company.includes(searchString) ||
        client.name.includes(searchString) ||
        client.email.includes(searchString)
      );
    }),
  };
}
