

function getCharacter(name) 
{

const data = JSON.stringify({
    query: `{
      character(name:${name}) {
        name
      }
    }`,
});
}

function getCharacterLists() 
{

}

function getEpisodesList()
 {

}

function getEpisodeDetails()
{

}