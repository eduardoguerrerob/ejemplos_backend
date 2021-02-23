const express = require("express");
const app = express();
app.use(express.json());

const { getBandas, getBandasBy } = require("./repository/bandasRepository");

// endpoints
app.get("/bandas", async (req, res) => {

    const result = await getBandas();
    res.json(result);

})




// listen
app.listen(3000, () => console.log("Escuchando en el puerto 3000"))
