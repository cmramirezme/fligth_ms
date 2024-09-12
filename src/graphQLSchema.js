import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	usuarioQueries,
	usuarioTypeDef,
	usuarioMutations,
	flightTypeDef,
	flightQueries,
	countryMutations
} from './swarch2023ii/categories/typeDefs';

import usuarioResolvers from './swarch2023ii/categories/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		usuarioTypeDef,
		flightTypeDef
	],
	[
		usuarioQueries,
		flightQueries
	],
	[
		usuarioMutations,
		countryMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		usuarioResolvers
	)
});
