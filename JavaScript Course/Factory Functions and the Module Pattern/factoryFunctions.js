const User = function(name) {
    this.name = name;
    this.discordName = "@" + name;
};

User.prototype.getName = function() {
    return this.name;
};

User.prototype.getDiscordName = function() {
    return this.discordName;
};

// Adding a subclass (Inheritance)
const AdminUser = function(name, adminLevel) {
    User.call(this, name); // Call the parent constructor
    this.adminLevel = adminLevel;
};

// Inheriting User's prototype
AdminUser.prototype = Object.create(User.prototype);
AdminUser.prototype.constructor = AdminUser;

AdminUser.prototype.getAdminLevel = function() {
    return this.adminLevel;
};

// Usage
const admin1 = new AdminUser("Felix", 5);
console.log(admin1.getName());        // "Felix"
console.log(admin1.getDiscordName()); // "@Felix"
console.log(admin1.getAdminLevel());  // 5
