//Object to change if cient change It's information in the Form

function updateClient(current,update){

    for(var key in update){
        current[key] = update[key];
    }

    return Object.assign({},current);
}

export default updateClient;