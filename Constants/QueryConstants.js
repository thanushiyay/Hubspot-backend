const queryConstants = () => {
    const users = {
        SAVE_USER: 'INSERT INTO USERS(name, email, password) VALUE (?,?,?)',
        GET_USER: 'SELECT * FROM USERS WHERE email = ?',
        GET_USER_PRODUCTS : 'select users.id, users.name, users.email, products.name as P_name,products.id as P_id, category.id as C_id, category.name as C_name from users Inner join products on users.id = products.user_id Left join category on products.category_id = category.id'
    }
    return {users}
}
module.exports = { queryConstants }