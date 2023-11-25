export default async function sendData (req, res) {
    console.log(`api server fetching data from data server and sending to client`);
    const dataRes = await fetch("http://localhost:3001/api/resources");
    const data = await dataRes.json();
    res.send(data);
}