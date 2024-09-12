import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint,entryPointFlight, portFlight } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;
const URLFlight =`http://${url}:${portFlight}/${entryPointFlight}`;

const resolvers = {
	Query: {
		allUsers: (_) =>
			getRequest(URL, ''),
		usuarioByNombre: (_, { nombre }) =>
			generalRequest(`${URL}/${nombre}`, 'GET'),
		FlightByOrigDest: (_, parameters ) =>
			generalRequest(`${URLFlight}/flight`, 'GET',parameters),
		
	},
	Mutation: {
		createUsuario: (_, { usuario }) =>
			generalRequest(`${URL}`, 'POST', usuario),
		updateUsuario: (_, { email, usuario }) =>
			generalRequest(`${URL}/${email}`, 'PUT', usuario),
		deleteUsuario: (_, { email }) =>
			generalRequest(`${URL}/${email}`, 'DELETE'),
		createCountry: (_, { country_name }) =>
			generalRequest(`${URLFlight}/country`, 'POST', country_name),
	}
};

export default resolvers;
