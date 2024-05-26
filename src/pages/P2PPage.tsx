import {apiService} from '../services/api-service.ts';
import {useEffect, useState} from 'react';
import {useKeycloak} from '@react-keycloak/web';

export const P2PPage = () => {
  const [orders, setOrders] = useState({});
  const {keycloak} = useKeycloak();
  useEffect(() => {
    if (!keycloak.authenticated) {
      return;
    }
    apiService.getOrders(keycloak).then((data) => {
      setOrders(data);
    });
  }, [keycloak.authenticated])
  return (
    <div>
      <h1>P2P Page</h1>
      <p>{JSON.stringify(orders)}</p>
    </div>
  );
}

export default P2PPage;