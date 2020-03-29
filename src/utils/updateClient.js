function updateClient(current,update){

    for(var key in update){
        current[key] = update[key];
    }

    return Object.assign({},current);
}

export default updateClient;