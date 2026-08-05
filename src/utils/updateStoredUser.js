import { loadUsers, saveUsers } from "./localStorage";

export default function updateStoredUser(updatedUser) {
    const allUsers = loadUsers();

    const updatedUsers = allUsers.map(user => {
        if (user.id === updatedUser.id) {
            return updatedUser
        }
        return user
    });

    saveUsers(updatedUsers);
}