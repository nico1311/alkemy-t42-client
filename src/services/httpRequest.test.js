const mockMakeGET = async (URL) => {
  try {
    const response = await fetch(URL, {
      Authorization: `bearer ${localStorage.getItem('token') || ''}`,
    });
    return response.json();
  } catch (error) {
    return error;
  }
};
const mockMakePOST = async (URL, body) => {
  try {
    const response = await fetch(URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      Authorization: `bearer ${localStorage.getItem('token') || ''}`,
      body: JSON.stringify(body),
    });
    return response.json();
  } catch (error) {
    return error;
  }
};
const mockMakeRequest = async (URL, verb, body = {}) => {
  try {
    const response = await fetch(URL, {
      method: verb,
      headers: { 'Content-Type': 'application/json' },
      Authorization: `bearer ${localStorage.getItem('token') || ''}`,
      body: JSON.stringify(body),
    });
    return response.json();
  } catch (error) {
    return error;
  }
};

describe('/services/httpRequest.js - Function work', () => {
  test('Does function makeGet working', async () => {
    const result = await mockMakeGET(
      'https://jsonplaceholder.typicode.com/todos/1',
    );
    expect(result).toHaveProperty('id', 1);
  });
  test('Does function makePOST working', async () => {
    const result = await mockMakePOST(
      'https://jsonplaceholder.typicode.com/posts',
      {
        title: 'foo',
        body: 'bar',
        userId: 1,
      },
    );
    expect(result).toHaveProperty('userId', 1);
  });
  test('Does function makeRequest with request PUT working', async () => {
    const result = await mockMakeRequest(
      'https://jsonplaceholder.typicode.com/posts/1',
      'PUT',
      {
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
      },
    );
    expect(result).toHaveProperty('userId', 1);
  });
  test('Does function makeRequest with request PATCH working', async () => {
    const result = await mockMakeRequest(
      'https://jsonplaceholder.typicode.com/posts/1',
      'PATCH',
      {
        title: 'foo',
      },
    );
    expect(result).toHaveProperty('title', 'foo');
  });
  test('Does function makeRequest with request DELETE working', async () => {
    const result = await mockMakeRequest(
      'https://jsonplaceholder.typicode.com/posts/1',
      'DELETE',
    );
    expect(result).toStrictEqual({});
  });
});
