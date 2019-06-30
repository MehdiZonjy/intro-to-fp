
interface Homepage {

}
const axios = {
    post: (o: any)=> void
}

const generateHomePages  = (homepage: Homepage) => {
    createFreeFP(homepage)
    createVipFP(homepage)
     // createVipFP mutated homepage 
    createPartnerHp(homepage)
}

let counter = 0
const doStuff = () => {
    counter++
} // impure as counter changed
const log = (msg: string) => {
    console.log(msg)
} // impure as now there is a msg in stdout
const saveChanges = (u: any) => {
    axios.post(u)
} // impure as the db changed

const foo = (n: number) : number => {
    let result = 0
    if(n % 2 === 0) {
        result = n
    }
    return result
}

class Counter {
    private val: number = 0
    public  inc(){
        this.val++
    }
    public getCounter(): number {
        return this.val
    }
}


const createFreeFP = (hp: Homepage) => {

}

const createVipFP = (hp: Homepage) => {

}
const createPartnerHp = (hp: Homepage) => {

}