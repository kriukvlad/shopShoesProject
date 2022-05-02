import bcrypt from "bcryptjs";

const users = [
    {
        name: "Admin",
        email: "admin@example.com",
        password: bscrypt.hashSync("admin12345", 10), 
        isAdmin: true 
    },
    {
        name: "User",
        email: "user@example.com",
        password: bscrypt.hashSync("admin12345", 10)
    }
];

export default users;