const res = require("express/lib/response");
const getData = require("../common")

async function getCharacter(req, res) 
{
    let data = JSON.stringify({
        query: `{
            character (id: ${req.params.id}){
            name,
                status,
            gender,
            species,
            }
        }
        `
    });
    
    data = await getData(data);

    if (data.status !== 200) {
        res.status(data.status).send({message: "Error, could'nt get data"});
        return;
    }

    res.status(data.status).send({data});
    return;
}

async function getCharacterList(req, res) 
{
    let data = JSON.stringify({
        query: `{
            characters {
              results {
                  id,
                name,
                status
                gender,
                species, 
              }
            }
          }`
    });
   
    data = await getData(data);

    if (data.status !== 200) {
        res.status(data.status).send({message: "Error, could'nt get data"});
        return;
    }

    res.status(data.status).send({data});
    return;
}

async function getLocationsList(req, res)
 {
    let data = JSON.stringify({
        query: `{
            locations {
            results {
                id,
              name,
              type,
              dimension
            }
          }
        }`        
    });
   
    data = await getData(data);

    if (data.status !== 200) {
        res.status(data.status).send({message: "Error, could'nt get data"});
        return;
    }

    res.status(data.status).send({data});
    return;
}

async function getLocationDetails(req, res)
{
    let data = JSON.stringify({
        query: `{{
            location (id: ${req.params.id}){
                name,
                residents {
                name,
                species
                }
            }
            }`        
    });
   
    data = await getData(data);

    if (data.status !== 200) {
        res.status(data.status).send({message: "Error, could'nt get data"});
        return;
    }

    res.status(data.status).send({data});
    return;
}

module.exports = {
    getCharacter,
    getCharacterList,
    getLocationDetails,
    getLocationsList
}