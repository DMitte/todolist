const namespaced = true
const state = {
    token: null
}
const mutations = {
    setToken(state, payload){
        this.state.token = payload
    }
}
const action = {
    async register(usuario){
        try{
            const res = await fetch('http://localhost:3001/api/user/register',{
                method: 'POST',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify(usuario)
            })
            const usuDB = await res.json();
            return usuDB;
        }catch (e){
            console.log('error:', e);
        }
    },
    async login ({commit}, usuario){
        try{
            const res = await fetch('http://localhost:3001/api/user/login', {
                method:'POST',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify(usuario)
            })
            const usuDB = await res.json();
            commit('setToken', usuDB.data.token);
            this.$cookies.set('auth-sesion', usuDB.data.token, '2d', '/', '','true')

        }catch (e) {
            console.log('error:', e);
        }
    }
}
const getter ={}

module.exports = {namespaced,state, mutations, action, getter}

