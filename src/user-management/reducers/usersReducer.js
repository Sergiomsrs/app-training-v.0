export const userReducer = (state = [], action) => {

    switch (action.type) {
        case 'ADD_USER':
            return [...state,
            {
                ...action.payload,
                id: new Date().getTime()
            }
            ];

        case 'DELETE_USER':
            return state.filter(user => user.id !== action.payload);

        case 'UPDATE_USER':
            return state.map(user => {
                if (user.id === action.payload.id) {
                    return {
                        ...action.payload,
                        password: user.password
                    };
                }
                return user;
            });

        case 'LOADING_USERS':
            return action.payload;
        
            default:
            return state;
    }
}