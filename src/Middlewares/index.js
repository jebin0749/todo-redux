const getMiddlewares =()=>{
    const middleWares=[];
    if(ProcessingInstruction.env.NODE_ENV==='development')
      {
        middleWares.push(logger);
      }
      return middleWares;
}

const logger = (store) => (next) => (action) => {

    console.group(action.type);
  
    console.info('dispatching', action);
  
    let result = next(action);
  
    console.log('next state', store.getState());
  
    console.groupEnd(action.type);
  
    return result;
  
  };
  
  export default getMiddlewares;