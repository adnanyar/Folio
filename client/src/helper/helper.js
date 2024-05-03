const ajax = async (uri, method, data) => {
  try {
      const requestOptions = {
          method: method,
          headers: {
              'Content-Type': 'application/json', // Assuming JSON data
          },
      };

      // Include request body for non-GET and non-HEAD requests
      if (data && (method === 'POST' || method === 'PUT' || method === 'PATCH')) {
          requestOptions.body = JSON.stringify(data);
      }

      const response = await fetch(uri, requestOptions);

      if (!response.ok) {
          throw new Error('Network response was not ok');
      }

      return await response.json();
  } catch (error) {
      throw new Error('Request failed: ' + error.message);
  }
}


module.exports={
    ajax
}