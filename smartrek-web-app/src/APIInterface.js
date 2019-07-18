const APILocation = 'http://localhost:5000/';

// talk requires the calling function to be async.
// endpoint (str): name of endpoint
// obj (object): object to send to endpoint
// returns object
export async function talk(endpoint, obj){
  if (obj == null){
  	const response = await fetch(APILocation + endpoint);
    return await response.json();
  }
  else{
    const response = await fetch(APILocation + endpoint, {
      method: 'POST',
      body: JSON.stringify(obj)
    });
    return await response.json();
  }
}

// export function export function get(endpoint, object){
// 	const response = await fetch(APILocation);
// 	return await response.json();
// }
