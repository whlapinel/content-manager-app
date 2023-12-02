import axios from 'axios';

export default async function sendData (req, res) {
    if (req.method === "GET") {
        const dataRes = await fetch("http://localhost:3001/api/resources");
        const data = await dataRes.json();
        return res.send(data);
    }

    if (req.method === 'POST') {
        console.log(req.body);
        const {title, description, link, timeToFinish, priority} = req.body;
        if (!title || !description || !link || !timeToFinish || !priority) {
            return res.status(422).send('Data are missing!');
        }
        else {
            try {
                const axiosResponse = await axios.post('http://localhost:3001/api/resources', req.body);
                return res.send(axiosResponse.data);
            } catch(err) {
                return res.status(422).send('Data cannot be stored!');
            }
        }



    }
    console.log(`client requesting data. api server fetching data from data server and sending to client`);
}