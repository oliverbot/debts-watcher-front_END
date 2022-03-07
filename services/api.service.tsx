import API from '../debts.api'

const DebtAPI = {
    searchByCEP: async () =>{
        return API.get("/getTotalDebtsData?getCurrentDebts=true")
    }
}

export default DebtAPI
