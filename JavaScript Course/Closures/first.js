const createSecret = (secret) => {
    return {
      getSecret: () => secret,
      setSecret: (newSecret) => {
        secret = newSecret;
      },
    };
  };
  
  const mySecret = createSecret("My secret");
  console.log(mySecret.getSecret()); // My secret
  
  mySecret.setSecret("My new secret");
  console.log(mySecret.getSecret()); // My new secret