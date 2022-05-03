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
    
    getData(data);
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
   
    getData(data);
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
   
    getData(data);
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
   
    getData(data);
}

module.exports = {
    getCharacter,
    getCharacterList,
    getLocationDetails,
    getLocationsList
}