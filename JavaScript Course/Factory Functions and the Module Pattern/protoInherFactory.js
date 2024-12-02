function createUser(name) {
    let reputation = 0;
  
    const getReputation = () => reputation;
    const giveReputation = () => reputation++;
  
    return { name, getReputation, giveReputation };
  }
  
  function createPlayer(name, level = 1) {
    // Create the user object using createUser
    const user = createUser(name);
  
    // Define the increaseLevel function to increment the player's level
    const increaseLevel = () => {
      level++;
      console.log(`${name}'s level increased to ${level}`);
    };
  
    // Merge user methods and player-specific methods
    return Object.assign({}, user, { level, increaseLevel });
  }
  
  // Example usage
  const player = createPlayer('Alex', 5);
  
  console.log(player.name); // Alex
  console.log(player.level); // 5
  player.increaseLevel(); // Logs: "Alex's level increased to 6"
  console.log(player.level); // 5 (player.level won't auto-update since level is not a reference)
  
  // Access user-specific functionality
  console.log(player.getReputation()); // 0
  player.giveReputation();
  console.log(player.getReputation()); // 1
  