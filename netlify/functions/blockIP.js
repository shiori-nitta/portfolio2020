exports.handler = async function(event, context) {
  const forbiddenIPs = ['77.222.40.224']; // ブロックしたいIPアドレスをここに記入
  const ip = event.headers['x-nf-client-connection-ip'];

  if (forbiddenIPs.includes(ip)) {
    return {
      statusCode: 403, // Forbidden
      body: 'Access denied'
    };
  }

  return {
    statusCode: 200,
    body: 'Access granted'
  };
};
