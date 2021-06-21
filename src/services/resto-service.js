export default class RestoService {

    getMenu() {
        return (
            fetch('http://localhost:3000/menu')
                .then((res)=>{
                    return res.json()
                })
                .then((body)=>{
                    return body;
                })
        )
    }
}