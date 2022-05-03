const res = require("express/lib/response");
const getData = require("../common")

function getCharacter(id) 
{
    const data = JSON.stringify({
        query: `{
            character (id: ${id}){
            name,
                status,
            gender,
            species,
            }
        }
        `
    });
    
    data = getData(data);

    if (!data.status !== 200) {
        res.status(data.status).send({message: "Error, could'nt get data"});
        return;
    }

    res.status(data.status).send({data});
    return;
}

function getCharacterList() 
{
    const data = JSON.stringify({
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
   
    data = getData(data);

    if (!data.status !== 200) {
        res.status(data.status).send({message: "Error, could'nt get data"});
        return;
    }

    res.status(data.status).send({data});
    return;
}

function getLocationsList()
 {
    const data = JSON.stringify({
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
   
    data = getData(data);

    if (!data.status !== 200) {
        res.status(data.status).send({message: "Error, could'nt get data"});
        return;
    }

    res.status(data.status).send({data});
    return;
}

function getLocationDetails(id)
{
    const data = JSON.stringify({
        query: `{{
            location (id: ${id}){
                name,
                residents {
                name,
                species
                }
            }
            }`        
    });
   
    data = getData(data);

    if (!data.status !== 200) {
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