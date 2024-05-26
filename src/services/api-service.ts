import Keycloak from 'keycloak-js';

export const apiService = {
  getOrders: async (keycloak: Keycloak) => {
    if (!keycloak.authenticated) {
      throw new Error('User is not authenticated')
    }
    const response = await fetch('http://localhost:8080/protected-endpoint', {
      method: 'GET',
      headers: {'Authorization': `Bearer ${keycloak.token}`, 'Content-Type': 'application/json'}
    })
    return await response.json()
  }
}
