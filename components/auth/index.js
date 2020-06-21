import { AsyncStorage } from 'react-native';

class Auth {
    getStorage(){
        return AsyncStorage.getItem('@Store')
    }

    setStorage(token){
        AsyncStorage.setItem('@Store', token)
    }

    clearStorage(){
        AsyncStorage.setItem('@Store')
    }
}

export default new Auth();