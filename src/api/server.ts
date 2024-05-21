import authToken from '../auth_token.json'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://los-codos-customs.onrender.com/api/cars`,
         {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${authToken.token}`,
                'Access-Control-Allow-Origin': '*',
            }
         });

         if(!response.ok){
            throw new Error('Failed to fetch data')
         }

         return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://los-codos-customs.onrender.com/api/cars`,
         {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${authToken.token}`,
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(data)
         });

         if(!response.ok){
            throw new Error('Failed to create new data')
         }

         return await response.json()
    },

    update: async (id: string, data: any = {}) => {
        const response = await fetch(`https://los-codos-customs.onrender.com/api/cars/${id}`,
         {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${authToken.token}`,
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(data)
         });

         if(!response.ok){
            throw new Error('Failed to update data')
         }

         return await response.json()
    },

    
    delete: async (id: string) => {
      const response = await fetch(`https://los-codos-customs.onrender.com/api/cars/${id}`,
       {
          method: "DELETE",
          headers: {
              'Content-Type': 'application/json',
              'x-access-token': `Bearer ${authToken.token}`,
              'Access-Control-Allow-Origin': '*',
          }
       });

       if(!response.ok){
          throw new Error('Failed to delete data')
       }

       return;
  }


}
