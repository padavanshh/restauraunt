export default class RestoService {

//     getMenu() {
//         return (
//             fetch('http://localhost:3000/menu')
//                 .then((resolve) => resolve.json())
//                 .then(body => body)
//         )
//     };
// };

    getMenu = async () => {
        const res = await fetch('http://localhost:3000/menu')
        const body = await res.json()
        return await body
    };
}